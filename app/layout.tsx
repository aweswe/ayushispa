import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Luxury Delhi Spa | Premium Wellness Sanctuary in New Delhi",
    template: "%s | Luxury Delhi Spa",
  },
  description:
    "Experience the finest luxury spa in Delhi. Luxury Delhi Spa offers personalized wellness experiences, private treatment suites, and organic therapies crafted for body, mind, and soul.",
  metadataBase: new URL("https://luxurydelhispa.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://luxurydelhispa.in",
    siteName: "Luxury Delhi Spa",
    title: "Luxury Delhi Spa | Premium Wellness Sanctuary in New Delhi",
    description:
      "Experience the finest luxury spa in Delhi. Personalized wellness experiences, private treatment suites, and organic therapies.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Luxury Delhi Spa Sanctuary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Delhi Spa | Premium Wellness Sanctuary in New Delhi",
    description:
      "Experience the finest luxury spa in Delhi. Personalized wellness experiences, private treatment suites, and organic therapies.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "WellnessCenter",
  "@id": "https://luxurydelhispa.in/#organization",
  "name": "Luxury Delhi Spa",
  "url": "https://luxurydelhispa.in",
  "logo": "https://luxurydelhispa.in/logo.png",
  "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
  "description": "Premium luxury spa and wellness sanctuary in New Delhi.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Central Market, Lajpat Nagar II",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110024",
    "addressCountry": "IN"
  },
  "telephone": "+91 9286719152",
  "priceRange": "$$$$"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://luxurydelhispa.in/#website",
  "url": "https://luxurydelhispa.in",
  "name": "Luxury Delhi Spa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
