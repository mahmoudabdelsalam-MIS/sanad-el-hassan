import React from "react";
import { motion } from "motion/react";
import { heroBg } from "../../../assets/assets";
import Button from "../../shared/button/Button";
import { LUXURY_EASE } from "../../shared/motion/MotionPrimitives";
import TrustBar from "./TrustBar";

export default function HeroSection() {
  return (
    <section
      aria-label="الواجهة الرئيسية"
      className="relative w-full min-h-[calc(100dvh-102px)] sm:min-h-[calc(100dvh-122px)] lg:h-[calc(100dvh-122px)] flex flex-col"
    >
      {/* Main Hero Banner */}
      <div className="relative w-full flex-1 bg-brand-green overflow-hidden flex items-center">
        {/* Background Editorial Photo (static, no motion) */}
        <img
          src={heroBg}
          alt="ميزان العدالة وأفق مدينة الرياض - مكتب سند الحسن للمحاماة"
          className="absolute inset-0 w-full h-full object-cover object-[28%_center] sm:object-[22%_center] lg:object-left select-none pointer-events-none"
        />

        {/* Mobile / Tablet balanced high-contrast pine-teal scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#072620]/88 via-[#0B352E]/82 to-[#072620]/94 lg:hidden"
        />

        {/* Desktop Signature Curved Diagonal Pine-Teal Overlay + Animated Gold Arc */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 540"
          preserveAspectRatio="none"
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        >
          <defs>
            <linearGradient id="heroPineGrad" x1="100%" y1="0%" x2="35%" y2="100%">
              <stop offset="0%" stopColor="#082A24" stopOpacity="0.98" />
              <stop offset="52%" stopColor="#0D3C34" stopOpacity="0.97" />
              <stop offset="100%" stopColor="#072721" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="heroGoldArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBA8E" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#B88E60" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#8C643E" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="heroGoldArcSoft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBA8E" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#B88E60" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8C643E" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="heroLeftVignette" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#07241F" stopOpacity="0.35" />
              <stop offset="28%" stopColor="#07241F" stopOpacity="0" />
              <stop offset="100%" stopColor="#07241F" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="1440" height="540" fill="url(#heroLeftVignette)" />
          <path
            d="M802,0 C702,152 628,332 574,540 L1440,540 L1440,0 Z"
            fill="#0B352E"
            fillOpacity="0.28"
          />
          <path
            d="M830,0 C730,155 656,335 606,540 L1440,540 L1440,0 Z"
            fill="url(#heroPineGrad)"
          />
          <motion.path
            d="M823,0 C723,155 649,335 599,540"
            fill="none"
            stroke="url(#heroGoldArcSoft)"
            strokeWidth="6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.15, delay: 0.15, ease: LUXURY_EASE }}
          />
          <motion.path
            d="M830,0 C730,155 656,335 606,540"
            fill="none"
            stroke="url(#heroGoldArc)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.1, ease: LUXURY_EASE }}
          />
        </svg>

        {/* Bottom subtle dark blend into Trust Strip */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#082A24]/80 to-transparent pointer-events-none"
        />

        {/* Hero Foreground Content with Staggered Executive Reveal */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-8">
          <div className="max-w-[500px] xl:max-w-[530px] space-y-3.5 sm:space-y-4 lg:space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: LUXURY_EASE }}
              className="flex items-center gap-2.5 sm:gap-3.5"
            >
              <span className="text-xs sm:text-base font-medium text-[#D2AC80] tracking-wide">
                شريكك القانوني في قطاع الأعمال والأفراد
              </span>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: LUXURY_EASE }}
                className="h-[1.5px] w-8 sm:w-16 bg-gradient-to-l from-[#D2AC80] to-[#D2AC80]/20 rounded-full shrink-0 origin-right"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: LUXURY_EASE }}
              className="text-[26px] sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.32] lg:leading-[1.28] tracking-tight"
            >
              حلول قانونية متكاملة
              <span className="block mt-1">تحمي حقوقك وتدعم أعمالك</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: LUXURY_EASE }}
              className="text-[13.5px] sm:text-base lg:text-[17px] text-white/85 leading-[1.8] lg:leading-[1.85] font-normal max-w-[500px]"
            >
              في سند الحسّان، نقدم خدمات المحاماة والتوثيق والاستشارات القانونية
              بمعايير مهنية عالية، وخبرة عملية في الأنظمة السعودية وبيئة الأعمال.
            </motion.p>

            {/* Responsive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: LUXURY_EASE }}
              className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 pt-2 sm:pt-3"
            >
              <Button
                to="/orderService"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto"
              >
                طلب استشارة الآن
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                استكشف خدماتنا
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Extracted Standalone 5-Card Trust Bar */}
      <TrustBar />
    </section>
  );
}
