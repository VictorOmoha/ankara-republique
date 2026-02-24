import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data";

export const metadata = {
  title: "Collections | Ankara Republique",
  description: "Explore our conscious luxury collections — organic fabrics, artisan craftsmanship, timeless design.",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-obsidian py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay mb-6">
            Ankara R&eacute;publique
          </p>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            Collections
          </h1>
          <p className="text-ivory/50 max-w-lg mx-auto leading-relaxed">
            Each collection tells a story rooted in African heritage,
            reimagined through the lens of conscious luxury.
          </p>
        </div>
      </section>

      {/* Collections List */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {collections.map((col, i) => (
              <div
                key={col.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <Link
                  href={`/collections/${col.slug}`}
                  className={`relative aspect-[4/5] bg-sand/20 overflow-hidden group ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={col.image}
                    alt={col.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
                    {col.season}
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-3">
                    {col.name}
                  </h2>
                  <p className="font-accent text-lg italic text-charcoal/50 mb-6">
                    {col.tagline}
                  </p>
                  <p className="text-charcoal/70 leading-relaxed mb-8 max-w-md">
                    {col.description}
                  </p>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="group inline-flex items-center gap-3 bg-obsidian text-ivory px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-earth transition-colors duration-300"
                  >
                    Explore Collection
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
