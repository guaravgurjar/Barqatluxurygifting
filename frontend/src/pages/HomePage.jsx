import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Gift, Star, MessageCircle } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, WHATSAPP_NUMBER } from "../data/products";

const FEATURES = [
  {
    icon: <Gift size={22} className="text-[#D4AF37]" />,
    title: "Premium Curation",
    desc: "Every hamper is hand-crafted with premium, artisan-sourced products.",
  },
  {
    icon: <Truck size={22} className="text-[#D4AF37]" />,
    title: "Pan-India Delivery",
    desc: "Safe, fast delivery to your doorstep across India.",
  },
  {
    icon: <Shield size={22} className="text-[#D4AF37]" />,
    title: "100% Safe Colors",
    desc: "All Holi hampers include certified skin-safe, organic colors.",
  },
  {
    icon: <Star size={22} className="text-[#D4AF37]" />,
    title: "Customizable",
    desc: "Personalize any hamper with a custom message or branding.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The Royal Holi Celebration Hamper was absolutely stunning. My family loved it! The packaging was gorgeous and everything arrived perfectly.",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    location: "Delhi",
    text: "Ordered 20 Corporate hampers for Holi. Barqat delivered on time, every box was perfect. Will definitely order again for Diwali.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    location: "Bangalore",
    text: "Outstanding quality and presentation. The Heritage Grand Hamper was worth every rupee — an absolute statement gift!",
    rating: 5,
  },
];

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-[85vh] flex items-center bg-[#FAFAFA] overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7F1D1D]/5" />
          <div className="absolute bottom-0 left-10 w-32 h-32 border border-[#D4AF37]/20 rotate-45 translate-y-16" />
          <div className="absolute top-10 right-20 w-20 h-20 border border-[#D4AF37]/15 rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">
                Premium Festive Gifting
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight mb-6">
                Celebrate Every
                <span className="block text-[#7F1D1D]">Festival</span>
                <span className="block text-[#1E3A8A]">in Luxury</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                Exquisite Holi hampers and festive gift collections crafted with love, elegance, and the finest artisan products. Perfect for family, friends, and corporate gifting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  data-testid="hero-shop-btn"
                  to="/collections"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7F1D1D] text-white text-sm uppercase tracking-widest font-medium hover:bg-[#991B1B] transition-colors"
                >
                  Explore Collection
                  <ArrowRight size={16} />
                </Link>
                <a
                  data-testid="hero-whatsapp-btn"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like to enquire about your luxury hampers.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 text-sm uppercase tracking-widest font-medium hover:bg-slate-50 transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 justify-center md:justify-start mt-10 pt-10 border-t border-slate-200">
                {[
                  { label: "Happy Customers", value: "2,500+" },
                  { label: "Hamper Types", value: "50+" },
                  { label: "Cities Served", value: "100+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-2xl font-serif font-semibold text-[#7F1D1D]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30" />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0lrp8l59_Poduct%20%283%29.jpeg"
                alt="Barqat Premium Holi Hamper"
                className="w-full h-[70vh] object-cover relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm shadow-xl px-5 py-4 z-20">
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  Featured
                </p>
                <p className="text-base font-serif font-semibold text-slate-900 mt-0.5">
                  Premium Holi Luxury Box
                </p>
                <p className="text-[#7F1D1D] font-bold text-lg mt-1">₹15,499</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        data-testid="featured-products-section"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              Handcrafted with Love
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-4">
              Featured Hampers
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>
            <p className="text-slate-500 text-base max-w-xl mx-auto mt-5 leading-relaxed">
              Each hamper is carefully curated to bring joy, color, and festive cheer to your loved ones.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PRODUCTS.slice(0, 3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12 max-w-2xl mx-auto">
            {PRODUCTS.slice(3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 3} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              data-testid="view-all-collections-btn"
              to="/collections"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#7F1D1D] text-[#7F1D1D] text-sm uppercase tracking-widest font-medium hover:bg-[#7F1D1D] hover:text-white transition-colors"
            >
              View Full Collection
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        data-testid="why-choose-section"
        className="py-20 lg:py-28 bg-[#0F172A]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              Our Promise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
              Why Choose Barqat?
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="text-center p-6 border border-slate-800 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto mb-4 border border-slate-700 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-testid="testimonials-section"
        className="py-20 lg:py-28 bg-[#FAFAFA]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              Happy Customers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-4">
              What They Say
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#7F1D1D] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#7F1D1D]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold mb-4">
            Corporate & Bulk Orders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-5">
            Looking for Bulk or Custom Orders?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            We specialize in corporate gifting, bulk Holi hampers, and fully customized gift boxes for events, weddings, and corporate celebrations.
          </p>
          <a
            data-testid="bulk-whatsapp-btn"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like to enquire about bulk/corporate orders.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
