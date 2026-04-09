import React from "react";
import { Heart, Award, Users, Leaf, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VALUES = [
  { icon: <Sparkles size={22} className="text-[#D4AF37]" />, title: "Bespoke by Design", desc: "No two orders are alike. Every Barqat gift is conceived and assembled uniquely for its recipient." },
  { icon: <Award size={22} className="text-[#D4AF37]" />, title: "Uncompromising Quality", desc: "We source only the finest, certified products — each item handpicked to uphold our luxury standard." },
  { icon: <Heart size={22} className="text-[#D4AF37]" />, title: "Crafted with Intent", desc: "Behind every bow and ribbon is a team of passionate artisans who pour heart into every detail." },
  { icon: <Users size={22} className="text-[#D4AF37]" />, title: "Community Rooted", desc: "We partner with local artisans and small businesses, creating livelihoods while keeping craftsmanship alive." },
  { icon: <Leaf size={22} className="text-[#D4AF37]" />, title: "Sustainably Conscious", desc: "Eco-conscious packaging and organic, skin-safe products — because luxury shouldn't cost the earth." },
  { icon: <Star size={22} className="text-[#D4AF37]" />, title: "Pan-India Excellence", desc: "From Mumbai to Jaipur to Delhi — we deliver perfection to your doorstep, anywhere in India." },
];

const SERVICES_DETAIL = [
  { title: "Festive Gifting", desc: "Holi, Diwali, Eid, Christmas, New Year — our festive hampers capture the spirit of every celebration with vibrant, joyful, premium curation." },
  { title: "Corporate Gifting", desc: "Strengthen client relationships and appreciate your team with thoughtfully assembled corporate hampers, available with custom branding for any occasion." },
  { title: "Wedding Favours", desc: "Make your wedding memorable for every guest with elegant, personalised favour boxes that reflect your unique story and celebrate your love." },
  { title: "Trousseau Packing", desc: "Transform bridal gifts into breathtaking displays of luxury. Our trousseau packing is an art — regal, opulent, and deeply personal." },
  { title: "Custom Bulk Orders", desc: "Whether you need 10 or 10,000 gifts, we deliver precision and elegance at scale. Every single piece crafted with the same care and attention." },
];

const AboutPage = () => {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#1B1B1B]">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg"
            alt="Barqat Bespoke Gift"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/60 to-[#1B1B1B]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Bespoke Luxury Gifting
            <span className="block text-[#D4AF37]">Tailored to Perfection</span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Barqat was founded on a singular belief — that gifting is not just an exchange, it is an experience. One that deserves to be extraordinary, every single time.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section data-testid="about-story-section" className="py-20 lg:py-28 bg-[#1B1B1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">Who We Are</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-6">
                Born from a Passion for Perfection
              </h2>
              <div className="h-0.5 w-16 bg-[#D4AF37] mb-8" />
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <p>
                  Barqat Luxury Gifting was born from a deep appreciation for the art of giving. We believe every gift should tell a story — one of thoughtfulness, elegance, and genuine care for the person receiving it.
                </p>
                <p>
                  We offer five distinct gifting services: <span className="text-[#D4AF37]">Festive Gifting, Corporate Gifting, Wedding Favours, Trousseau Packing, and Custom Bulk Orders</span>. Each service is powered by the same philosophy — bespoke, beautiful, and built around your vision.
                </p>
                <p>
                  Our team of skilled artisans works with premium materials, vibrant colours, and time-honoured techniques to create gifts that transcend the ordinary. From a single cherished hamper to thousands of flawlessly matched corporate gifts — we deliver perfection at every scale.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/20" />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg"
                alt="Barqat Craftsmanship"
                className="w-full h-[500px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section data-testid="about-services-section" className="py-20 bg-[#2C2A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">What We Do</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">Our Gifting Services</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>
          </div>
          <div className="space-y-4">
            {SERVICES_DETAIL.map((svc, i) => (
              <div
                key={svc.title}
                className="flex items-start gap-6 bg-[#1B1B1B] border border-[#3A3843] p-6 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center text-[#1B1B1B] font-bold font-serif text-lg flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-1">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-widest font-medium hover:bg-[#D4AF37] hover:text-[#1B1B1B] transition-colors"
            >
              Explore Our Work <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section data-testid="about-values-section" className="py-20 bg-[#1B1B1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">What Drives Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">Our Core Values</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="h-px w-16 bg-[#D4AF37]" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <div key={val.title} className="bg-[#2C2A33] p-8 border border-[#3A3843] hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-12 h-12 mb-4 border border-[#D4AF37]/30 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-[#2C2A33] border-t border-[#3A3843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Gifts Delivered" },
              { value: "100+", label: "Cities Served" },
              { value: "5", label: "Gifting Services" },
              { value: "4.9/5", label: "Client Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#D4AF37]">{stat.value}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
