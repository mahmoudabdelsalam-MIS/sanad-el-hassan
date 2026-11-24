import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ImageFeatureCard({
  image,
  title,
  to = "/services",
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`group flex flex-col rounded-2xl bg-brand-surface border border-white/15 overflow-hidden shadow-[0_14px_34px_-14px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_42px_-14px_rgba(0,0,0,0.45)] ${className}`}
    >
      {/* Static Editorial Photo */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#182B27]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Card Footer: Title + Circular Arrow Badge */}
      <div className="flex-1 px-5 py-4 flex items-center justify-between gap-4 min-h-[76px] bg-brand-surface">
        <h3 className="text-sm sm:text-[15px] font-bold text-brand-green leading-snug transition-colors duration-200 group-hover:text-brand-gold">
          {title}
        </h3>

        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-sand text-brand-gold shrink-0 transition-all duration-300 ease-out group-hover:bg-brand-green group-hover:text-[#D2AC80]">
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
