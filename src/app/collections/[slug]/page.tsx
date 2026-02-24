import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getCollectionBySlug, getProductsByCollection, collections } from "@/lib/data";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const collection = getCollectionBySlug(slug);
    if (!collection) return { title: "Collection Not Found" };
    return {
      title: `${collection.name} | Ankara Republique`,
      description: collection.description,
    };
  });
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-obsidian py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-ivory/40 hover:text-ivory/70 text-xs tracking-[0.15em] uppercase mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            All Collections
          </Link>
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay mb-4">
              {collection.season}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-ivory mb-4">
              {collection.name}
            </h1>
            <p className="font-accent text-xl italic text-ivory/50 mb-6">
              {collection.tagline}
            </p>
            <p className="text-ivory/60 leading-relaxed max-w-lg">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <p className="text-sm text-charcoal/50">
              {products.length} piece{products.length !== 1 ? "s" : ""}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-charcoal/50">
                This collection is coming soon. Join our inner circle for early access.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
