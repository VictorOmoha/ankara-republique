"use client";

import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-obsidian text-ivory text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Details */}
      <div className="space-y-1.5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-bronze/70">
          {product.collection}
        </p>
        <h3 className="text-sm font-medium text-charcoal group-hover:text-bronze transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal/70">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
