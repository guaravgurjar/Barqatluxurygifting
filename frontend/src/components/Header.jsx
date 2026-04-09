import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import AuthModal from "./AuthModal";

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        data-testid="main-header"
        className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all"
      >
        {/* Top announcement bar */}
        <div className="bg-[#2D1648] text-[#E8D5A3] text-center text-xs py-2 tracking-widest uppercase font-medium">
          Free Delivery on Orders Above ₹5,000 &nbsp;|&nbsp; Premium Festive Gifting
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" data-testid="logo-link" className="flex items-center flex-shrink-0">
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/xpztwi5k_logobae.jpeg"
                alt="Barqat Luxury Gifting Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 uppercase tracking-wider ${
                    isActive(link.path)
                      ? "text-[#2D1648] border-b-2 border-[#B8944C] pb-0.5"
                      : "text-slate-700 hover:text-[#2D1648]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              {searchOpen ? (
                <div className="hidden md:flex items-center border border-slate-300 rounded-none overflow-hidden">
                  <input
                    data-testid="search-input"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search hampers..."
                    className="px-3 py-1.5 text-sm outline-none w-44 bg-white text-slate-800"
                  />
                  <button
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                    className="px-2 py-1.5 text-slate-500 hover:text-[#2D1648]"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button
                  data-testid="search-btn"
                  onClick={() => setSearchOpen(true)}
                  className="hidden md:flex text-slate-700 hover:text-[#2D1648] transition-colors p-1.5"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              )}

              {/* Login */}
              <button
                data-testid="auth-btn"
                onClick={() => setAuthOpen(true)}
                className="hidden md:flex items-center gap-1.5 text-sm text-slate-700 hover:text-[#2D1648] transition-colors font-medium"
              >
                <User size={18} />
                <span className="text-xs uppercase tracking-wider">Login</span>
              </button>

              {/* Cart */}
              <button
                data-testid="cart-btn"
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center text-slate-700 hover:text-[#2D1648] transition-colors p-1.5"
                aria-label="Open cart"
              >
                <ShoppingBag size={22} />
                {totalItems > 0 && (
                  <span
                    data-testid="cart-badge"
                    className="absolute -top-1 -right-1 bg-[#2D1648] text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 min-w-[18px] min-h-[18px] flex items-center justify-center leading-none px-1"
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu */}
              <button
                data-testid="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-slate-700 hover:text-[#2D1648] transition-colors p-1.5"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div
              data-testid="mobile-nav"
              className="md:hidden border-t border-slate-100 py-4 flex flex-col gap-3 animate-fade-in"
            >
              {/* Mobile search */}
              <div className="flex items-center border border-slate-300 mb-2">
                <Search size={16} className="ml-3 text-slate-400" />
                <input
                  placeholder="Search hampers..."
                  className="px-3 py-2 text-sm outline-none flex-1 bg-white text-slate-800"
                />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wider py-2 px-1 border-b border-slate-100 ${
                    isActive(link.path)
                      ? "text-[#2D1648]"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setAuthOpen(true); setMenuOpen(false); }}
                className="text-left text-sm font-medium uppercase tracking-wider py-2 px-1 text-slate-700"
              >
                Login / Register
              </button>
            </div>
          )}
        </div>
      </header>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Header;
