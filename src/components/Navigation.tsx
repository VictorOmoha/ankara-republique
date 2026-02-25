"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Logo from "./Logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-obsidian text-ivory text-center text-xs tracking-[0.25em] uppercase py-2.5 px-4 font-body">
        Complimentary shipping on orders over $500 &mdash; Organic, Conscious, Timeless
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-ivory"
        }`}
      >
        {/* Top row: utility icons + centered logo */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-between py-5">
            {/* Left: mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Search — desktop only, left side */}
            <button className="hidden lg:block" aria-label="Search">
              <Search size={20} className="text-charcoal hover:text-bronze transition-colors" />
            </button>

            {/* Logo — always centered */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo size="lg" />
            </div>

            {/* Right: shopping bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 -mr-2"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={22} className="text-charcoal hover:text-bronze transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-obsidian text-ivory text-[10px] rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom row: desktop navigation links */}
        <nav className="hidden lg:block border-t border-sand/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-center gap-14 py-3">
              <NavLink href="/collections">Collections</NavLink>
              <NavLink href="/collections/sahel-silhouettes">Sahel Silhouettes</NavLink>
              <NavLink href="/collections/indigo-chronicles">Indigo Chronicles</NavLink>
              <NavLink href="/collections/terra-nova">Terra Nova</NavLink>
              <NavLink href="/collections/ivory-atelier">Ivory Atelier</NavLink>
              <NavLink href="/collections/basalt-weaves">Basalt Weaves</NavLink>
              <NavLink href="/about">Our Story</NavLink>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-8 pt-4 border-t border-sand/50 flex flex-col gap-5">
            <MobileNavLink href="/collections" onClick={() => setIsMobileOpen(false)}>
              Collections
            </MobileNavLink>
            <MobileNavLink href="/collections/sahel-silhouettes" onClick={() => setIsMobileOpen(false)}>
              Sahel Silhouettes
            </MobileNavLink>
            <MobileNavLink href="/collections/indigo-chronicles" onClick={() => setIsMobileOpen(false)}>
              Indigo Chronicles
            </MobileNavLink>
            <MobileNavLink href="/collections/terra-nova" onClick={() => setIsMobileOpen(false)}>
              Terra Nova
            </MobileNavLink>
            <MobileNavLink href="/collections/ivory-atelier" onClick={() => setIsMobileOpen(false)}>
              Ivory Atelier
            </MobileNavLink>
            <MobileNavLink href="/collections/basalt-weaves" onClick={() => setIsMobileOpen(false)}>
              Basalt Weaves
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMobileOpen(false)}>
              Our Story
            </MobileNavLink>
            <MobileNavLink href="/cart" onClick={() => setIsMobileOpen(false)}>
              Shopping Bag ({totalItems})
            </MobileNavLink>
          </div>
        </div>
      </header>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[11px] tracking-[0.2em] uppercase text-charcoal hover:text-bronze transition-colors duration-300 font-light"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm tracking-[0.2em] uppercase text-charcoal hover:text-bronze transition-colors"
    >
      {children}
    </Link>
  );
}
