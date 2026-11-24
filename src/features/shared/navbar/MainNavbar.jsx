import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  FileText,
  Gavel,
  Mail,
  MapPin,
  Menu,
  Scale,
  Users,
  X,
} from "lucide-react";
import useClickOutside from "../../../hooks/useClickOutside";
import SITE_INFO from "../../../lib/siteInfo";
import Button from "../button/Button";
import { BrandLogoMark, BrandWordmark } from "../logo/BrandLogo";
import { LUXURY_EASE } from "../motion/MotionPrimitives";

const SERVICE_ITEMS = [
  {
    title: "خدماتنا للأفراد",
    description: "حلول قانونية موثوقة لقضاياك الشخصية وحقوقك",
    to: "/services?type=individuals",
    icon: Users,
  },
  {
    title: "للشركات وقطاع الأعمال",
    description: "حماية مصالح شركتك وإدارة مخاطرك القانونية",
    to: "/services?type=corporate",
    icon: Briefcase,
  },
  {
    title: "الاستشارات القانونية",
    description: "رأي قانوني عملي وقابل للتنفيذ في مختلف المجالات",
    to: "/services#consultations",
    icon: Scale,
  },
  {
    title: "العقود والمعاملات",
    description: "إعداد ومراجعة وصياغة مختلف أنواع العقود",
    to: "/services#contracts",
    icon: FileText,
  },
  {
    title: "المنازعات التجارية",
    description: "تمثيل الشركات في المنازعات التجارية والتحكيم",
    to: "/services#commercial",
    icon: Gavel,
  },
  {
    title: "القضايا العقارية",
    description: "المنازعات العقارية والإخلاء وتسجيل الملكية",
    to: "/services#real-estate",
    icon: Building2,
  },
];

const NAV_LINKS = [
  { label: "الرئيسية", to: "/", end: true },
  { label: "من نحن", to: "/aboutUs" },
  { label: "خدماتنا", to: "/services", hasDropdown: true },
  { label: "المدونة القانونية", to: "/blog" },
  { label: "تواصل معنا", to: "/contactUs" },
];

// Zero-layout-shift label: reserves bold width permanently so active state never moves siblings
function StableNavLabel({ label, isActive }) {
  return (
    <span className="inline-grid place-items-center">
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 font-bold invisible select-none pointer-events-none"
      >
        {label}
      </span>
      <span
        className={`col-start-1 row-start-1 transition-colors duration-300 ${
          isActive ? "font-bold" : "font-semibold"
        }`}
      >
        {label}
      </span>
    </span>
  );
}

