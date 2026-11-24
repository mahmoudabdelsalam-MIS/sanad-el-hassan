import React, { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import useClickOutside from "../../../hooks/useClickOutside";
import { LUXURY_EASE } from "../motion/MotionPrimitives";

export default function CustomSelect({
  options = [],
  value,
  onChange,
  placeholder = "اختر...",
  icon: Icon,
  shape = "box",
  ariaLabel,
  required = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  useClickOutside(containerRef, closeMenu, isOpen);

  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  const handleSelect = (optionValue) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const radiusClass = shape === "pill" ? "rounded-full" : "rounded-xl";
  const paddingClass = Icon ? "pr-10 pl-9" : "pr-4 pl-9";
  const surfaceClass =
    shape === "pill"
      ? "bg-brand-surface py-2.5 shadow-[0_4px_14px_-10px_rgba(11,53,46,0.12)]"
      : "bg-brand-cream/75 py-3";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden input to keep native HTML required validation working in forms */}
      {required && (
        <input
          tabIndex={-1}
          aria-hidden="true"
          value={value ?? ""}
          onChange={() => {}}
          required
          className="sr-only"
        />
      )}

      {/* Custom Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel || placeholder}
        className={`relative w-full ${radiusClass} ${paddingClass} ${surfaceClass} border text-sm text-right flex items-center justify-between transition-all duration-200 cursor-pointer focus:outline-none ${
          isOpen
            ? "bg-white border-brand-gold ring-2 ring-brand-gold/20"
            : "border-brand-border hover:border-brand-gold/60 hover:bg-white"
        }`}
      >
        {Icon && (
          <Icon className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold shrink-0" />
        )}

        <span
          className={`truncate ${
            selectedOption
              ? "text-brand-ink font-medium"
              : "text-[#7A8884] font-normal"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ChevronDown
          className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-brand-gold" : "text-brand-muted"
          }`}
        />
      </button>

      {/* Animated Custom Branded Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            aria-label={ariaLabel || placeholder}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: LUXURY_EASE }}
            className="absolute right-0 left-0 mt-2 rounded-2xl bg-white border border-brand-border shadow-[0_18px_40px_-12px_rgba(11,53,46,0.18)] p-1.5 z-50 origin-top"
          >
            <ul className="max-h-64 overflow-y-auto space-y-0.5">
              {normalizedOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm text-right flex items-center justify-between gap-2 transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-brand-sand/85 text-brand-green font-bold"
                          : "text-brand-ink font-medium hover:bg-brand-cream hover:text-brand-gold"
                      }`}
                    >
                      <span className="truncate">{option.label}</span>

                      <span className="flex items-center gap-2 shrink-0">
                        {option.count !== undefined && (
                          <span
                            className={`inline-flex items-center justify-center min-w-[24px] h-5 px-1.5 rounded-full text-[11px] font-semibold ${
                              isSelected
                                ? "bg-brand-green text-white"
                                : "bg-brand-sand text-brand-gold"
                            }`}
                          >
                            {option.count}
                          </span>
                        )}
                        {isSelected && (
                          <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
