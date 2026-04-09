import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/products";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">Barqat</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">
              Luxury Gifting
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Crafting premium festive hampers and luxury gift collections for every celebration. Where tradition meets elegance.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Collections", path: "/collections" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-5">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                "Holi Hampers",
                "Diwali Collection",
                "Corporate Gifting",
                "Wedding Gifting",
                "Custom Hampers",
              ].map((cat) => (
                <li key={cat}>
                  <span className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">
                  +91 93513 06182
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:hello@barqatluxury.com" className="hover:text-white transition-colors">
                  hello@barqatluxury.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>India — Premium Delivery Pan India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Barqat Luxury Gifting. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Made with care for every celebration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
