// Barqat Luxury Gifting - Product Data
export const PRODUCTS = [
  {
    id: 1,
    name: "Royal Holi Celebration Hamper",
    price: 8499,
    description: "A vibrant pink round basket brimming with festive Holi essentials — organic gulal, water balloon kit, pichkari, sweets, and decorative accessories. The perfect premium gift for a joyful celebration.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/4jktw50b_Poduct%20%281%29.jpeg",
    category: "Featured",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Golden Festive Tray Collection",
    price: 12999,
    description: "An exquisite gold-trimmed rectangular tray adorned with colorful Holi items, decorative wheat stalks, organic colors, sweets, and festive accessories. Perfect for corporate and premium gifting.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/qm2euvfg_Poduct%20%282%29.jpeg",
    category: "Featured",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Premium Holi Luxury Box",
    price: 15499,
    description: "A luxurious pink-and-gold woven basket overflowing with premium Holi items — natural juice, organic colors, pichkari, peacock feathers, and more. An opulent celebration of the festival of colors.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0lrp8l59_Poduct%20%283%29.jpeg",
    category: "Featured",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Mehndi Celebration Basket",
    price: 6999,
    description: "A charming yellow-green round basket on golden legs, filled with Holi essentials — colorful pichkari, organic gulal, peacock feather decor, sweets, and jute flower embellishments.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/0wp3cmoq_Poduct%20%284%29.jpeg",
    category: "Featured",
    badge: null,
  },
  {
    id: 5,
    name: "Heritage Holi Grand Hamper",
    price: 19999,
    description: "Our most grand offering — a beautifully woven natural round basket carrying an opulent collection of Holi essentials, dried botanicals, tassels, peacock feathers, and curated artisan gifts.",
    image: "https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/9l05ebp9_Poduct%20%285%29.jpeg",
    category: "Featured",
    badge: "Grand Edition",
  },
];

export const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

// WhatsApp business number — replace with your actual number if needed
export const WHATSAPP_NUMBER = "919351306182";
