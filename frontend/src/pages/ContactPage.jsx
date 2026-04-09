import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "../data/products";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Barqat!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#2C2A33] border-b border-[#3A3843]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-3">Reach Out</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-4">Get in Touch</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Questions, bulk orders, or custom requests? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-white mb-6">Contact Information</h2>
            <div className="h-0.5 w-12 bg-[#D4AF37] mb-8" />

            <div className="space-y-6 mb-10">
              {[
                { icon: <Phone size={18} className="text-[#D4AF37]" />, label: "Phone / WhatsApp", value: "+91 93513 06182", href: `tel:+${WHATSAPP_NUMBER}` },
                { icon: <Mail size={18} className="text-[#D4AF37]" />, label: "Email", value: "hello@barqatluxury.com", href: "mailto:hello@barqatluxury.com" },
                { icon: <MapPin size={18} className="text-[#D4AF37]" />, label: "Location", value: "India — Pan India Delivery Available", href: null },
                { icon: <Clock size={18} className="text-[#D4AF37]" />, label: "Business Hours", value: "Monday – Saturday, 9 AM – 7 PM", href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 text-sm font-medium hover:text-[#D4AF37] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div data-testid="contact-whatsapp-cta" className="bg-[#2C2A33] border border-[#3A3843] p-6">
              <h3 className="font-serif text-lg text-white mb-2">Prefer a Quick Chat?</h3>
              <p className="text-gray-400 text-sm mb-4">
                For bulk orders, corporate gifting, or urgent inquiries — reach us instantly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Barqat! I have an inquiry about your gifting services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-contact-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-white mb-6">Send a Message</h2>
            <div className="h-0.5 w-12 bg-[#D4AF37] mb-8" />

            {submitted ? (
              <div
                data-testid="form-success-message"
                className="text-center py-16 border border-[#D4AF37]/30 bg-[#2C2A33]"
              >
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-serif text-xl text-white mb-2">Message Sent via WhatsApp!</h3>
                <p className="text-gray-400 text-sm">We'll get back to you shortly. Thank you for contacting Barqat!</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-5 px-6 py-2.5 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Full Name *</label>
                    <input
                      data-testid="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-[#3A3843] text-sm outline-none focus:border-[#D4AF37] text-white bg-[#2C2A33] placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Phone Number</label>
                    <input
                      data-testid="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className="w-full px-4 py-3 border border-[#3A3843] text-sm outline-none focus:border-[#D4AF37] text-white bg-[#2C2A33] placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Email Address *</label>
                  <input
                    data-testid="contact-email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-[#3A3843] text-sm outline-none focus:border-[#D4AF37] text-white bg-[#2C2A33] placeholder-gray-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Subject</label>
                  <select
                    data-testid="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#3A3843] text-sm text-gray-300 outline-none focus:border-[#D4AF37] bg-[#2C2A33] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Bulk / Corporate Order</option>
                    <option>Custom Hamper Request</option>
                    <option>Order Tracking</option>
                    <option>Product Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1.5 font-medium">Message *</label>
                  <textarea
                    data-testid="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    className="w-full px-4 py-3 border border-[#3A3843] text-sm outline-none focus:border-[#D4AF37] text-white bg-[#2C2A33] placeholder-gray-600 transition-colors resize-none"
                  />
                </div>

                <button
                  data-testid="contact-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-[#1B1B1B] py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#B8941F] transition-colors"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-gray-600 text-center">Your message will open in WhatsApp for quick response</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
