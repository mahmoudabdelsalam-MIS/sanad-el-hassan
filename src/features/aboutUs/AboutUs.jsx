import React from "react";
import AboutHero from "./components/AboutHero";
import AboutOverview from "./components/AboutOverview";
import VisionMissionValues from "./components/VisionMissionValues";
import AboutStats from "./components/AboutStats";
import WhySanadSection from "./components/WhySanadSection";

export default function AboutUs() {
  return (
    <div className="w-full bg-brand-cream">
      <AboutHero />
      <AboutOverview />
      <VisionMissionValues />
      <AboutStats />
      <WhySanadSection />
    </div>
  );
}
