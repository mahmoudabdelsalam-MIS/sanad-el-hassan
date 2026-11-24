import React from "react";

export default function ContactInfoCard({
  icon: Icon,
  title,
  lines = [],
  href,
  dir = "rtl",
  className = "",
}) {
  const cardClasses = `group flex flex-col items-center justify-center text-center rounded-2xl bg-brand-surface border border-brand-border px-4 py-6 shadow-[0_8px_24px_-16px_rgba(11,53,46,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold/45 hover:shadow-[0_14px_30px_-14px_rgba(11,53,46,0.16)] ${className}`;

  const content = (
    <>
      {Icon && (
        <span className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-sand/85 text-brand-gold transition-all duration-300 group-hover:bg-brand-green group-hover:text-[#D2AC80] group-hover:scale-105">
          <Icon className="w-6 h-6 stroke-[1.6]" />
        </span>
      )}

      <h3 className="text-base sm:text-[17px] font-bold text-brand-green transition-colors duration-300 group-hover:text-brand-gold">
        {title}
      </h3>

      <div
        dir={dir}
        className="mt-2 space-y-0.5 text-xs sm:text-[13px] font-medium text-[#465753] leading-relaxed"
      >
        {lines.map((line) => (
          <p key={line} className="break-words">
            {line}
          </p>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return <article className={cardClasses}>{content}</article>;
}
