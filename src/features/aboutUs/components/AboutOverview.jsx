import React from "react";
import { aboutOfficeWall } from "../../../assets/assets";
import SectionHeading from "../../shared/heading/SectionHeading";
import { BrandLogoMark, BrandWordmark } from "../../shared/logo/BrandLogo";
import { FadeIn } from "../../shared/motion/MotionPrimitives";

export default function AboutOverview() {
  return (
    <section aria-label="نبذة عن المكتب" className="w-full pt-8 pb-4 sm:pt-14 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Right Column (RTL start): Firm Overview Text */}
          <FadeIn direction="right" className="lg:col-span-7 space-y-3.5 sm:space-y-5">
            <SectionHeading title="نبذة عن المكتب" lineWidth="w-12 sm:w-20" />

            <p className="text-sm sm:text-base lg:text-[17px] text-[#354642] leading-[1.95] sm:leading-[2] font-normal max-w-2xl">
              مكتب سند الحسّان للمحاماة والتوثيق والاستشارات القانونية، مكتب
              متخصص في تقديم حلول قانونية عملية تراعي حقوق عملائنا وتحقق
              مصالحهم، من خلال فهم دقيق للأنظمة السعودية وخبرة عملية في مختلف
              مجالات القانون.
            </p>
          </FadeIn>

          {/* Left Column (RTL end): Luxury Law Office Reception Sign Plaque (static image) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-brand-border shadow-[0_16px_36px_-14px_rgba(11,53,46,0.24)] bg-[#1C1713]">
              <img
                src={aboutOfficeWall}
                alt="مقر مكتب سند الحسّان للمحاماة والتوثيق والاستشارات القانونية"
                className="w-full h-full object-cover object-center scale-[1.22] sm:scale-100"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 pointer-events-none"
              />

              {/* Illuminated 3D Metallic Brand Signage proportioned cleanly inside the dark center panel */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 select-none pointer-events-none">
                <div className="flex flex-col items-center -mt-1 sm:-mt-2 max-w-[36%] sm:max-w-[34%]">
                  <BrandLogoMark
                    variant="metallic"
                    className="w-8 h-6 sm:w-12 sm:h-10 lg:w-14 lg:h-11 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]"
                  />
                  <BrandWordmark
                    variant="gold"
                    className="mt-2 sm:mt-3 h-4 sm:h-6 lg:h-7 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
                  />
                  <span className="mt-1 sm:mt-1.5 text-[8px] sm:text-[10px] lg:text-[11px] font-medium text-[#E5C9A3]/90 leading-snug drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                    للمحاماة والتوثيق والاستشارات القانونية
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
