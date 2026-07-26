"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function AboutContent({ site }) {
  const { t } = useLanguage();

  const values = [
    { icon: "🌿", title: t("about_value_1_title"), desc: t("about_value_1_desc") },
    { icon: "⏱️", title: t("about_value_2_title"), desc: t("about_value_2_desc") },
    { icon: "🪔", title: t("about_value_3_title"), desc: t("about_value_3_desc") },
    { icon: "✨", title: t("about_value_4_title"), desc: t("about_value_4_desc") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-maroon py-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banners/about-banner.svg"
          alt="Food Junction — About Us / हमारे बारे में banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon-dark/30" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-marigold-light">
            {t("about_hero_eyebrow")}
          </p>
          <h1 className="mt-3 font-display text-5xl text-cream">{t("about_title")}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-hero.svg"
              alt="Food Junction kitchen and thali illustration — शुद्ध शाकाहारी फैमिली रेस्टोरेंट"
              loading="lazy"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">
              {t("about_intro_title")}
            </h2>
            <p className="mt-5 text-gray-700 leading-8">{t("about_intro_body")}</p>
            <p className="mt-4 text-gray-700 leading-8">{t("about_intro_body2")}</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 text-center font-display text-4xl text-maroon">
            {t("about_values_title")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-8 text-center shadow">
                <div className="text-5xl">{v.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-maroon">{v.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">
              {t("about_story_title")}
            </h2>
            <p className="mt-5 text-gray-700 leading-8">{t("about_story_body")}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-maroon px-8 py-4 font-semibold text-cream hover:bg-maroon-dark"
              >
                {t("about_cta")}
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="rounded-full border border-maroon px-8 py-4 font-semibold text-maroon hover:bg-maroon hover:text-cream"
              >
                {t("hero_cta_call")}
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/thali.jpeg"
              alt="Food Junction special vegetarian thali, Badlapur Jaunpur"
              loading="lazy"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
