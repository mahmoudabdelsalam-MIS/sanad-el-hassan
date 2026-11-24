import React from "react";

export default function SectionHeading({
  title,
  as: Tag = "h2",
  align = "start",
  tone = "default",
  variant = "inline",
  lineWidth = "w-10 sm:w-16",
  className = "",
}) {
  const isCentered = align === "center";

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

  if (variant === "stacked") {
    return (
      <div
        className={`flex flex-col gap-2.5 ${
          isCentered ? "items-center text-center" : "items-start text-right"
        } ${className}`}
      >
        <span
          aria-hidden="true"
          className={`h-[2.5px] ${lineWidth} bg-gradient-to-l ${lineClass} rounded-full`}
        />
        <Tag
          className={`text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-snug ${titleClass}`}
        >
          {title}
        </Tag>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 ${
        isCentered ? "justify-center text-center" : "justify-start text-right"
      } ${className}`}
    >
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
