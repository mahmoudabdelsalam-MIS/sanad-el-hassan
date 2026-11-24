import React from "react";
import { motion } from "motion/react";
import { Building2, Users } from "lucide-react";

const TABS = [
  {
    key: "individuals",
    label: "للأفراد",
    icon: Users,
  },
  {
    key: "corporate",
    label: "للشركات وقطاع الأعمال",
    icon: Building2,
  },
];

export default function ServicesTabs({ activeTab, onTabChange }) {
  return (
    <div className="w-full pt-8 pb-2 flex justify-center px-4">
      <div
        role="tablist"
        aria-label="تصنيف الخدمات القانونية"
        className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-brand-sand/90 border border-brand-border shadow-[0_6px_20px_-14px_rgba(11,53,46,0.16)]"
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabChange(tab.key)}
              className={`relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 rounded-xl text-sm sm:text-[15px] font-semibold transition-colors duration-300 cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-brand-gold hover:text-brand-green"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="servicesActiveTabPill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 rounded-xl bg-brand-green shadow-[0_6px_16px_rgba(11,53,46,0.28)]"
                />
              )}
              <Icon
                className={`relative z-10 w-4 h-4 shrink-0 transition-colors duration-300 ${
                  isActive ? "text-[#D2AC80]" : "text-brand-gold"
                }`}
              />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
