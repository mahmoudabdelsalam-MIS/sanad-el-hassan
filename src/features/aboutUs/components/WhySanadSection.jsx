import React from "react";
import { CheckCircle2 } from "lucide-react";
import { aboutCourthouseColumn } from "../../../assets/assets";
import Button from "../../shared/button/Button";
import SectionHeading from "../../shared/heading/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";

const WHY_SANAD_POINTS = [
  "فريق قانوني متخصص وخبرة عملية متنوعة.",
  "حلول قانونية واقعية وموجهة للنتائج.",
  "فهم عميق للأنظمة واللوائح السعودية.",
  "التزام بالسرية والمهنية العالية.",
];

export default function WhySanadSection() {
  return (
    <section
      aria-label="لماذا سند الحسن؟"
      className="relative w-full overflow-hidden bg-brand-cream pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pb-20"
    >
      {/* Classical Courthouse Marble Column Accent on Left */}
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none select-none absolute bottom-0 left-0 w-[280px] lg:w-[390px] xl:w-[440px] opacity-55 lg:opacity-90"
      >
        <img
          src={aboutCourthouseColumn}
          alt=""
          className="w-full h-auto object-contain object-bottom-left mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#F4F0EA] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F0EA] via-transparent to-transparent h-1/4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9 xl:col-span-8">
            <FadeIn>
              <SectionHeading
                title="لماذا سند الحسّان؟"
                align="center"
                className="mb-6 sm:mb-10"
              />
            </FadeIn>

            {/* Staggered 2x2 Key Differentiators Checklist */}
            <StaggerContainer
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-4"
            >
              {WHY_SANAD_POINTS.map((point) => (
                <StaggerItem key={point}>
                  <div className="group flex items-center gap-3 px-4 py-3.5 sm:py-3 rounded-xl bg-brand-surface border border-brand-border/80 lg:bg-transparent lg:border-transparent hover:bg-white/75 hover:border-brand-border transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-sm sm:text-[15px] font-medium text-brand-ink leading-relaxed">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Centered Reusable CTA Button */}
            <FadeIn delay={0.2} className="mt-7 sm:mt-9 flex justify-center">
              <Button
                to="/contactUs"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto sm:px-8"
              >
                تواصل معنا
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
