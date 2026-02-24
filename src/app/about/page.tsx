import { Leaf, Gem, Shield, Heart, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Story | Ankara Republique",
  description:
    "Discover the story behind Ankara Republique — conscious luxury fashion honoring the body and the planet.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-obsidian py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-clay mb-8">
            Our Story
          </p>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-ivory leading-tight mb-8">
            Fashion Refined
            <br />
            by <span className="italic text-clay">Purpose</span>
          </h1>
          <p className="text-ivory/50 text-lg leading-relaxed max-w-xl mx-auto">
            We exist to serve those who believe true luxury is felt, not just seen.
            Where timeless elegance meets uncompromising health, quality, and integrity.
          </p>
        </div>
      </section>

      {/* ─── PURPOSE ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-6">
                Brand Purpose
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                Elevating Everyday
                <br />
                Luxury
              </h2>
              <div className="space-y-5 text-charcoal/70 leading-relaxed">
                <p>
                  At our core, we create exquisitely crafted fashion that honors both the
                  body and the planet. By using the finest organic fabrics and masterful
                  craftsmanship, we design garments that nurture well-being, embody
                  sophistication, and stand as enduring investments.
                </p>
                <p>
                  We envision a world where luxury no longer demands compromise &mdash;
                  where organic, toxin-free fabrics are the standard for refined living,
                  and elegance is expressed through restraint, intention, and purpose.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative aspect-[4/5] bg-sand/20 overflow-hidden">
              <img
                src="/images/collection-ivory.svg"
                alt="Ankara Republique Atelier"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="bg-obsidian py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay mb-10">
            Manifesto
          </p>
          <div className="space-y-8 font-accent text-xl lg:text-2xl text-ivory/80 leading-relaxed italic">
            <p>We believe luxury is not excess. It is intention.</p>
            <p>
              The quiet confidence of exceptional quality, the integrity of
              materials chosen with care, and the feeling of ease that comes
              from wearing something made to honor the body.
            </p>
            <p>
              We believe what touches the skin matters. That true elegance
              begins with purity.
            </p>
            <p>
              We create for those who choose consciously. Who understand
              that the highest form of luxury is alignment &mdash; between
              aesthetics and ethics, between elegance and responsibility.
            </p>
          </div>
          <div className="w-12 h-px bg-clay mx-auto mt-12" />
        </div>
      </section>

      {/* ─── BRAND PILLARS ─── */}
      <section id="craftsmanship" className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bronze mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-charcoal">
              Our Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PillarCard
              icon={<Gem size={22} />}
              title="Conscious Luxury"
              description="Luxury defined by intention, not excess. Every choice from fabric to finish is made with discernment, ensuring indulgence without compromise."
            />
            <PillarCard
              icon={<Heart size={22} />}
              title="Health & Well-Being"
              description="Garments designed as a second skin. Organic materials and breathable construction that honor physical and emotional well-being."
            />
            <PillarCard
              icon={<Eye size={22} />}
              title="Timeless Elegance"
              description="Restrained, refined, and quietly powerful design crafted to remain relevant across years, not moments. True elegance reveals itself over time."
            />
            <PillarCard
              icon={<Sparkles size={22} />}
              title="Exceptional Craftsmanship"
              description="Meticulous attention to construction, fit, and finish. Traditional craftsmanship meets modern technique for the highest standards of luxury."
            />
            <PillarCard
              icon={<Shield size={22} />}
              title="Integrity & Transparency"
              description="Trust is the ultimate luxury. From sourcing to pricing, we operate with clarity, honesty, and respect for people and planet."
            />
            <PillarCard
              icon={<Leaf size={22} />}
              title="Elevated Simplicity"
              description="Intentional and uncluttered design where quality, fabric, and form speak for themselves. The most powerful statements are the most understated."
            />
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY ─── */}
      <section id="sustainability" className="bg-ivory-warm py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-sage/10 overflow-hidden">
              <img
                src="/images/collection-sahel.svg"
                alt="Sustainable fashion craftsmanship"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-sage/10 flex items-center justify-center">
                <div className="text-center">
                  <Leaf size={48} className="text-sage/50 mx-auto mb-4" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-sage/70">
                    Organic &middot; Ethical &middot; Enduring
                  </p>
                </div>
              </div>
            </div>

            <div id="materials">
              <p className="text-[11px] tracking-[0.3em] uppercase text-sage mb-6">
                Sustainability
              </p>
              <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                Honoring the Earth,
                <br />
                One Thread at a Time
              </h2>
              <div className="space-y-5 text-charcoal/70 leading-relaxed">
                <p>
                  We believe beauty should never come at the expense of well-being.
                  Every fabric is organic and toxin-free, every dye is responsibly
                  sourced, and every garment is crafted to endure.
                </p>
                <p>
                  Our commitment extends beyond materials. We partner with skilled
                  artisans, invest in their communities, and ensure fair wages and
                  working conditions throughout our supply chain.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-sand">
                <div>
                  <p className="font-display text-3xl text-sage">GOTS</p>
                  <p className="text-xs text-charcoal/50 mt-1">Certified Organic</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-sage">OEKO</p>
                  <p className="text-xs text-charcoal/50 mt-1">TEX Standard 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-6">
            Experience Conscious Luxury
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-10">
            Discover garments crafted with intention, worn with purpose,
            and designed to endure beyond seasons.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-obsidian text-ivory px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-earth transition-colors duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </section>
    </>
  );
}

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 border border-sand/50 hover:border-clay/30 transition-colors duration-500 group">
      <div className="text-bronze mb-5 group-hover:text-gold transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-display text-lg text-charcoal mb-3">{title}</h3>
      <p className="text-sm text-charcoal/60 leading-relaxed">{description}</p>
    </div>
  );
}
