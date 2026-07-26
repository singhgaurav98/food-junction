import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";
import { getContent } from "@/lib/store";

export const revalidate = 0;

export const metadata = {
  title: "Contact Us / संपर्क करें",
  description:
    "Get in touch with Food Junction, Badlapur, Jaunpur. Call, WhatsApp, or visit us — 100% pure vegetarian family restaurant. NH-731 Fattupur, Badlapur, Jaunpur, U.P. 222125.",
  keywords: [
    "Food Junction contact",
    "Food Junction phone number",
    "Food Junction address Badlapur",
    "फूड जंक्शन संपर्क"
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Food Junction, Badlapur, Jaunpur",
    description: "Call, WhatsApp, or visit Food Junction at NH-731 Fattupur, Badlapur, Jaunpur, U.P. 222125.",
    url: "/contact",
    images: [{ url: "/images/contact-hero.svg", width: 600, height: 460, alt: "Contact Food Junction illustration" }]
  }
};

export default async function ContactPage() {
  const { site } = await getContent();

  return (
    <>
      <Header site={site} />
      <ContactContent site={site} />
      <Footer site={site} />
    </>
  );
}
