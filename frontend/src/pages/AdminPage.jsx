import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Plus, Edit2, Trash2, LogOut, Package, Eye, EyeOff,
  CheckCircle, XCircle, Save, X, Upload, ChevronDown,
} from "lucide-react";

const API = process.env.REACT_APP_BACKEND_URL + "/api";

const CATEGORIES = [
  "Festive Gifting",
  "Corporate Gifting",
  "Wedding Favours",
  "Trousseau Packing",
  "Custom Bulk Orders",
];

const BADGES = ["", "Bestseller", "New Arrival", "Premium", "Corporate Pick", "Bridal Collection", "Grand Edition", "Limited Edition"];

const emptyForm = {
  name: "",
  price: "",
  description: "",
  image: "",
  category: "Festive Gifting",
  badge: "",
  in_stock: true,
};

// ── Toast ──────────────────────────────────────────────────────────────────
const Toast = ({ msg, type, onClose }) => (
  <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 shadow-xl text-sm font-medium transition-all ${type === "success" ? "bg-[#D4AF37] text-[#1B1B1B]" : "bg-red-600 text-white"}`}>
    {type === "success" ? <CheckCircle size={16} /> : <XCircle size={16} />}
    {msg}
    <button onClick={onClose} className="ml-2"><X size={14} /></button>
  </div>
);

// ── Login Screen ───────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("admin@barqat.com");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(`${API}/admin/login`, { email, password });
      localStorage.setItem("barqat_admin_token", data.token);
      onLogin(data.token);
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/xpztwi5k_logobae.jpeg"
            alt="Barqat Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Admin Panel</p>
        </div>

        <div className="bg-[#2C2A33] border border-[#3A3843] p-8">
          <div className="h-0.5 w-12 bg-[#D4AF37] mb-6" />
          <h2 className="font-serif text-2xl text-white mb-6">Sign In</h2>

          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-300 text-sm px-4 py-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" data-testid="admin-login-form">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Email</label>
              <input
                data-testid="admin-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Password</label>
              <div className="relative">
                <input
                  data-testid="admin-password-input"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600 pr-12"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#D4AF37]">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              data-testid="admin-login-btn"
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] text-[#1B1B1B] py-3.5 text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ── Google Drive URL converter ─────────────────────────────────────────────
function convertImageUrl(url) {
  if (!url) return url;
  // Google Drive: https://drive.google.com/file/d/FILE_ID/view?...
  const driveFileMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch) {
    // thumbnail format is more reliable for display
    return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w800`;
  }
  // Google Drive open: https://drive.google.com/open?id=FILE_ID
  const driveOpenMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (driveOpenMatch) {
    return `https://drive.google.com/thumbnail?id=${driveOpenMatch[1]}&sz=w800`;
  }
  // Already a drive thumbnail/uc link — normalise to thumbnail
  const driveUcMatch = url.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);
  if (driveUcMatch) {
    return `https://drive.google.com/thumbnail?id=${driveUcMatch[1]}&sz=w800`;
  }
  return url;
}

