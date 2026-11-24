import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

const ROUTE_LABELS = {
  aboutUs: "من نحن",
  services: "خدماتنا",
  blog: "المدونة القانونية",
  contactUs: "تواصل معنا",
  orderService: "طلب الخدمة القانونية",
};

const BreadCrumbContext = createContext(null);

export function BreadCrumbProvider({ children }) {
  const location = useLocation();
  const [customBreadcrumbs, setCustomBreadcrumbs] = useState(null);

  // Reset custom overrides automatically on route navigation
  useEffect(() => {
    setCustomBreadcrumbs(null);
  }, [location.pathname]);

  const setBreadcrumbs = useCallback((items) => {
    setCustomBreadcrumbs(items);
  }, []);

  const resetBreadcrumbs = useCallback(() => {
    setCustomBreadcrumbs(null);
  }, []);

  const breadcrumbs = useMemo(() => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return [];
    }

    const items = [{ label: "الرئيسية", to: "/" }];
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      const label = ROUTE_LABELS[segment] ?? decodeURIComponent(segment);

      items.push({
        label,
        to: isLast ? undefined : currentPath,
      });
    });

    return items;
  }, [location.pathname, customBreadcrumbs]);

  const value = useMemo(
    () => ({
      breadcrumbs,
      setBreadcrumbs,
      resetBreadcrumbs,
    }),
    [breadcrumbs, setBreadcrumbs, resetBreadcrumbs]
  );

  return (
    <BreadCrumbContext.Provider value={value}>
      {children}
    </BreadCrumbContext.Provider>
  );
}

export function useBreadCrumb() {
  const context = useContext(BreadCrumbContext);
  if (!context) {
    throw new Error("useBreadCrumb must be used within a BreadCrumbProvider");
  }
  return context;
}

export default BreadCrumbContext;
