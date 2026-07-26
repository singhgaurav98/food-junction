"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer({ site }) {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-maroon-dark text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-marigold-light">{site.name}</p>
          <p className="mt-2 text-sm text-cream/70">{site.subTagline}</p>
        </div>

        <div className="text-sm leading-7 text-cream/90">
          <p className="font-semibold text-marigold-light">{t("footer_address")}</p>
          <p>{site.address}</p>
          <p className="mt-3 font-semibold text-marigold-light">{t("footer_time")}</p>
          <p>{site.timings}</p>
        </div>

        <div className="text-sm leading-7 text-cream/90">
          <p className="font-semibold text-marigold-light">{t("footer_contact")}</p>
          <p>
            <a href={`tel:${site.phone}`} className="hover:text-marigold-light">
              {site.phone}
            </a>
          </p>
          {site.phoneAlt && <p>{site.phoneAlt}</p>}
          {site.email && (
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-marigold-light">
                {site.email}
              </a>
            </p>
          )}
        </div>

        <div className="text-sm leading-7 text-cream/90">
          <p className="font-semibold text-marigold-light">{t("footer_quick_links")}</p>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-marigold-light">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-marigold-light">
                {t("nav_menu")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-marigold-light">
                {t("nav_about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-marigold-light">
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. {t("footer_rights")}
      </div>
    </footer>
  );
}
