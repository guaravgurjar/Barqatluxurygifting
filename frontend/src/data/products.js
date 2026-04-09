// Barqat Luxury Gifting - Product Data
export const PRODUCTS = [
  {
    id: 1,
    name: "Royal Festive Celebration Hamper",
    price: 8499,
    description: "A vibrant, hand-assembled festive hamper in a luxurious pink basket — filled with organic gulal, artisan sweets, pichkari, decorative accessories and more. A bespoke treasure for every joyful celebration.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/4jktw50b_Poduct%20%281%29.jpeg",
    category: "Festive Gifting",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Corporate Elegance Tray",
    price: 12999,
    description: "An exquisite gold-trimmed rectangular tray curated for corporate gifting — tasteful, branded presentation with premium festive items, organic colors, sweets, and elegant accessories. Impress your clients and team.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg",
    category: "Corporate Gifting",
    badge: "Corporate Pick",
  },
  {
    id: 3,
    name: "Bespoke Luxury Gift Box",
    price: 15499,
    description: "Our signature pink-and-gold woven basket — fully customizable, overflowing with premium curated items. Perfect for festive occasions, client appreciation, and any milestone worth celebrating in grand style.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0lrp8l59_Poduct%20%283%29.jpeg",
    category: "Festive Gifting",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Bridal Wedding Favour Basket",
    price: 6999,
    description: "A charming hand-crafted basket on golden legs — thoughtfully styled for wedding favours and bridal gifting. Adorned with jute florals, peacock feathers, and curated keepsakes for your special guests.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0wp3cmoq_Poduct%20%284%29.jpeg",
    category: "Wedding Favours",
    badge: "Bridal Collection",
  },
  {
    id: 5,
    name: "Heritage Trousseau Grand Hamper",
    price: 19999,
    description: "Our grandest offering — a beautifully woven natural basket crafted for trousseau packing and grand gifting. Features dried botanicals, tassels, peacock feathers, and artisan treasures, exuding heirloom luxury.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg",
    category: "Trousseau Packing",
    badge: "Grand Edition",
  },
];

export const CATEGORIES = [
  "All",
  "Festive Gifting",
  "Corporate Gifting",
  "Wedding Favours",
  "Trousseau Packing",
  "Custom Bulk Orders",
];

export const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

// WhatsApp business number
export const WHATSAPP_NUMBER = "919351306182";
