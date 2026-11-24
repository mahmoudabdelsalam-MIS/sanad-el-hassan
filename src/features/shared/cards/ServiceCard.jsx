import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({
  id,
  icon: Icon,
  title,
  description,
  variant = "light",
  to = "/orderService",
  className = "",
}) {
  const isDark = variant === "dark";

  const cardClass = isDark
    ? "group relative flex flex-col items-center text-center rounded-2xl bg-gradient-to-b from-[#11453C] via-[#0C3730] to-[#082923] border border-[#C8A074]/25 px-4 py-6 shadow-[0_12px_28px_-14px_rgba(11,53,46,0.38)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D2AC80]/70 hover:shadow-[0_18px_36px_-12px_rgba(11,53,46,0.48)]"
    : "group relative flex flex-col items-center text-center rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#F2ECE2] border border-brand-border px-4 py-6 shadow-[0_8px_22px_-16px_rgba(11,53,46,0.14)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-white hover:border-brand-gold/55 hover:shadow-[0_16px_32px_-14px_rgba(11,53,46,0.18)]";

  const iconWrapperClass = isDark
    ? "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.06] border border-[#C8A074]/20 text-[#C8A074] transition-all duration-300 group-hover:scale-110 group-hover:border-[#DFBA8E]/60 group-hover:text-[#DFBA8E]"
    : "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-sand/85 text-brand-gold transition-all duration-300 group-hover:bg-brand-green group-hover:text-[#D2AC80] group-hover:scale-110";

  const titleClass = isDark
    ? "text-[15px] font-bold text-white leading-snug transition-colors duration-200 group-hover:text-[#E5C59A]"
    : "text-[15px] font-bold text-brand-green leading-snug transition-colors duration-200 group-hover:text-brand-gold";

  const descClass = isDark
    ? "mt-2 text-xs text-white/80 leading-[1.8]"
    : "mt-2 text-xs text-[#4E5F5B] leading-[1.8]";

  return (
    <Link id={id} to={to} className={`${cardClass} ${className}`}>
      {/* Subtle gold top highlight line on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#C8A074] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {Icon && (
        <span className={iconWrapperClass}>
          <Icon className="w-6 h-6 stroke-[1.6]" />
        </span>
      )}

      <h3 className={titleClass}>{title}</h3>

      <p className={descClass}>{description}</p>
    </Link>
  );
}
