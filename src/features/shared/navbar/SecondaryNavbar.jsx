import React, { useCallback, useRef, useState } from "react";
import { ChevronDown, Globe, Mail, MapPin, Phone } from "lucide-react";
import useClickOutside from "../../../hooks/useClickOutside";
import SITE_INFO from "../../../lib/siteInfo";

const LANGUAGES = [
  { code: "AR", label: "العربية" },
  { code: "EN", label: "English" },
];

export default function SecondaryNavbar({
  showLocation = true,
  lang: controlledLang,
  onLangChange,
}) {
  const [internalLang, setInternalLang] = useState("AR");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = controlledLang ?? internalLang;
  const closeLang = useCallback(() => setIsLangOpen(false), []);

  useClickOutside(dropdownRef, closeLang, isLangOpen);

  const handleSelectLang = (code) => {
    setInternalLang(code);
    onLangChange?.(code);
    setIsLangOpen(false);
  };

  return (
    <div className="w-full bg-brand-green text-[#EDF2F0] border-b border-white/10 text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between gap-3">
        {/* Right side (RTL start): Office location on md+ */}
        {showLocation ? (
          <div className="hidden md:flex items-center gap-1.5 text-white/90">
            <MapPin className="w-3.5 h-3.5 text-[#C79D71] shrink-0" />
            <span>{SITE_INFO.location}</span>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Contact info & language switcher */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <a
              href={SITE_INFO.emailHref}
              className="group hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#DFB98E] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#C79D71] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span dir="ltr">{SITE_INFO.email}</span>
            </a>

            <span
              className="hidden sm:inline-block h-3.5 w-px bg-white/20"
              aria-hidden="true"
            />

            <a
              href={SITE_INFO.phoneHref}
              className="group flex items-center gap-1.5 text-white/90 hover:text-[#DFB98E] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#C79D71] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span dir="ltr" className="font-medium tracking-wide">
                {SITE_INFO.phoneDisplay}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span
              className="hidden sm:inline-block h-3.5 w-px bg-white/20"
              aria-hidden="true"
            />

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                aria-label="تغيير اللغة"
                className="group flex items-center gap-1.5 text-white/95 hover:text-[#DFB98E] transition-colors duration-200 cursor-pointer py-1"
              >
                <Globe className="w-3.5 h-3.5 text-[#C79D71] shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-semibold tracking-wide">
                  {currentLang}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                role="listbox"
                className={`absolute left-0 mt-1.5 w-32 rounded-lg bg-white text-brand-ink shadow-lg ring-1 ring-black/5 py-1 z-50 origin-top-left transition-all duration-200 ease-out ${
                  isLangOpen
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-1.5 scale-95 pointer-events-none"
                }`}
              >
                {LANGUAGES.map((item) => {
                  const isSelected = currentLang === item.code;
                  return (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectLang(item.code)}
                      className={`w-full px-3 py-1.5 text-right text-xs flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-brand-sand text-brand-gold font-bold"
                          : "hover:bg-brand-cream hover:text-brand-gold text-[#1D312C]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[11px] opacity-70">{item.code}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
