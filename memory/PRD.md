# Barqat Luxury Gifting - Project PRD

## Project Overview
**Brand:** Barqat Luxury Gifting  
**Type:** Premium e-commerce website for luxury Holi/festive gift hampers  
**WhatsApp Number:** 919351306182  
**Last Updated:** Feb 2026

---

## Architecture

### Tech Stack
- **Frontend:** React 19 + Tailwind CSS + Shadcn UI + Lucide React
- **Backend:** FastAPI + MongoDB (not yet used - UI only)
- **Fonts:** Cormorant Garamond (headings) + Outfit (body)
- **State:** React Context (CartContext)

### File Structure
```
frontend/src/
├── context/CartContext.jsx        — Cart state management
├── data/products.js               — Product data + WhatsApp number
├── components/
│   ├── Header.jsx                 — Sticky header with logo, nav, cart badge
│   ├── CartSidebar.jsx            — Shadcn Sheet slide-out cart
│   ├── AuthModal.jsx              — Shadcn Dialog login/register modal
│   ├── ProductCard.jsx            — Product card with Add to Cart
│   └── Footer.jsx                 — Footer with links, social, contact
└── pages/
    ├── HomePage.jsx               — Hero + Featured Hampers + Features + Testimonials
    ├── ProductsPage.jsx           — All Collections with search & sort
    ├── AboutPage.jsx              — Brand story + values + stats
    └── ContactPage.jsx            — Contact form (submits via WhatsApp)
```

---

## Brand Colors (Logo-Based)
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Purple (Primary) | #2D1648 | Buttons, badges, dark sections, announcement bar |
| Purple Hover | #3D2060 | Button hover states |
| Champagne Cream | #E8D5A3 | Text/icons on dark backgrounds |
| Medium Gold | #B8944C | Overlines, dividers, stars on light backgrounds |
| WhatsApp Green | #25D366 | WhatsApp CTA buttons |
| Dark Purple BG | #1A0D2E | Why Choose Us section, footer |
| White | #FFFFFF | Main backgrounds |
| Off-white | #FAFAFA | Section backgrounds |

---

## Products (User's Actual Images)
| ID | Name | Price | Image |
|----|------|-------|-------|
| 1 | Royal Holi Celebration Hamper | ₹8,499 | Product (1).jpeg |
| 2 | Golden Festive Tray Collection | ₹12,999 | Product (2).jpeg |
| 3 | Premium Holi Luxury Box | ₹15,499 | Product (3).jpeg |
| 4 | Mehndi Celebration Basket | ₹6,999 | Product (4).jpeg |
| 5 | Heritage Holi Grand Hamper | ₹19,999 | Product (5).jpeg |

---

## What's Been Implemented (Feb 2026)

### Phase 1 - Core Website ✅
- [x] Sticky header with Barqat logo, navigation, search, login, cart badge
- [x] Deep purple announcement bar matching logo colors
- [x] Hero section with CTA buttons (Explore Collection + WhatsApp Us)
- [x] Featured Hampers product grid (5 products with real images)
- [x] Slide-out cart sidebar (Shadcn Sheet) with full cart functionality
- [x] Cart: add, remove, quantity +/-, subtotal, total, free delivery logic
- [x] WhatsApp checkout (formats order message + redirects to wa.me)
- [x] Login/Register modal (Shadcn Dialog) with UI forms
- [x] All Collections page with search & sort
- [x] About Us page with brand story, values, stats
- [x] Contact page with form → submits via WhatsApp
- [x] Footer with navigation, social links, contact info
- [x] Mobile responsive design
- [x] Theme updated to match brand logo colors (deep purple + champagne)

### Logo Integration ✅
- Real logo: https://customer-assets.emergentagent.com/job_premium-hampers-10/artifacts/xpztwi5k_logobae.jpeg
- Theme rebranded from maroon to deep purple (#2D1648)
- Gold accent updated to champagne cream (#E8D5A3 on dark, #B8944C on light)

---

## Prioritized Backlog

### P0 (Critical - Next)
- [ ] Backend authentication (user accounts in MongoDB)
- [ ] Product detail/description modal or page
- [ ] Order management system

### P1 (Important)
- [ ] More product categories (Diwali, Corporate, Wedding)
- [ ] Product quantity selector on product cards
- [ ] Wishlist/favorites functionality
- [ ] Instagram feed integration

### P2 (Nice to have)
- [ ] Customer review submission
- [ ] Email/SMS order confirmation
- [ ] Admin panel for managing products
- [ ] Razorpay payment integration
