import React from "react";
import { ShieldCheck, Target, Users } from "lucide-react";

const TRUST_HIGHLIGHTS = [
  {
    icon: Target,
    label: "حلول عملية بكفاءة عالية",
  },
  {
    icon: Users,
    label: "فريق قانوني متخصص",
  },
  {
    icon: ShieldCheck,
    label: "السرية والموثوقية",
  },
];

export default function WhySanadMiniCard() {
  return (
    <aside
      aria-label="لماذا سند الحسن"
      className="rounded-2xl bg-brand-surface border border-brand-border p-5 sm:p-6 shadow-[0_10px_28px_-16px_rgba(11,53,46,0.12)]"
    >
      {/* Heading + Gold Line */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-lg font-bold text-brand-green">لماذا سند الحسّان</h2>
        <span
          aria-hidden="true"
          className="h-[2px] w-12 bg-gradient-to-l from-brand-gold to-brand-gold/25 rounded-full shrink-0"
        />
      </div>

      {/* 3-Column Mini Highlights (explicit inner dividers only — no outer borders) */}
      <div className="grid grid-cols-3">
        {TRUST_HIGHLIGHTS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`group flex flex-col items-center text-center px-2 py-1 ${
                index !== 0 ? "border-r border-brand-border" : ""
              }`}
            >
              <span className="mb-2.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-sand/85 text-brand-gold transition-all duration-300 group-hover:bg-brand-green group-hover:text-[#D2AC80] group-hover:scale-105">
                <Icon className="w-5 h-5 stroke-[1.65]" />
              </span>
              <p className="text-[11.5px] sm:text-xs font-semibold text-brand-ink leading-snug">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
