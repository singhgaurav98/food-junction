"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function ContactContent({ site }) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const digits = String(site.phone || "").replace(/\D/g, "");
    const waNumber = digits.length === 10 ? `91${digits}` : digits;
    const text = `${t("contact_form_name")}: ${name}\n${t("contact_form_phone")}: ${phone}\n${t(
      "contact_form_message"
    )}: ${message}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const info = [
    { icon: "📍", label: t("contact_address_label"), value: site.address },
    { icon: "📞", label: t("contact_phone_label"), value: [site.phone, site.phoneAlt].filter(Boolean).join(" / ") },
    ...(site.email ? [{ icon: "✉️", label: t("contact_email_label"), value: site.email }] : []),
    { icon: "🕒", label: t("contact_timings_label"), value: site.timings },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-maroon py-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banners/contact-banner.svg"
          alt="Contact Food Junction — संपर्क करें banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon-dark/30" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-marigold-light">
            {t("contact_hero_eyebrow")}
          </p>
          <h1 className="mt-3 font-display text-5xl text-cream">{t("contact_title")}</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">{t("contact_intro")}</p>
        </div>
      </section>

      {/* INFO + IMAGE */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/contact-hero.svg"
              alt="Contact Food Junction — location and phone illustration / संपर्क करें"
              loading="lazy"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">
              {t("contact_info_title")}
            </h2>
            <div className="mt-6 space-y-5">
              {info.map((i) => (
                <div key={i.label} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-maroon/10">
                  <span className="text-2xl">{i.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-clay">{i.label}</p>
                    <p className="mt-1 text-gray-800">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-maroon">{t("contact_form_title")}</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-3xl bg-white p-6 shadow sm:p-8">
              <div>
                <label className="text-sm font-semibold text-maroon">{t("contact_form_name")}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-maroon/20 px-4 py-3 outline-none focus:border-maroon"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-maroon">{t("contact_form_phone")}</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-maroon/20 px-4 py-3 outline-none focus:border-maroon"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-maroon">{t("contact_form_message")}</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-maroon/20 px-4 py-3 outline-none focus:border-maroon"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-maroon px-8 py-4 font-semibold text-cream hover:bg-maroon-dark"
              >
                {t("contact_form_submit")}
              </button>
              <p className="text-center text-xs text-gray-500">{t("contact_form_note")}</p>
            </form>
          </div>

          <div>
            <h2 className="font-display text-3xl text-maroon">{t("contact_map_title")}</h2>
            <div className="mt-6 overflow-hidden rounded-3xl shadow ring-1 ring-maroon/10">
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
          </div>
        </div>
      </section>
    </>
  );
}
