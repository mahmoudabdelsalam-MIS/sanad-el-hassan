import React from "react";
import { Eye, Gem, Target } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";

const PILLARS = [
  {
    title: "رؤيتنا",
    description:
      "أن نكون خياراً قانونياً موثوقاً للأفراد وقطاع الأعمال في المملكة.",
    icon: Eye,
  },
  {
    title: "رسالتنا",
    description:
      "تقديم خدمات قانونية احترافية بأعلى معايير الجودة والسرية، وحلول عملية تحقق أفضل النتائج.",
    icon: Target,
  },
  {
    title: "قيمنا",
    description:
      "النزاهة، المهنية، السرية، الالتزام، وتركيزنا على مصالح العميل.",
    icon: Gem,
  },
];

export default function VisionMissionValues() {
  return (
    <section aria-label="رؤيتنا ورسالتنا وقيمنا" className="w-full py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#F1EBE1] border border-brand-border shadow-[0_10px_28px_-14px_rgba(11,53,46,0.1)] overflow-hidden">
            <StaggerContainer
              stagger={0.1}
              className="grid grid-cols-1 md:grid-cols-3"
            >
              {PILLARS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={item.title}
                    className={
                      index !== 0
                        ? "border-t md:border-t-0 md:border-r border-[#DFD6C9]"
                        : ""
                    }
                  >
                    <article className="group relative h-full p-5 sm:p-7 lg:p-8 transition-colors duration-300 hover:bg-white/65">
                      {/* Subtle gold top hover bar */}
                      <span
                        aria-hidden="true"
                        className="absolute top-0 inset-x-8 h-[2px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full"
                      />

                      {/* Unified Title + Icon Row */}
                      <div className="flex items-center gap-3 mb-2.5 sm:mb-3.5">
                        <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-sand/85 text-brand-gold transition-all duration-300 group-hover:bg-brand-green group-hover:text-[#D2AC80] group-hover:scale-105 shrink-0">
                          <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.7]" />
                        </span>
                        <h2 className="text-lg sm:text-xl lg:text-[22px] font-bold text-brand-green transition-colors duration-300 group-hover:text-brand-gold">
                          {item.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#435450] leading-[1.85]">
                        {item.description}
                      </p>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
