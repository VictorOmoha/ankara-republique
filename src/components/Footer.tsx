import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory/80">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay mb-4">
              The Inner Circle
            </p>
            <h3 className="font-display text-2xl lg:text-3xl text-ivory mb-4">
              Join Our Community
            </h3>
            <p className="text-sm text-ivory/60 mb-8 leading-relaxed">
              Receive early access to new collections, invitations to private events,
              and stories from our atelier.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-white/20 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-clay transition-colors"
              />
              <button className="bg-ivory text-obsidian px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-clay hover:text-ivory transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="light" size="sm" />
            </div>
            <p className="text-sm text-ivory/50 leading-relaxed">
              Conscious luxury fashion honoring the body and the planet.
              Crafted with intention, worn with purpose.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-clay mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/collections/sahel-silhouettes">Sahel Silhouettes</FooterLink>
              <FooterLink href="/collections/indigo-chronicles">Indigo Chronicles</FooterLink>
              <FooterLink href="/collections/terra-nova">Terra Nova</FooterLink>
              <FooterLink href="/collections/ivory-atelier">Ivory Atelier</FooterLink>
              <FooterLink href="/collections/basalt-weaves">Basalt Weaves</FooterLink>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-clay mb-6">
              The Brand
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about">Our Story</FooterLink>
              <FooterLink href="/about#craftsmanship">Craftsmanship</FooterLink>
              <FooterLink href="/about#sustainability">Sustainability</FooterLink>
              <FooterLink href="/about#materials">Our Materials</FooterLink>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-clay mb-6">
              Client Care
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/cart">Shopping Bag</FooterLink>
              <FooterLink href="#">Shipping & Returns</FooterLink>
              <FooterLink href="#">Size Guide</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/30">
            &copy; {new Date().getFullYear()} Ankara R&eacute;publique. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-ivory/30 hover:text-ivory/60 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-ivory/30 hover:text-ivory/60 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[10px] tracking-[0.15em] text-ivory/20">
            Built by{" "}
            <a
              href="https://www.omohasolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/30 hover:text-ivory/50 transition-colors"
            >
              Omoha Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
}
