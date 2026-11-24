import React from "react";
import { CalendarDays } from "lucide-react";
import { blogContract } from "../../../assets/assets";
import Button from "../../shared/button/Button";
import { FadeIn } from "../../shared/motion/MotionPrimitives";

export default function ConsultationCtaBanner() {
  return (
    <section aria-label="طلب استشارة قانونية" className="w-full pt-6 pb-14 sm:pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl bg-brand-surface border border-brand-border shadow-[0_14px_34px_-16px_rgba(11,53,46,0.14)] overflow-hidden">
            {/* Subtle Right-Side Editorial Photo Accent */}
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none select-none absolute inset-y-0 right-0 w-[300px] xl:w-[340px]"
            >
              <img
                src={blogContract}
                alt=""
                className="w-full h-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/75 to-transparent" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 px-6 py-7 sm:px-8 sm:py-8 lg:pr-56 xl:pr-64 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-right">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-green leading-snug">
                  تحتاج إلى استشارة قانونية؟
                </h2>
                <p className="mt-1.5 text-sm sm:text-[15px] text-brand-muted">
                  فريقنا جاهز لدعمك في مختلف المسائل القانونية.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-sand/85 text-brand-gold shrink-0">
                    <CalendarDays className="w-5 h-5 stroke-[1.7]" />
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-bold text-brand-green leading-tight">
                      حجز موعد
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">
                      مع مستشار قانوني
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block h-10 w-px bg-brand-border"
                />

                <Button to="/orderService" variant="primary" size="lg" showArrow>
                  طلب خدمة قانونية
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
