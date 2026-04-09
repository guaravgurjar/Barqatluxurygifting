import React from "react";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { useCart } from "../context/CartContext";
import { formatPrice, WHATSAPP_NUMBER } from "../data/products";

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    const itemLines = cartItems
      .map((item) => `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`)
      .join("\n");
    const message = `Hello Barqat Luxury Gifting! 🎁\n\nI would like to order:\n${itemLines}\n\n*Subtotal: ${formatPrice(subtotal)}*\n\nKindly confirm availability and payment details. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent
        side="right"
        data-testid="cart-sidebar"
        className="w-full max-w-md flex flex-col p-0 bg-[#2C2A33] border-l border-[#3A3843]"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-[#3A3843] flex-shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-xl text-white">
              Your Hamper Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-normal text-gray-400 font-sans">
                  ({totalItems} item{totalItems !== 1 ? "s" : ""})
                </span>
              )}
            </SheetTitle>
          </div>
          <div className="w-12 h-0.5 bg-[#D4AF37] mt-1" />
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div
              data-testid="empty-cart-message"
              className="flex flex-col items-center justify-center h-full text-center py-20"
            >
              <div className="text-6xl mb-4">🎁</div>
              <p className="text-gray-300 text-base font-medium">Your cart is empty</p>
              <p className="text-gray-500 text-sm mt-2">Add beautiful hampers to get started</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 bg-[#D4AF37] text-[#1B1B1B] text-sm uppercase tracking-widest hover:bg-[#B8941F] transition-colors font-semibold"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  data-testid={`cart-item-${item.id}`}
                  className="flex gap-4 pb-5 border-b border-[#3A3843]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover flex-shrink-0 rounded-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white line-clamp-2 leading-snug font-serif">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#D4AF37] font-semibold mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#3A3843] bg-[#1B1B1B]">
                        <button
                          data-testid={`decrease-qty-${item.id}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1.5 text-gray-400 hover:text-[#D4AF37] disabled:opacity-30 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          data-testid={`qty-${item.id}`}
                          className="px-3 text-sm font-medium text-white"
                        >
                          {item.quantity}
                        </span>
                        <button
                          data-testid={`increase-qty-${item.id}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        data-testid={`remove-item-${item.id}`}
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div
            data-testid="cart-footer"
            className="px-6 py-5 border-t border-[#3A3843] flex-shrink-0 bg-[#1B1B1B]"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400 uppercase tracking-wider">Subtotal</span>
              <span data-testid="cart-subtotal" className="text-sm font-semibold text-white">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider">Delivery</span>
              <span className="text-sm text-green-400 font-medium">
                {subtotal >= 5000 ? "FREE" : formatPrice(299)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-5 pt-3 border-t border-[#3A3843]">
              <span className="text-base font-semibold text-white uppercase tracking-wider">Total</span>
              <span data-testid="cart-total" className="text-lg font-bold text-[#D4AF37]">
                {formatPrice(subtotal >= 5000 ? subtotal : subtotal + 299)}
              </span>
            </div>
            <button
              data-testid="whatsapp-checkout-btn"
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 font-bold uppercase tracking-widest text-sm transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Buy Now via WhatsApp
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
