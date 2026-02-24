"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Check, Leaf, Shield, Heart } from "lucide-react";
import { getProductById, products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: NonNullable<ReturnType<typeof getProductById>> }) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <Link
            href={`/collections/${product.collectionSlug}`}
            className="inline-flex items-center gap-2 text-charcoal/40 hover:text-charcoal/70 text-xs tracking-[0.15em] uppercase mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            {product.collection}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="space-y-4">
              {product.images.map((img, i) => (
                <div key={i} className="relative aspect-[3/4] bg-sand/20 overflow-hidden">
                  <img
                    src={img}
                    alt={`${product.name} - View ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {i === 0 && product.badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-obsidian text-ivory text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="lg:py-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
                {product.collection}
              </p>
              <h1 className="font-display text-3xl lg:text-4xl text-charcoal mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-bronze mb-8">${product.price.toLocaleString()}</p>

              <p className="text-charcoal/70 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Fabric */}
              <div className="flex items-start gap-3 mb-8 pb-8 border-b border-sand/50">
                <Leaf size={16} className="text-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-1">
                    Fabric
                  </p>
                  <p className="text-sm text-charcoal">{product.fabric}</p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs tracking-[0.15em] uppercase text-charcoal/50">
                    Select Size
                  </p>
                  <button className="text-xs text-bronze underline underline-offset-2">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 px-4 border text-sm transition-all duration-200 ${
                        selectedSize === size
                          ? "border-obsidian bg-obsidian text-ivory"
                          : "border-sand hover:border-charcoal text-charcoal"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-4">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-sand">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-sand/30 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 h-12 flex items-center justify-center text-sm border-x border-sand">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-sand/30 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-sage text-ivory"
                    : selectedSize
                    ? "bg-obsidian text-ivory hover:bg-earth"
                    : "bg-sand/50 text-charcoal/30 cursor-not-allowed"
                }`}
              >
                {added ? (
                  <>
                    <Check size={14} />
                    Added to Bag
                  </>
                ) : (
                  "Add to Bag"
                )}
              </button>

              {!selectedSize && (
                <p className="text-xs text-charcoal/40 mt-3 text-center">
                  Please select a size
                </p>
              )}

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-sand/50">
                <div className="text-center">
                  <Shield size={16} className="text-bronze mx-auto mb-2" />
                  <p className="text-[10px] tracking-[0.1em] uppercase text-charcoal/50">
                    Toxin-Free
                  </p>
                </div>
                <div className="text-center">
                  <Leaf size={16} className="text-bronze mx-auto mb-2" />
                  <p className="text-[10px] tracking-[0.1em] uppercase text-charcoal/50">
                    Organic
                  </p>
                </div>
                <div className="text-center">
                  <Heart size={16} className="text-bronze mx-auto mb-2" />
                  <p className="text-[10px] tracking-[0.1em] uppercase text-charcoal/50">
                    Artisan Made
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
