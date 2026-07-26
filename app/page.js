import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import { getContent } from "@/lib/store";

export const revalidate = 0;

export const metadata = {
  title: "Home",
  description:
    "Food Junction, Badlapur, Jaunpur — 100% pure vegetarian family restaurant. Fresh Dal, Paneer, South Indian, Chinese, Tandoor, Snacks and Special Thali. Order: 8779613622.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Food Junction — Pure Veg Family Restaurant | Badlapur, Jaunpur",
    description:
      "Fresh Dal, Paneer, South Indian, Chinese, Tandoor, Snacks and Special Thali — 100% pure vegetarian, made fresh daily.",
    url: "/",
    images: [{ url: "/images/banner.png", width: 1024, height: 1024, alt: "Food Junction restaurant" }]
  }
};

export default async function Home() {
  const { site, categories } = await getContent();
  const thali = categories.find((c) => c.id === "thali");

  const specials = [
    { name: "Paneer Butter Masala", nameHi: "पनीर बटर मसाला", image: "/images/specials/paneer.svg", price: 270, anchor: "paneer-mushroom" },
    { name: "Veg Biryani", nameHi: "वेज बिरयानी", image: "/images/specials/biryani.svg", price: 200, anchor: "biryani-pulao" },
    { name: "Butter Naan", nameHi: "बटर नान", image: "/images/specials/naan.svg", price: 50, anchor: "roti" },
    { name: "Hakka Noodles", nameHi: "हक्का नूडल्स", image: "/images/specials/noodles.svg", price: 180, anchor: "rice-noodles" },
    { name: "Masala Dosa", nameHi: "मसाला डोसा", image: "/images/specials/dosa.svg", price: 120, anchor: "south-indian" },
    { name: "Special Thali", nameHi: "स्पेशल थाली", image: "/images/thali.jpeg", price: 240, anchor: "thali" },
  ];

  return (
    <>
      <Header site={site} />
      <HomeContent site={site} categories={categories} thali={thali} specials={specials} />
      <Footer site={site} />
    </>
  );
}
