import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

const CATEGORIES = ["All", "Holi Hampers", "Corporate", "Premium", "Grand Edition"];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#FAFAFA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
            Shop All
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mb-4">
            The Festive Collection
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Explore our complete range of premium Holi hampers and festive gift collections.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div
          data-testid="filters-bar"
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-10 pb-6 border-b border-slate-100"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              data-testid="collections-search"
              type="text"
              placeholder="Search hampers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-slate-200 text-sm outline-none focus:border-[#7F1D1D] text-slate-800 bg-white"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal size={16} className="text-slate-400" />
            <select
              data-testid="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-slate-200 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#7F1D1D] bg-white cursor-pointer"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-slate-500 mb-8">
          Showing <span className="font-medium text-slate-900">{sorted.length}</span> hamper
          {sorted.length !== 1 ? "s" : ""}
        </p>

        {/* Product Grid */}
        {sorted.length > 0 ? (
          <div
            data-testid="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {sorted.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-3xl mb-4">🔍</p>
            <p className="text-slate-500 font-medium">No hampers found</p>
            <p className="text-slate-400 text-sm mt-1">
              Try a different search term
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-5 px-6 py-2.5 bg-[#7F1D1D] text-white text-sm uppercase tracking-widest hover:bg-[#991B1B] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
