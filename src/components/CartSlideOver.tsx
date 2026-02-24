"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartSlideOver() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand/50">
            <h2 className="text-[13px] tracking-[0.2em] uppercase font-light">
              Shopping Bag
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:text-bronze transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-sand mb-4" />
                <p className="text-sm text-charcoal/60 mb-2">Your bag is empty</p>
                <p className="text-xs text-charcoal/40">
                  Discover our conscious luxury collections
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4 pb-6 border-b border-sand/30"
                  >
                    {/* Placeholder image */}
                    <div className="w-20 h-24 bg-sand/40 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-charcoal truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-charcoal/50 mt-0.5">
                        Size: {item.size} &middot; {item.product.color}
                      </p>
                      <p className="text-sm text-bronze mt-1">
                        ${item.product.price.toLocaleString()}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 border border-sand flex items-center justify-center hover:border-charcoal transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 border border-sand flex items-center justify-center hover:border-charcoal transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="text-xs text-charcoal/40 hover:text-charcoal underline underline-offset-2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sand/50 px-6 py-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[13px] tracking-[0.15em] uppercase">
                  Subtotal
                </span>
                <span className="text-lg font-display">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-charcoal/50 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-obsidian text-ivory text-center py-4 text-xs tracking-[0.2em] uppercase hover:bg-earth transition-colors duration-300"
              >
                View Bag & Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
