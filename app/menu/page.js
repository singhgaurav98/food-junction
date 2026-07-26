import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";
import { getContent } from "@/lib/store";

export const revalidate = 0;

export const metadata = {
  title: "Menu / मेन्यू",
  description:
    "Full menu of Food Junction, Badlapur, Jaunpur — Dal, South Indian Snacks, Paneer, Rice & Noodles, Biryani, Roti, Tandoor Starters, Chinese, Soups, Snacks, Tea/Coffee and Thali, with prices.",
  keywords: [
    "Food Junction menu",
    "Badlapur restaurant menu",
    "Jaunpur veg menu",
    "फूड जंक्शन मेन्यू",
    "veg thali price Jaunpur"
  ],
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — Food Junction, Badlapur, Jaunpur",
    description:
      "Explore our full vegetarian menu — Dal, Paneer, South Indian, Chinese, Tandoor, Rice, Roti, Snacks and Thali.",
    url: "/menu",
    images: [{ url: "/images/thali.jpeg", width: 547, height: 365, alt: "Food Junction thali and menu spread" }]
  }
};

export default async function MenuPage() {
  const { site, categories } = await getContent();

  return (
    <>
      <Header site={site} />
      <MenuContent site={site} categories={categories} />
      <Footer site={site} />
    </>
  );
}
