import React from "react";
import Button from "../../shared/button/Button";
import { FadeIn } from "../../shared/motion/MotionPrimitives";

export default function HomeCtaBanner() {
  return (
    <section
      aria-label="طلب الخدمة الآن"
      className="w-full py-10 sm:py-14 bg-brand-surface border-t border-brand-border/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl bg-gradient-to-l from-[#0F3C36] via-[#0B332E] to-[#082622] border border-[#C8A074]/25 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_40px_-14px_rgba(15,60,54,0.35)] overflow-hidden">
            {/* Subtle decorative golden arc lines matching the mockup */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 180"
              fill="none"
              className="pointer-events-none select-none absolute inset-y-0 left-0 h-full w-auto opacity-30"
            >
              <circle
                cx="140"
                cy="90"
                r="140"
                stroke="#C8A074"
                strokeOpacity="0.35"
                strokeWidth="1.2"
              />
              <circle
                cx="190"
                cy="110"
                r="110"
                stroke="#C8A074"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
            </svg>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Right side (RTL start): Eyebrow & Heading */}
              <div className="text-right space-y-1.5">
                <span className="inline-block text-xs sm:text-sm font-medium text-[#D2AC80]">
                  المساعدة
                </span>
                <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight">
                  طلب الخدمة الآن
                </h2>
              </div>

              {/* Left side (RTL end): Two Reusable Buttons */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  to="/orderService"
                  variant="primary"
                  size="md"
                  className="sm:min-w-[130px]"
                >
                  طلب خدمة
                </Button>
                <Button
                  to="/contactUs"
                  variant="outline"
                  size="md"
                  className="sm:min-w-[130px]"
                >
                  راسلنا الآن
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
