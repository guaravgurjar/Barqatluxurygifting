import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Truck, Star, MessageCircle,
  Gift, Briefcase, Heart, Package, ClipboardList, CheckCircle,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, WHATSAPP_NUMBER } from "../data/products";

const SERVICES = [
  {
    icon: <Gift size={28} className="text-[#D4AF37]" />,
    title: "Festive Gifting",
    desc: "Exquisite hampers for every festival — Holi, Diwali, Eid, Christmas and more. Hand-assembled with love and the finest artisan products.",
    whatsapp: "Hello Barqat! I'd like to enquire about Festive Gifting options.",
  },
  {
    icon: <Briefcase size={28} className="text-[#D4AF37]" />,
    title: "Corporate Gifting",
    desc: "Elevate your brand with premium, tastefully curated corporate hampers. Bulk orders with custom branding available.",
    whatsapp: "Hello Barqat! I'd like to enquire about Corporate Gifting.",
  },
  {
    icon: <Heart size={28} className="text-[#D4AF37]" />,
    title: "Wedding Favours",
    desc: "Elegant, personalised wedding favour boxes and hampers that leave a lasting impression on every cherished guest.",
    whatsapp: "Hello Barqat! I'd like to enquire about Wedding Favours.",
  },
  {
    icon: <Package size={28} className="text-[#D4AF37]" />,
    title: "Trousseau Packing",
    desc: "Artfully styled trousseau arrangements that transform bridal gifts into breathtaking displays of luxury and tradition.",
    whatsapp: "Hello Barqat! I'd like to enquire about Trousseau Packing.",
  },
  {
    icon: <ClipboardList size={28} className="text-[#D4AF37]" />,
    title: "Custom Bulk Orders",
    desc: "Need 10 or 10,000 gifts? We deliver precision, quality and elegance at scale — fully customised to your vision.",
    whatsapp: "Hello Barqat! I'd like to enquire about Custom Bulk Orders.",
  },
];

const PROMISES = [
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Fully bespoke, made-to-order gifting" },
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Pan-India delivery — safe & on time" },
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Premium artisan-sourced products" },
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Custom branding & personalisation" },
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Bulk corporate & wedding orders" },
  { icon: <CheckCircle size={18} className="text-[#D4AF37]" />, text: "Eco-conscious, sustainable packaging" },
];

