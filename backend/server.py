from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, BeforeValidator
from typing import List, Optional, Annotated
from datetime import datetime, timezone, timedelta
from bson import ObjectId
import os
import logging
import uuid
import jwt
import bcrypt

# ── MongoDB ──────────────────────────────────────────────────────────────────
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# ── App & Router ─────────────────────────────────────────────────────────────
app = FastAPI(title="Barqat Luxury Gifting API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ── ObjectId helper ───────────────────────────────────────────────────────────
def str_object_id(v):
    if isinstance(v, ObjectId):
        return str(v)
    return v

PyObjectId = Annotated[str, BeforeValidator(str_object_id)]

# ── Auth helpers ──────────────────────────────────────────────────────────────
JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode(), hashed.encode())

def create_token(email: str) -> str:
    payload = {
        "email": email,
        "role": "admin",
        "exp": datetime.now(timezone.utc) + timedelta(hours=24),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(request: Request) -> dict:
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = auth[7:]
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

# ── Product Model ─────────────────────────────────────────────────────────────
class Product(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    name: str
    price: int
    description: str
    image: str
    category: str
    badge: Optional[str] = None
    in_stock: bool = True
    created_at: Optional[str] = None

    model_config = {"populate_by_name": True}

class ProductCreate(BaseModel):
    name: str
    price: int
    description: str
    image: str
    category: str
    badge: Optional[str] = None
    in_stock: bool = True

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[int] = None
    description: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None
    badge: Optional[str] = None
    in_stock: Optional[bool] = None

# ── Admin Auth Model ──────────────────────────────────────────────────────────
class AdminLogin(BaseModel):
    email: str
    password: str

# ── Seed Data ─────────────────────────────────────────────────────────────────
SEED_PRODUCTS = [
    {
        "name": "Royal Festive Celebration Hamper",
        "price": 8499,
        "description": "A vibrant, hand-assembled festive hamper in a luxurious pink basket — filled with organic gulal, artisan sweets, pichkari, decorative accessories and more.",
        "image": "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/4jktw50b_Poduct%20%281%29.jpeg",
        "category": "Festive Gifting",
        "badge": "Bestseller",
        "in_stock": True,
    },
    {
        "name": "Corporate Elegance Tray",
        "price": 12999,
        "description": "An exquisite gold-trimmed rectangular tray curated for corporate gifting — tasteful, branded presentation with premium festive items and elegant accessories.",
        "image": "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg",
        "category": "Corporate Gifting",
        "badge": "Corporate Pick",
        "in_stock": True,
    },
    {
        "name": "Bespoke Luxury Gift Box",
        "price": 15499,
        "description": "Our signature pink-and-gold woven basket — fully customizable, overflowing with premium curated items. Perfect for festive occasions and client appreciation.",
        "image": "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0lrp8l59_Poduct%20%283%29.jpeg",
        "category": "Festive Gifting",
        "badge": "Premium",
        "in_stock": True,
    },
    {
        "name": "Bridal Wedding Favour Basket",
        "price": 6999,
        "description": "A charming hand-crafted basket on golden legs — thoughtfully styled for wedding favours and bridal gifting, adorned with jute florals and peacock feathers.",
        "image": "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0wp3cmoq_Poduct%20%284%29.jpeg",
        "category": "Wedding Favours",
        "badge": "Bridal Collection",
        "in_stock": True,
    },
    {
        "name": "Heritage Trousseau Grand Hamper",
        "price": 19999,
        "description": "Our grandest offering — a beautifully woven natural basket crafted for trousseau packing, featuring dried botanicals, tassels, peacock feathers and artisan treasures.",
        "image": "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg",
        "category": "Trousseau Packing",
        "badge": "Grand Edition",
        "in_stock": True,
    },
]

async def seed_products():
    count = await db.products.count_documents({})
    if count == 0:
        now = datetime.now(timezone.utc).isoformat()
        docs = [{**p, "created_at": now} for p in SEED_PRODUCTS]
        await db.products.insert_many(docs)
        logger.info(f"Seeded {len(docs)} products")

async def seed_admin():
    admin_email = os.environ.get("ADMIN_EMAIL", "admin@barqat.com")
    admin_password = os.environ.get("ADMIN_PASSWORD", "Barqat@2026")
    existing = await db.admins.find_one({"email": admin_email})
    if existing is None:
        await db.admins.insert_one({
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info(f"Admin seeded: {admin_email}")
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.admins.update_one(
            {"email": admin_email},
            {"$set": {"password_hash": hash_password(admin_password)}}
        )
        logger.info("Admin password updated")

# ── Routes ────────────────────────────────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "Barqat Luxury Gifting API"}

# Public — get all products
@api_router.get("/products", response_model=List[dict])
async def get_products(category: Optional[str] = None):
    query = {}
    if category and category != "All":
        query["category"] = category
    products = await db.products.find(query).sort("created_at", -1).to_list(1000)
    result = []
    for p in products:
        p["id"] = str(p["_id"])
        del p["_id"]
        result.append(p)
    return result

# Public — get single product
@api_router.get("/products/{product_id}", response_model=dict)
async def get_product(product_id: str):
    try:
        p = await db.products.find_one({"_id": ObjectId(product_id)})
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    p["id"] = str(p["_id"])
    del p["_id"]
    return p

# Admin — login
@api_router.post("/admin/login")
async def admin_login(data: AdminLogin):
    admin = await db.admins.find_one({"email": data.email.lower().strip()})
    if not admin or not verify_password(data.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_token(admin["email"])
    return {"token": token, "email": admin["email"], "role": "admin"}

# Admin — create product
@api_router.post("/admin/products", response_model=dict)
async def create_product(product: ProductCreate, _: dict = Depends(verify_token)):
    doc = product.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.products.insert_one(doc)
    doc["id"] = str(result.inserted_id)
    doc.pop("_id", None)
    return doc

# Admin — update product
@api_router.put("/admin/products/{product_id}", response_model=dict)
async def update_product(
    product_id: str,
    product: ProductUpdate,
    _: dict = Depends(verify_token),
):
    try:
        oid = ObjectId(product_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    updates = {k: v for k, v in product.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    await db.products.update_one({"_id": oid}, {"$set": updates})
    p = await db.products.find_one({"_id": oid})
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    p["id"] = str(p["_id"])
    del p["_id"]
    return p

# Admin — delete product
@api_router.delete("/admin/products/{product_id}")
async def delete_product(product_id: str, _: dict = Depends(verify_token)):
    try:
        oid = ObjectId(product_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid product ID")
    result = await db.products.delete_one({"_id": oid})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted"}

# ── Include router ────────────────────────────────────────────────────────────
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Startup ───────────────────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    await seed_admin()
    await seed_products()
    logger.info("Barqat API started")

@app.on_event("shutdown")
async def shutdown():
    client.close()
