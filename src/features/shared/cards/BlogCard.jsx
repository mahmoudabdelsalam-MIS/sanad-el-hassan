import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

export default function BlogCard({
  image,
  category,
  title,
  excerpt,
  date,
  to = "/blog",
  className = "",
}) {
  return (
    <article
      className={`group flex flex-col rounded-2xl bg-brand-surface border border-brand-border overflow-hidden shadow-[0_10px_26px_-16px_rgba(11,53,46,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold/45 hover:shadow-[0_18px_36px_-14px_rgba(11,53,46,0.18)] ${className}`}
    >
      {/* Top Cover Image */}
      <Link
        to={to}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-[#1D2B27]"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
        />
      </Link>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-5">
        {/* Category Pill Badge */}
        {category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-semibold text-white bg-gradient-to-l from-[#A67C52] to-[#8B633C] shadow-xs">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-base sm:text-[17px] font-bold text-brand-green leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-brand-gold">
          <Link to={to} className="focus:outline-none">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="mt-2.5 text-xs sm:text-[13px] text-[#4E5F5B] leading-[1.85] line-clamp-3 flex-1">
            {excerpt}
          </p>
        )}

        {/* Footer: Date & Read More Link */}
        <div className="mt-4 pt-3.5 border-t border-brand-border/80 flex items-center justify-between gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 text-brand-muted font-medium">
            <CalendarDays className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>{date}</span>
          </span>

          <Link
            to={to}
            className="inline-flex items-center gap-1.5 font-bold text-brand-gold hover:text-brand-gold-dark transition-colors duration-200"
          >
            <span>اقرأ المقال</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
