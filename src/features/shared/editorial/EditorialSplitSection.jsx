import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "../heading/SectionHeading";
import { FadeIn } from "../motion/MotionPrimitives";

export default function EditorialSplitSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  linkLabel = "المزيد من التفاصيل",
  linkTo = "/",
  highlights = [],
  backgroundClass = "bg-brand-cream",
  showOffsetFrame = true,
}) {
  return (
    <section
      aria-label={title}
      className={`w-full py-12 sm:py-16 lg:py-20 ${backgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Right Column (RTL start): Editorial Text */}
          <FadeIn direction="right" className="lg:col-span-7 space-y-4">
            <SectionHeading
              title={title}
              variant="stacked"
              lineWidth="w-10"
            />

            {subtitle && (
              <h3 className="text-lg sm:text-xl font-bold text-brand-ink leading-snug">
                {subtitle}
              </h3>
            )}

            <p className="text-sm sm:text-base text-[#465753] leading-[1.95] max-w-2xl">
              {description}
            </p>

            {highlights.length > 0 && (
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs sm:text-[13px] font-semibold text-brand-green"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {linkTo && (
              <div className="pt-2">
                <Link
                  to={linkTo}
                  className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-brand-green hover:text-brand-gold transition-colors duration-200"
                >
                  <span>{linkLabel}</span>
                  <ArrowLeft className="w-4 h-4 text-brand-gold transition-transform duration-300 ease-out group-hover:-translate-x-1" />
                </Link>
              </div>
            )}
          </FadeIn>

          {/* Left Column (RTL end): Static Editorial Image with Signature Offset Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              {showOffsetFrame && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -bottom-4 -left-4 w-[82%] h-[82%] rounded-2xl bg-brand-sand border border-brand-border/80"
                />
              )}

              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-brand-border shadow-[0_18px_40px_-16px_rgba(15,60,54,0.22)] bg-brand-surface">
                <img
                  src={image}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
