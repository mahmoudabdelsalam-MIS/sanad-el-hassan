import React from "react";
import { motion } from "motion/react";
import { Award, Handshake, Scale, ShieldCheck, Target } from "lucide-react";
import { LUXURY_EASE } from "../../shared/motion/MotionPrimitives";

const TRUST_PILLARS = [
  {
    icon: Scale,
    label: "معرفة عميقة بالأنظمة السعودية",
  },
  {
    icon: Award,
    label: "خبرة متخصصة",
  },
  {
    icon: Target,
    label: "حلول عملية",
  },
  {
    icon: Handshake,
    label: "التزام مهني",
  },
  {
    icon: ShieldCheck,
    label: "سرية وموثوقية",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.42,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: LUXURY_EASE },
  },
};

export default function TrustBar() {
  return (
    <div className="relative shrink-0 w-full bg-gradient-to-l from-[#082C26] via-[#0C362F] to-[#082B25] border-t border-[#C8A074]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-0 items-stretch lg:items-center"
        >
          {TRUST_PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: LUXURY_EASE }}
                className={`group relative flex flex-col items-center justify-center text-center rounded-xl bg-white/[0.04] border border-white/10 px-3 py-3 lg:rounded-none lg:bg-transparent lg:border-0 lg:px-3 lg:py-0.5 transition-colors duration-300 hover:bg-white/[0.07] lg:hover:bg-transparent ${
                  index === TRUST_PILLARS.length - 1
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                {index !== 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/15"
                  />
                )}

                <span className="mb-1.5 inline-flex items-center justify-center text-[#C8A074] transition-all duration-300 ease-out group-hover:text-[#DFBA8E] group-hover:scale-110">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 stroke-[1.6]" />
                </span>
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-white leading-snug transition-colors duration-300 group-hover:text-[#F5E6D3]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Subtle Architectural Bottom-Left Gold Wave Transition into Page Cream */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 16"
        preserveAspectRatio="none"
        className="block w-full h-2.5 sm:h-3 pointer-events-none"
      >
        <path
          d="M0,0 C110,14 240,16 380,16 L1440,16 L0,16 Z"
          fill="#F4F0EA"
        />
        <path
          d="M0,0 C110,13 240,15 380,15"
          fill="none"
          stroke="#C8A074"
          strokeOpacity="0.65"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
