import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/products";

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] border-t border-[#3A3843]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/xpztwi5k_logobae.jpeg"
              alt="Barqat Luxury Gifting Logo"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Crafting premium festive hampers and luxury gift collections for every celebration. Where tradition meets elegance.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-[#3A3843] flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-[#3A3843] flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#3A3843] flex items-center justify-center text-gray-500 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
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
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors">
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
              {["Holi Hampers", "Diwali Collection", "Corporate Gifting", "Wedding Gifting", "Custom Hampers"].map((cat) => (
                <li key={cat}>
                  <span className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
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
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-[#D4AF37] transition-colors">
                  +91 93513 06182
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:hello@barqatluxury.com" className="hover:text-[#D4AF37] transition-colors">
                  hello@barqatluxury.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>India — Premium Delivery Pan India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3A3843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Barqat Luxury Gifting. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">Made with care for every celebration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
