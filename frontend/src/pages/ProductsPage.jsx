import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, WHATSAPP_NUMBER } from "../data/products";
import { MessageCircle } from "lucide-react";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
            Bespoke Collections
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-4">
            Our Gifting Collections
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Explore our curated range of bespoke luxury gifts — tailored for every occasion and every person.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filter Tabs */}
        <div
          data-testid="category-filters"
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`category-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-[#1B1B1B] border-[#D4AF37]"
                  : "border-[#3A3843] text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div
          data-testid="filters-bar"
          className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8 pb-6 border-b border-[#3A3843]"
        >
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              data-testid="collections-search"
              type="text"
              placeholder="Search gifts..."
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
          Showing <span className="font-medium text-gray-300">{sorted.length}</span> creation{sorted.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && (
            <span className="ml-1">in <span className="text-[#D4AF37]">{activeCategory}</span></span>
          )}
        </p>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-[4/5] bg-[#2C2A33] animate-pulse" />
                <div className="h-4 bg-[#2C2A33] animate-pulse w-3/4 mx-auto" />
                <div className="h-4 bg-[#2C2A33] animate-pulse w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : sorted.length > 0 ? (
          <div
            data-testid="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {sorted.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-3xl mb-4">🎁</p>
            <p className="text-gray-400 font-medium">No creations found</p>
            <p className="text-gray-600 text-sm mt-1">Try a different category or search term</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="mt-5 px-6 py-2.5 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
            >
              Show All
            </button>
          </div>
        ) : null}

        {/* Custom Order CTA */}
        <div className="mt-20 bg-[#2C2A33] border border-[#3A3843] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
            Don't see what you need?
          </p>
          <h3 className="font-serif text-2xl text-white mb-3">
            Every Barqat Gift is Fully Customisable
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Tell us your occasion, budget, and vision. We'll craft a completely bespoke gift — tailored to perfection, just for you.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like a custom bespoke gift order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 font-bold text-sm uppercase tracking-widest hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle size={16} />
            Request a Custom Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
