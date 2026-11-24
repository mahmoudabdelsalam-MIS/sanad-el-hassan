import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import PageHero from "../shared/hero/PageHero";
import ServicesTabs from "./components/ServicesTabs";
import ServicesCategorySection from "./components/ServicesCategorySection";
import ConsultationCtaBanner from "./components/ConsultationCtaBanner";
import { CORPORATE_SERVICES, INDIVIDUAL_SERVICES } from "./data/servicesData";

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialTab =
    searchParams.get("type") === "corporate" ? "corporate" : "individuals";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync tab & smooth-scroll when navigated from Navbar dropdown (?type= or #hash)
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam === "corporate" || typeParam === "individuals") {
      setActiveTab(typeParam);
      const target = document.getElementById(typeParam);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.hash]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ type: tabKey }, { replace: true });
    const target = document.getElementById(tabKey);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full bg-brand-cream">
      {/* Reused Inner Page Hero Banner */}
      <PageHero
        eyebrow="خدماتنا القانونية"
        title="حلول قانونية متكاملة"
        subtitle="نقدم مجموعة شاملة من الخدمات القانونية والاستشارية للأفراد والشركات، بمعايير مهنية عالية وخبرة عملية في مختلف مجالات القانون."
      />

      {/* Interactive Segment Tabs */}
      <ServicesTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Section 1: Individuals Services (Light Warm Cards) */}
      <ServicesCategorySection
        id="individuals"
        title="خدماتنا للأفراد"
        services={INDIVIDUAL_SERVICES}
        variant="light"
      />

      {/* Section 2: Corporate Services (Dark Pine-Teal Cards) */}
      <ServicesCategorySection
        id="corporate"
        title="خدماتنا للشركات وقطاع الأعمال"
        services={CORPORATE_SERVICES}
        variant="dark"
      />

      {/* Bottom Consultation Banner */}
      <ConsultationCtaBanner />
    </div>
  );
}