// ── Product Form Modal ─────────────────────────────────────────────────────
const ProductFormModal = ({ product, onClose, onSave, token }) => {
  const [form, setForm] = useState(product ? { ...product, price: String(product.price) } : emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imgError, setImgError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "image") {
      const converted = convertImageUrl(value);
      setImgError(false);
      setForm((p) => ({ ...p, image: converted }));
      return;
    }
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = { ...form, price: parseInt(form.price, 10), badge: form.badge || null };
      const headers = { Authorization: `Bearer ${token}` };
      let saved;
      if (product?.id) {
        const { data } = await axios.put(`${API}/admin/products/${product.id}`, payload, { headers });
        saved = data;
      } else {
        const { data } = await axios.post(`${API}/admin/products`, payload, { headers });
        saved = data;
      }
      onSave(saved, !!product?.id);
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to save product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#2C2A33] border border-[#3A3843] w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#3A3843]">
          <div>
            <h3 className="font-serif text-xl text-white">{product ? "Edit Product" : "Add New Product"}</h3>
            <div className="h-0.5 w-10 bg-[#D4AF37] mt-1" />
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} data-testid="product-form" className="px-6 py-6 space-y-5">
          {error && (
            <div className="bg-red-900/30 border border-red-700 text-red-300 text-sm px-4 py-3">{error}</div>
          )}

          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Product Name *</label>
            <input
              data-testid="product-name-input"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. Royal Festive Celebration Hamper"
              className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600"
            />
          </div>

          {/* Price + Category row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Price (₹) *</label>
              <input
                data-testid="product-price-input"
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
                min="1"
                placeholder="e.g. 8499"
                className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Category *</label>
              <div className="relative">
                <select
                  data-testid="product-category-select"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] appearance-none cursor-pointer pr-9"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
              Image URL *
            </label>
            <input
              data-testid="product-image-input"
              name="image"
              value={form.image}
              onChange={handleChange}
              required
              placeholder="https://... or paste a Google Drive link"
              className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600"
            />

            {/* Image Preview */}
            {form.image && (
              <div className="mt-3 flex items-start gap-4">
                <div className="w-24 h-24 border border-[#3A3843] overflow-hidden flex-shrink-0 bg-[#1B1B1B] flex items-center justify-center">
                  {imgError ? (
                    <div className="text-center p-2">
                      <XCircle size={20} className="text-red-400 mx-auto mb-1" />
                      <p className="text-red-400 text-[10px]">Invalid URL</p>
                    </div>
                  ) : (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                      onLoad={() => setImgError(false)}
                    />
                  )}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed pt-1">
                  {imgError ? (
                    <p className="text-red-400">Image couldn't load. Check the URL is a direct image link.</p>
                  ) : (
                    <p className="text-green-400 flex items-center gap-1">
                      <CheckCircle size={12} /> Image preview looks good!
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="mt-3 bg-[#1B1B1B] border border-[#3A3843] p-3 space-y-1.5">
              <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">How to use images:</p>
              <p className="text-xs text-gray-300 font-medium mb-1">Google Drive (recommended):</p>
              <ol className="text-xs text-gray-400 space-y-1 pl-3 mb-3">
                <li>1. Open your image in Google Drive</li>
                <li>2. Click <span className="text-white">Share</span> → set to <span className="text-green-400">"Anyone with the link"</span></li>
                <li>3. Copy the link and paste it here — it auto-converts!</li>
              </ol>
              <div className="border-t border-[#3A3843] pt-2 space-y-1">
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <CheckCircle size={11} className="text-green-400 flex-shrink-0" />
                  <span><span className="text-white">imgbb.com</span> — free image hosting, no sign-in needed</span>
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <CheckCircle size={11} className="text-green-400 flex-shrink-0" />
                  <span><span className="text-white">Any direct .jpg / .png / .webp URL</span> also works</span>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Description *</label>
            <textarea
              data-testid="product-description-input"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Describe this product..."
              className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] placeholder-gray-600 resize-none"
            />
          </div>

          {/* Badge + In Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Badge (optional)</label>
              <div className="relative">
                <select
                  data-testid="product-badge-select"
                  name="badge"
                  value={form.badge || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#3A3843] bg-[#1B1B1B] text-white text-sm outline-none focus:border-[#D4AF37] appearance-none cursor-pointer pr-9"
                >
                  {BADGES.map((b) => <option key={b} value={b}>{b || "— No Badge —"}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setForm((p) => ({ ...p, in_stock: !p.in_stock }))}
                  className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${form.in_stock ? "bg-[#D4AF37]" : "bg-[#3A3843]"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${form.in_stock ? "translate-x-5" : "translate-x-0"}`} />
                </div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">In Stock</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              data-testid="product-save-btn"
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1B1B1B] py-3.5 text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors disabled:opacity-60"
            >
              <Save size={15} />
              {loading ? "Saving..." : product ? "Save Changes" : "Add Product"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3.5 border border-[#3A3843] text-gray-400 text-sm uppercase tracking-widest hover:border-[#D4AF37] hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ── Main Admin Page ────────────────────────────────────────────────────────
const AdminPage = () => {
  const [token, setToken] = useState(() => localStorage.getItem("barqat_admin_token") || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [filterCat, setFilterCat] = useState("All");

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/products`);
      setProducts(data);
    } catch {
      showToast("Failed to load products", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchProducts();
  }, [token, fetchProducts]);

  const handleLogin = (t) => setToken(t);

  const handleLogout = () => {
    localStorage.removeItem("barqat_admin_token");
    setToken("");
  };

  const handleSave = (saved, isEdit) => {
    if (isEdit) {
      setProducts((prev) => prev.map((p) => (p.id === saved.id ? saved : p)));
      showToast("Product updated successfully");
    } else {
      setProducts((prev) => [saved, ...prev]);
      showToast("Product added successfully");
    }
    setShowForm(false);
    setEditProduct(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast("Product deleted");
    } catch {
      showToast("Failed to delete product", "error");
    }
    setDeleteConfirm(null);
  };

  const formatPrice = (p) => `₹${Number(p).toLocaleString("en-IN")}`;

  if (!token) return <LoginScreen onLogin={handleLogin} />;

  const filtered = filterCat === "All" ? products : products.filter((p) => p.category === filterCat);

  return (
    <div className="min-h-screen bg-[#1B1B1B]" data-testid="admin-panel">
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      {/* Header */}
      <div className="bg-[#2C2A33] border-b border-[#3A3843] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/xpztwi5k_logobae.jpeg"
              alt="Barqat"
              className="h-10 w-auto"
            />
            <div>
              <p className="text-white font-medium text-sm">Admin Panel</p>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Product Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-[#1B1B1B] border border-[#3A3843] px-3 py-1.5">
              <Package size={14} className="text-[#D4AF37]" />
              <span className="text-white text-sm font-medium">{products.length} Products</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
            >
              <LogOut size={15} />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Top actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl text-white">Products</h1>
            <p className="text-gray-400 text-sm mt-1">Manage your gifting catalogue</p>
          </div>
          <button
            data-testid="add-product-btn"
            onClick={() => { setEditProduct(null); setShowForm(true); }}
            className="flex items-center gap-2 bg-[#D4AF37] text-[#1B1B1B] px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium border transition-colors ${
                filterCat === cat
                  ? "bg-[#D4AF37] text-[#1B1B1B] border-[#D4AF37]"
                  : "border-[#3A3843] text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400 text-sm">Loading products...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 border border-[#3A3843]">
            <Package size={40} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">No products yet</p>
            <p className="text-gray-600 text-sm mt-1">Click "Add Product" to get started</p>
          </div>
        ) : (
          <div className="space-y-3" data-testid="products-list">
            {filtered.map((product) => (
              <div
                key={product.id}
                data-testid={`admin-product-${product.id}`}
                className="bg-[#2C2A33] border border-[#3A3843] p-4 flex items-center gap-4 hover:border-[#D4AF37]/30 transition-colors"
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover flex-shrink-0"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/64x64?text=?"; }}
                />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-serif text-white font-medium text-sm truncate">{product.name}</p>
                    {product.badge && (
                      <span className="text-[10px] bg-[#D4AF37] text-[#1B1B1B] px-2 py-0.5 font-bold uppercase tracking-wider flex-shrink-0">
                        {product.badge}
                      </span>
                    )}
                    {!product.in_stock && (
                      <span className="text-[10px] bg-red-900 text-red-300 px-2 py-0.5 font-bold uppercase tracking-wider">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-[#D4AF37] font-semibold text-sm">{formatPrice(product.price)}</span>
                    <span className="text-gray-500 text-xs border border-[#3A3843] px-2 py-0.5">{product.category}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    data-testid={`edit-product-${product.id}`}
                    onClick={() => { setEditProduct(product); setShowForm(true); }}
                    className="p-2 border border-[#3A3843] text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    data-testid={`delete-product-${product.id}`}
                    onClick={() => setDeleteConfirm(product)}
                    className="p-2 border border-[#3A3843] text-gray-400 hover:text-red-400 hover:border-red-600 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductFormModal
          product={editProduct}
          token={token}
          onClose={() => { setShowForm(false); setEditProduct(null); }}
          onSave={handleSave}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#2C2A33] border border-[#3A3843] p-8 max-w-sm w-full text-center">
            <Trash2 size={32} className="text-red-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-white mb-2">Delete Product?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Are you sure you want to delete <span className="text-white font-medium">"{deleteConfirm.name}"</span>? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                data-testid="confirm-delete-btn"
                onClick={() => handleDelete(deleteConfirm.id)}
                className="flex-1 bg-red-600 text-white py-3 text-sm uppercase tracking-widest font-bold hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border border-[#3A3843] text-gray-400 py-3 text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
