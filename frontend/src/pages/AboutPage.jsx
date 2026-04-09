import React from "react";
import { Heart, Award, Users, Leaf } from "lucide-react";

const VALUES = [
  { icon: <Heart size={22} className="text-[#D4AF37]" />, title: "Crafted with Love", desc: "Each hamper is assembled by hand, ensuring every detail reflects warmth and care." },
  { icon: <Award size={22} className="text-[#D4AF37]" />, title: "Premium Quality", desc: "We source only the finest, certified-safe products from trusted artisans and vendors." },
  { icon: <Users size={22} className="text-[#D4AF37]" />, title: "Community First", desc: "We partner with local artisans and small businesses to create meaningful livelihoods." },
  { icon: <Leaf size={22} className="text-[#D4AF37]" />, title: "Eco-Conscious", desc: "Our Holi hampers use organic, skin-safe colors and recyclable packaging." },
];

const AboutPage = () => {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#1B1B1B]">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg"
            alt="Barqat Heritage Hamper"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/60 to-[#1B1B1B]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-4">Our Story</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            About Barqat
            <span className="block text-[#D4AF37]">Luxury Gifting</span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Where Indian tradition meets contemporary luxury gifting — celebrating every festival with elegance, color, and heartfelt joy.
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
                Born from a Passion for Celebration
              </h2>
              <div className="h-0.5 w-16 bg-[#D4AF37] mb-8" />
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <p>
                  Barqat Luxury Gifting was born from a simple belief: every celebration deserves to be extraordinary. Founded in India, we began by crafting Holi hampers that captured the true spirit of the festival.
                </p>
                <p>
                  Today, we create premium gift hampers for every occasion — Holi, Diwali, weddings, corporate events, and personal milestones. Each hamper is a curated experience, not just a collection of items.
                </p>
                <p>
                  Our team works closely with local artisans, sourcing the finest organic colors, artisanal sweets, and decorative items to build hampers that tell a story of care and thoughtfulness.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/20" />
              <img
                src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg"
                alt="Barqat Hamper Crafting"
                className="w-full h-[500px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section data-testid="about-values-section" className="py-20 bg-[#2C2A33]">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val) => (
              <div key={val.title} className="bg-[#1B1B1B] p-8 border border-[#3A3843] text-center hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 border border-[#D4AF37]/30 flex items-center justify-center">
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
      <section className="py-16 bg-[#1B1B1B] border-t border-[#3A3843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2,500+", label: "Hampers Delivered" },
              { value: "100+", label: "Cities Served" },
              { value: "50+", label: "Hamper Designs" },
              { value: "4.9/5", label: "Customer Rating" },
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