// Gliding golden active underline shared across desktop nav links via Motion layoutId
function DesktopNavItemContent({ label, isActive }) {
  return (
    <>
      <StableNavLabel label={label} isActive={isActive} />
      {isActive ? (
        <motion.span
          layoutId="mainNavActiveUnderline"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
          className="absolute bottom-0 inset-x-1 h-[2.5px] rounded-full bg-brand-gold"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute bottom-0 inset-x-1 h-[2.5px] rounded-full bg-brand-gold/65 scale-x-0 group-hover/link:scale-x-100 origin-right transition-transform duration-300 ease-out"
        />
      )}
    </>
  );
}

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  const closeServices = useCallback(() => setServicesOpen(false), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // Close desktop dropdown & mobile drawer cleanly on outside click or Escape
  useClickOutside(servicesDropdownRef, closeServices, servicesOpen);
  useClickOutside(navRef, closeMobile, mobileOpen);

  const isServicesActive = location.pathname.startsWith("/services");

  const getDesktopLinkClass = ({ isActive }) =>
    `group/link relative inline-flex items-center px-1.5 py-2 text-[15px] transition-colors duration-300 ease-out ${
      isActive ? "text-brand-gold" : "text-[#1B2F2B] hover:text-brand-gold"
    }`;

  return (
    <nav
      ref={navRef}
      aria-label="التنقل الرئيسي"
      className="sticky top-0 z-40 w-full bg-brand-surface/95 backdrop-blur-md border-b border-brand-border shadow-[0_2px_14px_rgba(11,53,46,0.05)] transition-shadow duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Right side (RTL start): Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0"
        >
          <BrandLogoMark className="w-9 h-7 sm:w-12 sm:h-10 transition-transform duration-300 ease-out group-hover:scale-105" />
          <div className="flex flex-col items-start min-w-0">
            <BrandWordmark
              variant="green"
              className="h-5 sm:h-[26px] w-auto"
            />
            <span className="text-[9.5px] sm:text-[11px] font-medium text-brand-gold leading-tight mt-1 truncate transition-colors duration-300 group-hover:text-brand-ink">
              {SITE_INFO.tagline}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((item) => {
            if (item.hasDropdown) {
              return (
                <li
                  key={item.to}
                  ref={servicesDropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-0.5">
                    <NavLink to={item.to} className={getDesktopLinkClass}>
                      {({ isActive }) => (
                        <DesktopNavItemContent
                          label={item.label}
                          isActive={isActive}
                        />
                      )}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-expanded={servicesOpen}
                      aria-label="قائمة خدماتنا"
                      className={`p-1 rounded-md transition-colors duration-300 cursor-pointer ${
                        isServicesActive || servicesOpen
                          ? "text-brand-gold"
                          : "text-[#1B2F2B] hover:text-brand-gold"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Animated Services Mega Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: LUXURY_EASE }}
                        className="absolute top-full right-1/2 translate-x-1/2 pt-3 w-[540px] z-50"
                      >
                        <div className="rounded-2xl bg-white border border-brand-border shadow-[0_18px_40px_-12px_rgba(11,53,46,0.16)] p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {SERVICE_ITEMS.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.title}
                                  to={service.to}
                                  className="group/item flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-brand-border/80 hover:bg-brand-cream hover:-translate-y-0.5 transition-all duration-200 ease-out"
                                >
                                  <span className="w-9 h-9 rounded-lg bg-brand-sand text-brand-gold flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover/item:bg-brand-green group-hover/item:text-[#D5AE82] group-hover/item:scale-105">
                                    <Icon className="w-4 h-4" />
                                  </span>
                                  <div className="min-w-0">
                                    <p className="text-sm font-bold text-brand-green group-hover/item:text-brand-gold transition-colors duration-200">
                                      {service.title}
                                    </p>
                                    <p className="text-xs text-[#64736F] leading-relaxed mt-0.5 line-clamp-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-3 pt-3 border-t border-brand-border flex items-center justify-between px-2">
                            <span className="text-xs text-[#64736F]">
                              مجموعة شاملة من الخدمات القانونية للأفراد والشركات
                            </span>
                            <Link
                              to="/services"
                              className="group/all inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-gold-dark transition-colors duration-200"
                            >
                              <span>عرض جميع الخدمات</span>
                              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/all:-translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={getDesktopLinkClass}
                >
                  {({ isActive }) => (
                    <DesktopNavItemContent
                      label={item.label}
                      isActive={isActive}
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Left side (RTL end): Reusable CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Button
            to="/orderService"
            variant="primary"
            size="md"
            icon={CalendarDays}
            className="hidden sm:inline-flex"
          >
            طلب استشارة
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="lg:hidden p-2 rounded-lg border border-brand-border/80 bg-white/70 text-brand-green hover:bg-brand-sand hover:text-brand-gold active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Overlay Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: LUXURY_EASE }}
            className="lg:hidden absolute top-full inset-x-0 z-50"
          >
            <div className="bg-white border-b border-brand-border shadow-[0_20px_40px_-14px_rgba(11,53,46,0.22)] max-h-[calc(100dvh-100px)] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
                {NAV_LINKS.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.to} className="space-y-1">
                        <div className="flex items-center justify-between rounded-xl overflow-hidden">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `flex-1 px-3.5 py-2.5 text-sm rounded-r-xl transition-all duration-200 ${
                                isActive
                                  ? "bg-brand-sand text-brand-gold font-bold"
                                  : "text-[#1B2F2B] font-semibold hover:bg-brand-cream hover:text-brand-gold"
                              }`
                            }
                          >
                            {item.label}
                          </NavLink>
                          <button
                            type="button"
                            onClick={() =>
                              setMobileServicesOpen((prev) => !prev)
                            }
                            aria-expanded={mobileServicesOpen}
                            aria-label="عرض خدماتنا"
                            className="px-3.5 py-2.5 text-brand-green hover:bg-brand-cream hover:text-brand-gold rounded-l-xl transition-colors duration-200 cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ease-out ${
                                mobileServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: LUXURY_EASE }}
                              className="overflow-hidden"
                            >
                              <div className="pr-3.5 py-1 space-y-1 border-r-2 border-brand-gold/40 mr-3">
                                {SERVICE_ITEMS.map((service) => (
                                  <Link
                                    key={service.title}
                                    to={service.to}
                                    className="block px-3 py-2 text-xs font-semibold text-[#4A5D58] hover:text-brand-gold hover:bg-brand-cream rounded-lg transition-colors duration-200"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-200 ${
                          isActive
                            ? "bg-brand-sand text-brand-gold font-bold"
                            : "text-[#1B2F2B] font-semibold hover:bg-brand-cream hover:text-brand-gold"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                })}

                {/* Mobile CTA + Quick Office Info */}
                <div className="pt-3 mt-2 border-t border-brand-border space-y-3">
                  <Button
                    to="/orderService"
                    variant="primary"
                    size="lg"
                    icon={CalendarDays}
                    fullWidth
                    className="rounded-xl"
                  >
                    طلب استشارة
                  </Button>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-brand-muted">
                    <a
                      href={SITE_INFO.emailHref}
                      className="inline-flex items-center gap-1.5 hover:text-brand-gold transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span dir="ltr">{SITE_INFO.email}</span>
                    </a>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{SITE_INFO.locationShort}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
