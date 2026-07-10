import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/ui/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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

const healthAndBeautyBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://luxurydelhispa.in/#business",
  "name": "The Sanctuary - Luxury Delhi Spa",
  "url": "https://luxurydelhispa.in",
  "logo": "https://luxurydelhispa.in/logo.png",
  "image": "https://luxurydelhispa.in/images/hero_main.png",
  "description": "Experience the best spa in Delhi. The Sanctuary offers luxury wellness experiences, Ayurvedic Abhyanga massage, couples massage packages, and private suites in Aerocity, Lajpat Nagar, and Karol Bagh.",
  "telephone": "+91 9286719152",
  "priceRange": "INR 3800 - INR 12000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Central Market, Lajpat Nagar II",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110024",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5684",
    "longitude": "77.2435"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Aerocity, New Delhi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lajpat Nagar, New Delhi"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Karol Bagh, New Delhi"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wellness & Spa Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Somatic Body Massage",
          "description": "Myofascial release, deep tissue therapy, and anatomical alignment for chronic muscle stress release.",
          "offers": {
            "@type": "Offer",
            "price": "4500",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ayurvedic Abhyanga Massage",
          "description": "Traditional full-body lymphatic detox using warm, fresh dosha-specific botanical oils.",
          "offers": {
            "@type": "Offer",
            "price": "4800",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Botanical Aromatherapy Massage",
          "description": "Nervous system calming and stress relief utilizing rare organic botanical oil blends.",
          "offers": {
            "@type": "Offer",
            "price": "4000",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Volcanic Hot Stone Ritual",
          "description": "Deep heat muscle relaxation utilizing volcanic basalt stones and pure organic seed oils.",
          "offers": {
            "@type": "Offer",
            "price": "6000",
            "priceCurrency": "INR"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Thai Massage",
          "description": "Passive yogic stretching and meridian energy compression for joint mobility and flow.",
          "offers": {
            "@type": "Offer",
            "price": "4200",
            "priceCurrency": "INR"
          }
        }
      }
    ]
  }
};

const aerocitySchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://luxurydelhispa.in/#aerocity",
  "name": "The Sanctuary - Aerocity Suite",
  "url": "https://luxurydelhispa.in",
  "logo": "https://luxurydelhispa.in/logo.png",
  "image": "https://luxurydelhispa.in/images/hero_main.png",
  "description": "Premium luxury spa suites in Aerocity, New Delhi. Featuring private wet suites, cold hydrotherapy, and corporate wellness retreat programs.",
  "telephone": "+91 92867 19152",
  "priceRange": "INR 3800 - INR 12000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Asset Area 4, Hospitality District, Aerocity",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110037",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5529",
    "longitude": "77.1221"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  }
};

const karolBaghSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://luxurydelhispa.in/#karol-bagh",
  "name": "The Sanctuary - Karol Bagh Retreat",
  "url": "https://luxurydelhispa.in",
  "logo": "https://luxurydelhispa.in/logo.png",
  "image": "https://luxurydelhispa.in/images/hero_main.png",
  "description": "Luxury wellness and rejuvenation spa in Karol Bagh, Delhi. Botanical facial skincare, Swedish massage, and pre-wedding spa packages.",
  "telephone": "+91 92867 19152",
  "priceRange": "INR 3800 - INR 12000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pusa Road, Block 11, Karol Bagh",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6442",
    "longitude": "77.1895"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  }
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
        <JsonLd schema={healthAndBeautyBusinessSchema} />
        <JsonLd schema={aerocitySchema} />
        <JsonLd schema={karolBaghSchema} />
        <JsonLd schema={websiteSchema} />
        <Navbar />
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
