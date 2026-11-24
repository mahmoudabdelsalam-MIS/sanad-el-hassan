import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useBreadCrumb } from "../../../context/breadcrumb/BreadCrumbContext";

export default function BreadCrumb({ variant = "default", className = "" }) {
  const { breadcrumbs } = useBreadCrumb();

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  const isHero = variant === "hero";

  const linkClass = isHero
    ? "text-white/75 hover:text-[#D2AC80] transition-colors duration-200"
    : "text-brand-muted hover:text-brand-gold transition-colors duration-200";

  const activeClass = isHero
    ? "text-[#D2AC80] font-medium"
    : "text-brand-green font-semibold";

  const iconClass = isHero
    ? "w-3.5 h-3.5 text-[#C8A074]"
    : "w-3.5 h-3.5 text-brand-gold";

  const content = (
    <nav
      aria-label="مسار التنقل"
      className={`flex items-center flex-wrap gap-1.5 text-xs sm:text-[13px] ${className}`}
    >
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span
            key={`${crumb.label}-${index}`}
            className="inline-flex items-center gap-1.5"
          >
            {index > 0 && <ChevronLeft className={iconClass} />}
            {isLast || !crumb.to ? (
              <span className={activeClass}>{crumb.label}</span>
            ) : (
              <Link to={crumb.to} className={linkClass}>
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );

  if (isHero) {
    return content;
  }

  return (
    <div className="w-full bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {content}
      </div>
    </div>
  );
}
