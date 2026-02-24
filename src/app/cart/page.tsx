"use client";

import Link from "next/link";
import { Minus, Plus, ArrowLeft, ShoppingBag, Leaf, Truck, RotateCcw } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Header */}
      <section className="bg-obsidian py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-3xl lg:text-4xl text-ivory">
            Shopping Bag
          </h1>
          <p className="text-ivory/40 text-sm mt-2">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {items.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20">
              <ShoppingBag size={48} className="text-sand mx-auto mb-6" />
              <h2 className="font-display text-2xl text-charcoal mb-3">
                Your Bag is Empty
              </h2>
              <p className="text-charcoal/50 mb-8 max-w-md mx-auto">
                Discover our conscious luxury collections and find pieces
                that align with your values.
              </p>
              <Link
                href="/collections"
                className="inline-block bg-obsidian text-ivory px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-earth transition-colors"
              >
                Explore Collections
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Items */}
              <div className="lg:col-span-2">
                <div className="border-b border-sand/50 pb-4 mb-8 flex justify-between items-center">
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-charcoal/50 hover:text-charcoal transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Continue Shopping
                  </Link>
                  <button
                    onClick={clearCart}
                    className="text-xs text-charcoal/40 hover:text-charcoal underline underline-offset-2 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-8">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-6 pb-8 border-b border-sand/30"
                    >
                      {/* Product image */}
                      <div className="w-28 h-36 lg:w-32 lg:h-40 bg-sand/30 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="text-[10px] tracking-[0.2em] uppercase text-bronze/60 mb-1">
                              {item.product.collection}
                            </p>
                            <h3 className="text-sm font-medium text-charcoal">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-charcoal/50 mt-1">
                              Size: {item.size} &middot; {item.product.color}
                            </p>
                            <p className="text-[10px] text-charcoal/40 mt-1">
                              {item.product.fabric}
                            </p>
                          </div>
                          <p className="text-sm text-charcoal font-medium whitespace-nowrap">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <div className="inline-flex items-center border border-sand">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="w-10 h-10 flex items-center justify-center hover:bg-sand/30 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-10 h-10 flex items-center justify-center text-sm border-x border-sand">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="w-10 h-10 flex items-center justify-center hover:bg-sand/30 transition-colors"
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
              </div>

              {/* Summary */}
              <div>
                <div className="bg-ivory-warm p-8 sticky top-24">
                  <h3 className="text-[13px] tracking-[0.2em] uppercase mb-8">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/60">Subtotal</span>
                      <span>${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-charcoal/60">Shipping</span>
                      <span className="text-sage">
                        {totalPrice >= 500 ? "Complimentary" : "$25"}
                      </span>
                    </div>
                    <div className="border-t border-sand/50 pt-4 flex justify-between">
                      <span className="text-sm font-medium">Total</span>
                      <span className="font-display text-xl">
                        ${(totalPrice + (totalPrice >= 500 ? 0 : 25)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {totalPrice < 500 && (
                    <p className="text-xs text-sage mb-6">
                      Add ${(500 - totalPrice).toLocaleString()} more for complimentary shipping
                    </p>
                  )}

                  <button className="w-full bg-obsidian text-ivory py-4 text-xs tracking-[0.2em] uppercase hover:bg-earth transition-colors duration-300">
                    Proceed to Checkout
                  </button>

                  {/* Trust */}
                  <div className="mt-8 pt-6 border-t border-sand/50 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-charcoal/50">
                      <Truck size={14} className="text-bronze flex-shrink-0" />
                      <span>Complimentary shipping over $500</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-charcoal/50">
                      <RotateCcw size={14} className="text-bronze flex-shrink-0" />
                      <span>14-day returns on unworn items</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-charcoal/50">
                      <Leaf size={14} className="text-bronze flex-shrink-0" />
                      <span>Eco-friendly packaging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
