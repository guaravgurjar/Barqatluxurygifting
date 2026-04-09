import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

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
    <div className="bg-[#1B1B1B] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#2C2A33] border-b border-[#3A3843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">Shop All</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-4">
            The Festive Collection
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Explore our complete range of premium Holi hampers and festive gift collections.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div
          data-testid="filters-bar"
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-10 pb-6 border-b border-[#3A3843]"
        >
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              data-testid="collections-search"
              type="text"
              placeholder="Search hampers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#3A3843] text-sm outline-none focus:border-[#D4AF37] text-white bg-[#2C2A33] placeholder-gray-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select
              data-testid="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#3A3843] px-3 py-2.5 text-sm text-gray-300 outline-none focus:border-[#D4AF37] bg-[#2C2A33] cursor-pointer"
            >
              <option value="default">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Showing <span className="font-medium text-gray-300">{sorted.length}</span> hamper{sorted.length !== 1 ? "s" : ""}
        </p>

        {sorted.length > 0 ? (
          <div data-testid="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {sorted.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-3xl mb-4">🔍</p>
            <p className="text-gray-400 font-medium">No hampers found</p>
            <p className="text-gray-600 text-sm mt-1">Try a different search term</p>
            <button
              onClick={() => setSearch("")}
              className="mt-5 px-6 py-2.5 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
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