const TESTIMONIALS = [
  {
    name: "Ananya Kapoor",
    location: "Mumbai",
    service: "Wedding Favours",
    text: "Barqat transformed our wedding with the most stunning favour boxes. Every guest was blown away — the packaging, the quality, the attention to detail was unmatched.",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    location: "Delhi",
    service: "Corporate Gifting",
    text: "We ordered 150 corporate hampers for Diwali. Barqat delivered on time, every box was immaculate. Our clients loved them. Will absolutely order again.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Jaipur",
    service: "Trousseau Packing",
    text: "The trousseau packing was a dream come true. Absolutely regal presentation — our family and guests were in awe. Barqat truly understands luxury.",
    rating: 5,
  },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="h-px w-16 bg-[#D4AF37]" />
    <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
    <div className="h-px w-16 bg-[#D4AF37]" />
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-[#1B1B1B]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        data-testid="hero-section"
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1B1B1B]"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2C2A33]/60" />
          <div className="absolute bottom-0 left-10 w-40 h-40 border border-[#D4AF37]/10 rotate-45 translate-y-16" />
          <div className="absolute top-16 right-24 w-24 h-24 border border-[#D4AF37]/10 rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-bold mb-5">
                Bespoke Luxury Gifting
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6">
                Tailored to
                <span className="block text-[#D4AF37]">Perfection</span>
                <span className="block text-gray-300 text-3xl sm:text-4xl lg:text-5xl mt-1">
                  For Every Occasion
                </span>
              </h1>
              <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                From festive hampers and corporate gifting to wedding favours, trousseau packing, and custom bulk orders — each Barqat creation is a masterpiece, assembled with love and finished to perfection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  data-testid="hero-shop-btn"
                  to="/collections"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
                >
                  Explore Collections <ArrowRight size={16} />
                </Link>
                <a
                  data-testid="hero-whatsapp-btn"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like to enquire about your bespoke luxury gifting services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#3A3843] text-gray-300 text-sm uppercase tracking-widest font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  Get a Quote
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start mt-10 pt-10 border-t border-[#3A3843]">
                {[
                  { label: "Happy Clients", value: "2,500+" },
                  { label: "Gift Types", value: "5" },
                  { label: "Cities Served", value: "100+" },
                  { label: "Orders Fulfilled", value: "10,000+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-2xl font-serif font-semibold text-[#D4AF37]">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/20" />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0lrp8l59_Poduct%20%283%29.jpeg"
                alt="Barqat Bespoke Luxury Gift"
                className="w-full h-[75vh] object-cover relative z-10"
              />
              <div className="absolute bottom-6 left-6 bg-[#2C2A33]/95 backdrop-blur-sm shadow-xl border border-[#3A3843] px-5 py-4 z-20">
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Featured</p>
                <p className="text-base font-serif font-semibold text-white mt-0.5">Bespoke Luxury Gift Box</p>
                <p className="text-[#D4AF37] font-bold text-lg mt-1">From ₹6,999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section
        data-testid="services-section"
        className="py-20 lg:py-28 bg-[#2C2A33]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
              Our Gifting Services
            </h2>
            <Divider />
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-5 leading-relaxed">
              Every Barqat creation is built around your vision — from a single exquisite hamper to thousands of perfectly matched gifts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {SERVICES.slice(0, 3).map((svc) => (
              <a
                key={svc.title}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(svc.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`service-card-${svc.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="group bg-[#1B1B1B] border border-[#3A3843] p-8 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-14 h-14 border border-[#3A3843] group-hover:border-[#D4AF37]/50 flex items-center justify-center mb-5 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                  Enquire Now <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {SERVICES.slice(3).map((svc) => (
              <a
                key={svc.title}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(svc.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`service-card-${svc.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="group bg-[#1B1B1B] border border-[#3A3843] p-8 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer block"
              >
                <div className="w-14 h-14 border border-[#3A3843] group-hover:border-[#D4AF37]/50 flex items-center justify-center mb-5 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                  Enquire Now <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED GIFTING ─────────────────────────────────── */}
      <section data-testid="featured-products-section" className="py-20 lg:py-28 bg-[#1B1B1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">
              Curated Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
              Our Signature Creations
            </h2>
            <Divider />
            <p className="text-gray-400 text-base max-w-xl mx-auto mt-5 leading-relaxed">
              Each piece is a testament to craftsmanship — bespoke, beautiful, and built to make every moment unforgettable.
            </p>
          </div>

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

          <div className="text-center mt-14">
            <Link
              data-testid="view-all-collections-btn"
              to="/collections"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-colors"
            >
              View Full Collection <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BARQAT ───────────────────────────────────────── */}
      <section data-testid="why-choose-section" className="py-20 lg:py-28 bg-[#2C2A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">
                The Barqat Difference
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-6">
                Why Choose Barqat?
              </h2>
              <div className="h-0.5 w-16 bg-[#D4AF37] mb-8" />
              <p className="text-gray-400 text-base leading-relaxed mb-10">
                We believe gifting is an art form. Every Barqat creation is conceived with intention, assembled with precision, and delivered with care. Whether for one or ten thousand — your gift will always arrive tailored to perfection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROMISES.map((p) => (
                  <div key={p.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">{p.icon}</span>
                    <span className="text-sm text-gray-300 leading-snug">{p.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like to discuss a bespoke gifting order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
              >
                <MessageCircle size={16} />
                Discuss Your Order
              </a>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/4jktw50b_Poduct%20%281%29.jpeg"
                alt="Festive Hamper"
                className="w-full aspect-square object-cover"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg"
                alt="Trousseau Hamper"
                className="w-full aspect-square object-cover mt-8"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0wp3cmoq_Poduct%20%284%29.jpeg"
                alt="Wedding Favour"
                className="w-full aspect-square object-cover -mt-8"
              />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg"
                alt="Corporate Hamper"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section data-testid="testimonials-section" className="py-20 lg:py-28 bg-[#1B1B1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">Happy Clients</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">What They Say</h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#2C2A33] p-8 border border-[#3A3843] hover:border-[#D4AF37]/30 transition-colors flex flex-col">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
                  {t.service}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#3A3843]">
                  <div className="w-9 h-9 bg-[#D4AF37] flex items-center justify-center text-[#1B1B1B] font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20 bg-[#2C2A33] border-y border-[#3A3843]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold mb-4">
            Custom & Bulk Orders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-5 leading-snug">
            Every Great Occasion Deserves<br />
            <span className="text-[#D4AF37]">a Barqat Touch</span>
          </h2>
          <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Weddings, corporate events, festive celebrations, bridal trousseau — we craft bespoke gifting experiences for any scale, with the same unwavering attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-testid="bulk-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I'd like to discuss a custom bulk gifting order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-colors"
            >
              Send an Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
