import React from "react";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  return (
    <div
      data-testid="product-card"
      data-product-id={product.id}
      className="group relative flex flex-col cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span
            data-testid={`product-badge-${product.id}`}
            className="absolute top-3 left-3 bg-[#2D1648] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1"
          >
            {product.badge}
          </span>
        )}

        {/* Hover overlay with Add to Cart */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            data-testid={`add-to-cart-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-white text-[#2D1648] py-3 text-sm uppercase tracking-widest font-semibold hover:bg-[#2D1648] hover:text-white transition-colors duration-200 translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill="#B8944C" className="text-[#B8944C]" />
          ))}
          <span className="text-xs text-slate-400 ml-1">(12)</span>
        </div>
        <h3
          data-testid={`product-name-${product.id}`}
          className="text-base font-medium text-slate-900 font-serif leading-snug mb-1.5"
        >
          {product.name}
        </h3>
        <p
          data-testid={`product-price-${product.id}`}
          className="text-[#2D1648] font-semibold text-base"
        >
          {formatPrice(product.price)}
        </p>

        {/* Mobile Add to Cart */}
        <button
          data-testid={`mobile-add-to-cart-btn-${product.id}`}
          onClick={() => addToCart(product)}
          className="mt-3 w-full flex md:hidden items-center justify-center gap-2 bg-[#3D2060] text-white py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[#2D1648] transition-colors"
        >
          <ShoppingBag size={13} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
