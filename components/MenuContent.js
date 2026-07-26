"use client";

import MenuSection from "./MenuSection";
import { useLanguage } from "./LanguageProvider";

export default function MenuContent({ site, categories }) {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-maroon py-14 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banners/menu-banner.svg"
          alt="Food Junction menu banner — मेन्यू कार्ड"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon-dark/30" />
        <div className="relative">
          <h1 className="font-display text-4xl text-marigold-light">{t("menu_title")}</h1>
          <p className="mt-2 text-sm text-cream/70">{site.subTagline}</p>
        </div>
      </section>

      {/* jump nav */}
      <nav className="sticky top-[68px] z-30 overflow-x-auto border-b border-maroon/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 px-5 py-3 text-sm font-semibold text-maroon whitespace-nowrap">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full px-3 py-1.5 hover:bg-marigold/20"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10">
        {categories.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </main>
    </>
  );
}
