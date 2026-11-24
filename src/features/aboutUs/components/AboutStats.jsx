import React from "react";
import { Award, Gavel, MessagesSquare, Scale } from "lucide-react";
import {
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";

const STATS = [
  {
    value: "نطاق واسع",
    label: "من مجالات الممارسة",
    icon: Scale,
    isNumeric: false,
  },
  {
    value: "+100",
    label: "قضية وتمثيل قانوني",
    icon: Gavel,
    isNumeric: true,
  },
  {
    value: "+500",
    label: "استشارة قانونية",
    icon: MessagesSquare,
    isNumeric: true,
  },
  {
    value: "+10",
    label: "سنوات من الخبرة",
    icon: Award,
    isNumeric: true,
  },
];

export default function AboutStats() {
  return (
    <section aria-label="إنجازات وأرقام مكتب سند الحسن" className="w-full py-4 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleIn>
          <div className="relative rounded-2xl bg-gradient-to-l from-[#082C26] via-[#0D3C34] to-[#082A24] border border-[#C8A074]/25 shadow-[0_16px_36px_-14px_rgba(11,53,46,0.38)] overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-[#C8A074]/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-[#195E52]/25 blur-3xl"
            />

            <StaggerContainer
              stagger={0.09}
              className="relative z-10 grid grid-cols-2 lg:grid-cols-4 py-1 sm:py-2 lg:py-3"
            >
              {STATS.map((item, index) => {
                const Icon = item.icon;
                const gridBorders = [
                  index < 2 ? "border-b border-white/10 lg:border-b-0" : "",
                  index % 2 === 0 ? "border-l border-white/10 lg:border-l-0" : "",
                  index !== 0 ? "lg:border-r lg:border-white/15" : "",
                ].join(" ");

                return (
                  <StaggerItem key={item.label} className={gridBorders}>
                    <div className="group h-full flex flex-col lg:flex-row items-center justify-center text-center lg:text-right gap-2.5 lg:gap-4 px-3 py-5 sm:px-5 sm:py-6 transition-colors duration-300 hover:bg-white/[0.04]">
                      <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] border border-[#C8A074]/25 text-[#C8A074] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-[#DFBA8E]/60 group-hover:text-[#DFBA8E]">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.65]" />
                      </span>

                      <div>
                        <p
                          dir={item.isNumeric ? "ltr" : "rtl"}
                          className={`font-bold text-white leading-tight tracking-tight ${
                            item.isNumeric
                              ? "text-xl sm:text-2xl lg:text-[28px] lg:text-right"
                              : "text-base sm:text-xl lg:text-[22px]"
                          }`}
                        >
                          {item.value}
                        </p>
                        <p className="mt-1 text-[11.5px] sm:text-sm text-white/80 font-normal leading-snug">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
