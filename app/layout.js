import { Yatra_One, Hind } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const display = Yatra_One({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-display"
});

const body = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const SITE_URL = "https://foodjunction-badlapur.example.com"; // TODO: replace with your real live domain once deployed

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Food Junction — Pure Veg Family Restaurant | Badlapur, Jaunpur",
    template: "%s | Food Junction, Badlapur"
  },
  description:
    "Food Junction, Badlapur, Jaunpur — 100% pure vegetarian family restaurant. Dal, Paneer, South Indian, Chinese, Tandoor, Thali and more, freshly made daily. Call 8779613622 to order.",
  keywords: [
    "Food Junction Badlapur",
    "Food Junction Jaunpur",
    "pure veg restaurant Jaunpur",
    "best restaurant Badlapur Jaunpur",
    "family restaurant Jaunpur",
    "veg thali Jaunpur",
    "shakahari restaurant Badlapur",
    "paneer south indian chinese tandoor Jaunpur",
    "फूड जंक्शन बदलापुर",
    "शाकाहारी रेस्टोरेंट जौनपुर"
  ],
  authors: [{ name: "Food Junction" }],
  category: "restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      hi: "/"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "hi_IN",
    url: SITE_URL,
    siteName: "Food Junction",
    title: "Food Junction — Pure Veg Family Restaurant | Badlapur, Jaunpur",
    description:
      "100% pure vegetarian family restaurant in Badlapur, Jaunpur. Dal, Paneer, South Indian, Chinese, Tandoor, Thali and more, freshly made daily.",
    images: [{ url: "/images/banner.png", width: 1024, height: 1024, alt: "Food Junction — pure vegetarian thali and curries" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Junction — Pure Veg Family Restaurant | Badlapur, Jaunpur",
    description:
      "100% pure vegetarian family restaurant in Badlapur, Jaunpur. Fresh Dal, Paneer, South Indian, Chinese, Tandoor & Thali.",
    images: ["/images/banner.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Food Junction",
  image: `${SITE_URL}/images/banner.png`,
  servesCuisine: ["Indian", "South Indian", "Chinese", "Tandoor", "North Indian"],
  priceRange: "₹₹",
  telephone: "+91-8779613622",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NH-731 Fattupur",
    addressLocality: "Badlapur",
    addressRegion: "Jaunpur, Uttar Pradesh",
    postalCode: "222125",
    addressCountry: "IN"
  },
  servesVegetarianOnly: true,
  openingHours: "Mo-Su 08:00-24:00",
  url: SITE_URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
