"use client";

import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import { useLanguage } from "./LanguageProvider";

export default function HomeContent({ site, categories, thali, specials }) {
  const { t } = useLanguage();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Food Junction Family Restaurant, Badlapur Jaunpur — pure vegetarian Indian thali, paneer curry and tandoori dishes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              {t("hero_eyebrow")}
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
              {t("hero_title_1")}
              <br />
              {t("hero_title_2")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">{t("hero_desc")}</p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/menu"
                className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                {t("hero_cta_menu")}
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black"
              >
                {t("hero_cta_call")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Categories ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-maroon">{t("section_menu_title")}</h2>
            <p className="mt-3 text-gray-600">{t("section_menu_desc")}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu#${cat.id}`}
                className="group rounded-3xl bg-white p-6 text-center shadow hover:shadow-xl"
              >
                <CategoryBadge
                  image={cat.image}
                  label={`${cat.nameEn} / ${cat.name} — Food Junction`}
                  size="lg"
                />
                <h3 className="mt-4 font-semibold text-gray-800">{cat.nameEn}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us ================= */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center font-display text-4xl text-maroon">
            {t("section_why_title")}
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-5xl">🍽️</div>
              <h3 className="mt-5 text-xl font-bold">{t("why_1_title")}</h3>
              <p className="mt-3 text-gray-600">{t("why_1_desc")}</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-5xl">👨‍🍳</div>
              <h3 className="mt-5 text-xl font-bold">{t("why_2_title")}</h3>
              <p className="mt-3 text-gray-600">{t("why_2_desc")}</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-5xl">🚚</div>
              <h3 className="mt-5 text-xl font-bold">{t("why_3_title")}</h3>
              <p className="mt-3 text-gray-600">{t("why_3_desc")}</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-5xl">❤️</div>
              <h3 className="mt-5 text-xl font-bold">{t("why_4_title")}</h3>
              <p className="mt-3 text-gray-600">{t("why_4_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Today's Special ================= */}
      {thali && (
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
            <div>
              <Image
                src="/images/thali.jpeg"
                width={700}
                height={500}
                alt="Food Junction special vegetarian thali — dal, sabzi, rice, roti, salad and sweet"
                className="rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl text-maroon">{t("section_special_title")}</h2>
              <p className="mt-6 text-gray-600">{t("section_special_desc")}</p>
              <div className="mt-8 space-y-3">
                {thali.items.map((item, index) => (
                  <div key={index} className="flex justify-between rounded-xl border p-4">
                    <span>{item.name}</span>
                    <span className="font-bold">₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= Popular Dishes ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center font-display text-4xl text-maroon">
            {t("section_popular_title")}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specials.map((food) => (
              <div
                key={food.name}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
              >
                {food.image.endsWith(".svg") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={food.image}
                    alt={`${food.name} (${food.nameHi}) — Food Junction, Badlapur, Jaunpur`}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                ) : (
                  <Image
                    src={food.image}
                    width={500}
                    height={350}
                    alt={`${food.name} (${food.nameHi}) — Food Junction, Badlapur, Jaunpur`}
                    className="h-60 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{food.name}</h3>
                  <p className="text-sm font-medium text-clay">{food.nameHi}</p>
                  <p className="mt-3 text-gray-600">{t("popular_card_desc")}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-3xl font-bold text-orange-600">₹{food.price}</span>
                    <Link
                      href={`/menu#${food.anchor}`}
                      className="rounded-full bg-maroon px-5 py-2 text-white"
                    >
                      {t("order_now")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION / MAP */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl text-maroon">{t("section_find_us")}</h2>
        <p className="mt-2 max-w-xl text-sm text-ink/70">{site.address}</p>
        <div className="mt-6 overflow-hidden shadow-sm ring-1 ring-maroon/10">
          <iframe
            title="Food Junction location map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.666192669007!2d82.42496998666012!3d25.913341818615688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39906d3740542a25%3A0xc71d8686036b3ecf!2sFOOD%20JUNCTION%20FAMILY%20RESTAURANT%20%26%20SNAKKER!5e0!3m2!1sen!2sin!4v1783850924537!5m2!1sen!2sin`}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* NOTE STRIP */}
      {site.note && (
        <div className="masala-border py-2 text-center text-xs font-semibold uppercase tracking-wide text-maroon-dark">
          <span className="bg-cream/90 px-3 py-1">
            {t("note_prefix")} — {site.note}
          </span>
        </div>
      )}
    </>
  );
}
