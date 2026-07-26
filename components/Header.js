"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Header({ site }) {
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t("nav_home") },
    { href: "/menu", label: t("nav_menu") },
    { href: "/about", label: t("nav_about") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div className="h-2 masala-border" />
      <div className="bg-maroon text-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-3xl leading-none text-marigold-light">
              {site.name}
            </span>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-cream/70 sm:inline">
              {site.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 font-body text-sm font-semibold md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-marigold-light">
                {l.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 rounded-full border border-cream/30 px-3 py-1.5 text-xs font-bold tracking-wide text-cream/90 hover:border-marigold-light hover:text-marigold-light"
            >
              <span className={lang === "hi" ? "text-marigold-light" : ""}>हिं</span>
              <span className="text-cream/40">/</span>
              <span className={lang === "en" ? "text-marigold-light" : ""}>EN</span>
            </button>

            <a
              href={`tel:${site.phone}`}
              className="rounded-full bg-marigold px-4 py-2 text-maroon-dark shadow hover:bg-marigold-light"
            >
              {t("nav_order")}
            </a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 rounded-full border border-cream/30 px-2.5 py-1 text-xs font-bold tracking-wide text-cream/90"
            >
              <span className={lang === "hi" ? "text-marigold-light" : ""}>हिं</span>
              <span className="text-cream/40">/</span>
              <span className={lang === "en" ? "text-marigold-light" : ""}>EN</span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/30"
            >
              <span className="h-0.5 w-4 bg-cream" />
              <span className="h-0.5 w-4 bg-cream" />
              <span className="h-0.5 w-4 bg-cream" />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-cream/10 bg-maroon-dark px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-4 font-body text-sm font-semibold">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-marigold-light"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone}`}
                className="w-fit rounded-full bg-marigold px-4 py-2 text-maroon-dark shadow"
              >
                {t("nav_order")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
