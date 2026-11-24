import React from "react";
import SITE_INFO from "../../../lib/siteInfo";
import { BrandWordmark } from "../logo/BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-green text-white/80 border-t-2 border-brand-gold/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <p className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-center sm:text-right">
          <span>© {currentYear}</span>
          <BrandWordmark variant="white" className="h-3.5 w-auto" />
          <span>— {SITE_INFO.tagline}. جميع الحقوق محفوظة.</span>
        </p>

        <p dir="ltr" className="text-white/60 tracking-wide">
          {SITE_INFO.brandNameEn}
        </p>
      </div>
    </footer>
  );
}
