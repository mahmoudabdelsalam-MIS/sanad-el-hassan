import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VARIANT_CLASSES = {
  primary:
    "group/btn relative overflow-hidden text-white bg-gradient-to-b from-[#B68C60] via-[#A1774D] to-[#8B633C] border border-[#D2AC80]/35 shadow-[0_6px_18px_rgba(140,100,62,0.28)] hover:shadow-[0_10px_24px_rgba(140,100,62,0.42)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outline:
    "group/btn text-white bg-[#082A24]/60 hover:bg-[#12483F]/90 border border-[#C8A074]/45 hover:border-[#D2AC80]/85 backdrop-blur-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  dark:
    "group/btn relative overflow-hidden text-white bg-brand-green hover:bg-brand-green-light border border-[#C8A074]/25 shadow-[0_6px_18px_rgba(11,53,46,0.22)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "group/btn text-brand-green hover:text-brand-gold hover:bg-brand-sand/70 border border-transparent",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-xs sm:text-sm gap-2 rounded-lg",
  md: "px-5 py-2.5 text-sm gap-2 rounded-lg",
  lg: "px-7 py-3 text-sm sm:text-[15px] gap-2.5 rounded-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  icon: Icon,
  showArrow = false,
  fullWidth = false,
  className = "",
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out cursor-pointer select-none",
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      )}
      {Icon && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-110" />
      )}
      <span>{children}</span>
      {showArrow && (
        <ArrowLeft className="w-4 h-4 shrink-0 transition-transform duration-300 ease-out group-hover/btn:-translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
