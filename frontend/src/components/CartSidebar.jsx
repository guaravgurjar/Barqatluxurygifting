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
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`
      )
      .join("\n");

    const message = `Hello Barqat Luxury Gifting! 🎁\n\nI would like to order:\n${itemLines}\n\n*Subtotal: ${formatPrice(subtotal)}*\n\nKindly confirm availability and payment details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    // Replace WHATSAPP_NUMBER with your actual WhatsApp business number if needed
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent
        side="right"
        data-testid="cart-sidebar"
        className="w-full max-w-md flex flex-col p-0 bg-white"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-xl text-slate-900">
              Your Hamper Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-normal text-slate-500 font-sans">
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
              <p className="text-slate-500 text-base font-medium">Your cart is empty</p>
              <p className="text-slate-400 text-sm mt-2">
                Add beautiful hampers to get started
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 bg-[#7F1D1D] text-white text-sm uppercase tracking-widest hover:bg-[#991B1B] transition-colors"
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
                  className="flex gap-4 pb-5 border-b border-slate-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover flex-shrink-0 rounded-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 line-clamp-2 leading-snug font-serif">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#7F1D1D] font-semibold mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-slate-200">
                        <button
                          data-testid={`decrease-qty-${item.id}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1.5 text-slate-500 hover:text-[#7F1D1D] disabled:opacity-30 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          data-testid={`qty-${item.id}`}
                          className="px-3 text-sm font-medium text-slate-800"
                        >
                          {item.quantity}
                        </span>
                        <button
                          data-testid={`increase-qty-${item.id}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-slate-500 hover:text-[#7F1D1D] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        data-testid={`remove-item-${item.id}`}
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-slate-900">
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
            className="px-6 py-5 border-t border-slate-100 flex-shrink-0 bg-[#FAFAFA]"
          >
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-500 uppercase tracking-wider">Subtotal</span>
              <span
                data-testid="cart-subtotal"
                className="text-sm font-semibold text-slate-900"
              >
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500 uppercase tracking-wider">
                Delivery
              </span>
              <span className="text-sm text-green-600 font-medium">
                {subtotal >= 5000 ? "FREE" : formatPrice(299)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-5 pt-3 border-t border-slate-200">
              <span className="text-base font-semibold text-slate-900 uppercase tracking-wider">
                Total
              </span>
              <span
                data-testid="cart-total"
                className="text-lg font-bold text-[#7F1D1D]"
              >
                {formatPrice(subtotal >= 5000 ? subtotal : subtotal + 299)}
              </span>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              data-testid="whatsapp-checkout-btn"
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 font-bold uppercase tracking-widest text-sm transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Buy Now via WhatsApp
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
