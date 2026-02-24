import Link from "next/link";
import { ArrowRight, Leaf, Shield, Gem, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { collections, getFeaturedProducts } from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center bg-obsidian overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.5) 40px,
              rgba(255,255,255,0.5) 41px
            )`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="py-20 lg:py-0">
              <p className="text-[11px] tracking-[0.4em] uppercase text-clay mb-8 animate-fade-up">
                Conscious Luxury &mdash; Made in Africa
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory leading-[1.1] mb-8 animate-fade-up delay-100">
                Where Elegance
                <br />
                Meets <span className="italic text-clay">Intention</span>
              </h1>
              <p className="text-ivory/60 text-base lg:text-lg max-w-md leading-relaxed mb-10 animate-fade-up delay-200">
                Exquisitely crafted fashion in organic fabrics.
                Designed to honor the body, respect the planet,
                and endure beyond seasons.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link
                  href="/collections"
                  className="group inline-flex items-center gap-3 bg-ivory text-obsidian px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-clay hover:text-ivory transition-all duration-300"
                >
                  Explore Collections
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 border border-ivory/30 text-ivory px-8 py-4 text-xs tracking-[0.2em] uppercase hover:border-clay hover:text-clay transition-all duration-300"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* Right - Editorial Image Composition */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-[3/4] max-w-[480px] ml-auto">
                <img
                  src="/images/collection-sahel.svg"
                  alt="Sahel Silhouettes Collection - Resort 2025"
                  className="absolute inset-0 w-full h-full object-cover border border-white/10"
                />
                {/* Decorative accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-clay/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND PILLARS STRIP ─── */}
      <section className="bg-ivory-warm border-y border-sand/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-sand/40">
            <PillarItem icon={<Leaf size={18} />} label="Organic Fabrics" />
            <PillarItem icon={<Gem size={18} />} label="Artisan Crafted" />
            <PillarItem icon={<Shield size={18} />} label="Toxin-Free" />
            <PillarItem icon={<Heart size={18} />} label="Timeless Design" />
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
              Current Season
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-4">
              Sahel Silhouettes
            </h2>
            <p className="text-charcoal/60 max-w-lg mx-auto leading-relaxed">
              Inspired by the vast beauty of the Sahel. Flowing organic cotton
              and linen pieces in warm, sun-kissed tones.
            </p>
          </div>

          {/* Editorial Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Large feature */}
            <Link href="/product/sahel-01" className="relative aspect-[4/5] bg-sand/30 overflow-hidden group block">
              <img
                src="/images/product-bamako-1.svg"
                alt="The Bamako Wrap Dress"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-obsidian/70 to-transparent z-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-clay mb-2">
                  New Arrival
                </p>
                <h3 className="font-display text-2xl text-ivory mb-1">
                  The Bamako Wrap Dress
                </h3>
                <p className="text-sm text-ivory/70">$485</p>
              </div>
            </Link>

            {/* Two stacked */}
            <div className="grid grid-rows-2 gap-8">
              <Link href="/product/sahel-02" className="relative bg-sand/20 overflow-hidden group block">
                <img
                  src="/images/product-timbuktu-1.svg"
                  alt="The Timbuktu Tunic"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian/60 to-transparent z-10">
                  <h3 className="font-display text-lg text-ivory">The Timbuktu Tunic</h3>
                  <p className="text-sm text-ivory/70">$395</p>
                </div>
              </Link>
              <Link href="/product/sahel-03" className="relative bg-earth/10 overflow-hidden group block">
                <img
                  src="/images/product-saharan-1.svg"
                  alt="The Saharan Wide Trousers"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-obsidian/60 to-transparent z-10">
                  <h3 className="font-display text-lg text-ivory">
                    The Saharan Wide Trousers
                  </h3>
                  <p className="text-sm text-ivory/70">$345</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/collections/sahel-silhouettes"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-bronze transition-colors"
            >
              View Full Collection
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BRAND MANIFESTO ─── */}
      <section className="bg-obsidian py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay mb-8">
            Our Philosophy
          </p>
          <blockquote className="font-accent text-2xl lg:text-3xl xl:text-4xl text-ivory/90 leading-relaxed mb-8 font-light italic">
            We believe luxury is not excess. It is intention. The quiet confidence
            of exceptional quality, the integrity of materials chosen with care.
          </blockquote>
          <div className="w-12 h-px bg-clay mx-auto mb-8" />
          <Link
            href="/about"
            className="text-xs tracking-[0.2em] uppercase text-ivory/60 hover:text-clay transition-colors"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* ─── COLLECTIONS GRID ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
              Explore
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-charcoal">
              Our Collections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col) => (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group relative aspect-[3/4] bg-sand/20 overflow-hidden"
              >
                <img
                  src={col.image}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-clay mb-2">
                    {col.season}
                  </p>
                  <h3 className="font-display text-xl text-ivory mb-1">
                    {col.name}
                  </h3>
                  <p className="text-xs text-ivory/60 italic font-accent">
                    {col.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
                Curated Selection
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal">
                Featured Pieces
              </h2>
            </div>
            <Link
              href="/collections"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-bronze transition-colors"
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY PROMISE ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative aspect-square bg-sand/20 overflow-hidden">
              <img
                src="/images/collection-terra.svg"
                alt="Organic and ethical fashion"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sage/10 flex items-end justify-center pb-12">
                <div className="text-center">
                  <Leaf size={32} className="text-sage/60 mx-auto mb-3" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-sage/80">
                    Organic &middot; Ethical &middot; Enduring
                  </p>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-sage mb-6">
                Our Commitment
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                Fashion That Honors
                <br />
                Body & Planet
              </h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed">
                <p>
                  Every garment begins with a choice: the finest organic, toxin-free
                  fabrics sourced with transparency and care. We believe what touches
                  the skin matters deeply.
                </p>
                <p>
                  Our commitment to exceptional craftsmanship ensures each piece is
                  built to endure &mdash; in form, function, and relevance. True luxury
                  is measured not in seasons, but in years.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-sand">
                <div>
                  <p className="font-display text-2xl text-bronze">100%</p>
                  <p className="text-xs text-charcoal/50 mt-1">Organic Fabrics</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-bronze">0</p>
                  <p className="text-xs text-charcoal/50 mt-1">Toxic Chemicals</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-bronze">&infin;</p>
                  <p className="text-xs text-charcoal/50 mt-1">Timeless Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PillarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-5 px-4">
      <span className="text-bronze">{icon}</span>
      <span className="text-[11px] tracking-[0.2em] uppercase text-charcoal/70">
        {label}
      </span>
    </div>
  );
}
