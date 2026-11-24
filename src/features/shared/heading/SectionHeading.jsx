import React from "react";

export default function SectionHeading({
  title,
  as: Tag = "h2",
  align = "start",
  tone = "default",
  lineWidth = "w-10 sm:w-16",
  className = "",
}) {
  const alignClass =
    align === "center" ? "justify-center text-center" : "justify-start text-right";

  const titleClass =
    tone === "dark"
      ? "text-white"
      : tone === "gold"
        ? "text-[#D2AC80]"
        : "text-brand-green";

  const lineClass =
    tone === "dark" || tone === "gold"
      ? "from-[#D2AC80] to-[#D2AC80]/20"
      : "from-brand-gold to-brand-gold/25";

  return (
    <div className={`flex items-center gap-3 ${alignClass} ${className}`}>
      <Tag
        className={`text-xl sm:text-2xl lg:text-[30px] font-bold leading-snug ${titleClass}`}
      >
        {title}
      </Tag>
      <span
        aria-hidden="true"
        className={`h-[2px] ${lineWidth} bg-gradient-to-l ${lineClass} rounded-full shrink-0`}
      />
    </div>
  );
}
