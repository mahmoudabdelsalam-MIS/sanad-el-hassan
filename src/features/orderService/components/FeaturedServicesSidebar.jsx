import React from "react";
import {
  Briefcase,
  FileText,
  Gavel,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

export const FEATURED_ORDER_SERVICES = [
  { label: "الاستشارات القانونية", icon: Scale },
  { label: "إعداد ومراجعة العقود", icon: FileText },
  { label: "فض المنازعات والدعاوى", icon: Gavel },
  { label: "الترافع أمام الجهات القضائية", icon: Landmark },
  { label: "الخدمات القانونية للشركات", icon: Briefcase },
  { label: "القضايا الشخصية والأحوال", icon: Users },
];

export default function FeaturedServicesSidebar({
  selectedService,
  onSelectService,
}) {
  return (
    <aside
      aria-label="أبرز خدماتنا"
      className="relative rounded-2xl bg-gradient-to-b from-[#0F3F37] via-[#0B352E] to-[#072620] border border-[#C8A074]/25 p-5 sm:p-6 text-white shadow-[0_16px_36px_-14px_rgba(11,53,46,0.38)] overflow-hidden"
    >
      {/* Subtle decorative warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-14 -left-14 w-44 h-44 rounded-full bg-[#C8A074]/10 blur-3xl"
      />

      <div className="relative z-10">
        {/* Heading + Gold Line */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            أبرز خدماتنا
          </h2>
          <span
            aria-hidden="true"
            className="h-[2px] w-12 bg-gradient-to-l from-[#D2AC80] to-[#D2AC80]/20 rounded-full shrink-0"
          />
        </div>

        {/* Interactive Services List */}
        <ul className="divide-y divide-white/10">
          {FEATURED_ORDER_SERVICES.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedService === item.label;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => onSelectService?.(item.label)}
                  className={`group w-full flex items-center gap-3 py-3 px-2 rounded-lg text-right text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white/10 text-[#F2D5AE] font-semibold"
                      : "text-white/90 hover:bg-white/[0.05] hover:text-[#E5C59A]"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all duration-200 ${
                      isSelected
                        ? "bg-[#C8A074]/25 text-[#F2D5AE]"
                        : "bg-white/[0.06] text-[#C8A074] group-hover:bg-[#C8A074]/20 group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[1.7]" />
                  </span>
                  <span className="flex-1">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
