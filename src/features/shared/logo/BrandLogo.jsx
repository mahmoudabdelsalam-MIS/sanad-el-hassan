import React, { useId } from "react";
import {
  sanadWordmarkGold,
  sanadWordmarkGreen,
  sanadWordmarkWhite,
} from "../../../assets/assets";

const GRADIENTS = {
  default: [
    { offset: "0%", color: "#AD825E" },
    { offset: "55%", color: "#9E7352" },
    { offset: "100%", color: "#8B6242" },
  ],
  metallic: [
    { offset: "0%", color: "#F4DFC1" },
    { offset: "50%", color: "#CFA574" },
    { offset: "100%", color: "#9A6E42" },
  ],
};

const WORDMARK_VARIANTS = {
  green: sanadWordmarkGreen,
  gold: sanadWordmarkGold,
  white: sanadWordmarkWhite,
};

export function BrandLogoMark({
  variant = "default",
  className = "w-11 h-9 sm:w-12 sm:h-10",
}) {
  const gradientId = useId();
  const stops = GRADIENTS[variant] ?? GRADIENTS.default;
  const accentColor = variant === "metallic" ? "#E8CFA8" : "#0F3C36";

  return (
    <svg
      viewBox="0 0 100 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="0"
          x2="90"
          y2="78"
          gradientUnits="userSpaceOnUse"
        >
          {stops.map((stop) => (
            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>

      {/* Top left & right bronze bars */}
      <rect x="0" y="0" width="36" height="16" fill={`url(#${gradientId})`} />
      <rect x="64" y="0" width="36" height="16" fill={`url(#${gradientId})`} />

      {/* Top center signature dark pine-teal square */}
      <rect x="42" y="0" width="16" height="16" fill={accentColor} />

      {/* Symmetrical double-U bronze body */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24 H29 V40 H16 V49 A13 13 0 0 0 42 49 V24 H58 V49 A13 13 0 0 0 84 49 V40 H71 V24 H100 V49 A29 29 0 0 1 50 69 A29 29 0 0 1 0 49 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

export function BrandWordmark({
  variant = "green",
  className = "h-5 sm:h-7 w-auto",
}) {
  const src = WORDMARK_VARIANTS[variant] ?? WORDMARK_VARIANTS.green;

  return (
    <img
      src={src}
      alt="سند الحسّان"
      className={`object-contain select-none ${className}`}
    />
  );
}

export default BrandLogoMark;
