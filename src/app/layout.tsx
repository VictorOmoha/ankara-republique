import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartSlideOver from "@/components/CartSlideOver";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankara République | Conscious Luxury Fashion",
  description:
    "Elevating everyday luxury through exquisitely crafted fashion that honors the body and the planet. Organic fabrics, exceptional craftsmanship, timeless elegance.",
  keywords: [
    "luxury fashion",
    "organic clothing",
    "African designer",
    "conscious luxury",
    "sustainable fashion",
    "artisan craftsmanship",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body className="bg-ivory text-charcoal antialiased">
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CartSlideOver />
        </CartProvider>
      </body>
    </html>
  );
}
