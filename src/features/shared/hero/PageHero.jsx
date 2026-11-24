import React, { useId } from "react";
import { motion } from "motion/react";
import { heroBg } from "../../../assets/assets";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import { LUXURY_EASE } from "../motion/MotionPrimitives";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  showBreadcrumb = true,
  backgroundImage = heroBg,
  imageAlt = "مكتب سند الحسن للمحاماة والاستشارات القانونية",
}) {
  const uid = useId();
  const pineGradId = `pageHeroPine-${uid}`;
  const goldArcId = `pageHeroGold-${uid}`;
  const goldSoftId = `pageHeroGoldSoft-${uid}`;

  return (
    <section
      aria-label={title}
      className="relative w-full min-h-[205px] sm:min-h-[255px] lg:min-h-[295px] bg-brand-green overflow-hidden flex items-center"
    >
      {/* Background Photo (static, no motion) */}
      <img
        src={backgroundImage}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-[28%_center] sm:object-[22%_center] lg:object-left select-none pointer-events-none"
      />

      {/* Mobile / Tablet balanced high-contrast pine-teal scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#072620]/90 via-[#0B352E]/86 to-[#072620]/94 lg:hidden"
      />

      {/* Desktop Signature Curved Diagonal Pine-Teal Overlay + Animated Gold Arc */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id={pineGradId} x1="100%" y1="0%" x2="35%" y2="100%">
            <stop offset="0%" stopColor="#082B25" stopOpacity="0.98" />
            <stop offset="55%" stopColor="#0D3C34" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#072721" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id={goldArcId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA8E" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#B88E60" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8C643E" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id={goldSoftId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA8E" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#B88E60" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8C643E" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M780,0 C715,100 662,210 622,320 L1440,320 L1440,0 Z"
          fill="#0B352E"
          fillOpacity="0.26"
        />
        <path
          d="M808,0 C742,102 690,210 652,320 L1440,320 L1440,0 Z"
          fill={`url(#${pineGradId})`}
        />
        <motion.path
          d="M801,0 C735,102 683,210 645,320"
          fill="none"
          stroke={`url(#${goldSoftId})`}
          strokeWidth="6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: LUXURY_EASE }}
        />
        <motion.path
          d="M808,0 C742,102 690,210 652,320"
          fill="none"
          stroke={`url(#${goldArcId})`}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.08, ease: LUXURY_EASE }}
        />
      </svg>

      {/* Bottom subtle gold hairline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-l from-[#C8A074]/50 via-[#C8A074]/20 to-transparent"
      />

      {/* Staggered Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-11 lg:py-12">
        <div className="max-w-[540px] space-y-2.5 sm:space-y-3">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: LUXURY_EASE }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <span className="text-xs sm:text-[15px] font-medium text-[#D2AC80]">
                {eyebrow}
              </span>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: LUXURY_EASE }}
                className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-l from-[#D2AC80] to-[#D2AC80]/20 rounded-full shrink-0 origin-right"
              />
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: LUXURY_EASE }}
            className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: LUXURY_EASE }}
              className="text-[13.5px] sm:text-base text-white/85 font-normal leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {showBreadcrumb && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: LUXURY_EASE }}
            >
              <BreadCrumb variant="hero" className="pt-1.5 sm:pt-2" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
