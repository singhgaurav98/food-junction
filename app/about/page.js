import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import { getContent } from "@/lib/store";

export const revalidate = 0;

export const metadata = {
  title: "About Us / हमारे बारे में",
  description:
    "Food Junction, Badlapur, Jaunpur — a 100% pure vegetarian family restaurant. Learn our story, values, and what makes our food special.",
  keywords: [
    "about Food Junction",
    "Food Junction Badlapur story",
    "pure vegetarian restaurant Jaunpur",
    "फूड जंक्शन हमारे बारे में"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — Food Junction, Badlapur, Jaunpur",
    description:
      "A 100% pure vegetarian family restaurant serving traditional Indian, South Indian, Chinese and Tandoor dishes made fresh daily.",
    url: "/about",
    images: [{ url: "/images/about-hero.svg", width: 600, height: 460, alt: "Food Junction kitchen and thali illustration" }]
  }
};

export default async function AboutPage() {
  const { site } = await getContent();

  return (
    <>
      <Header site={site} />
      <AboutContent site={site} />
      <Footer site={site} />
    </>
  );
}
