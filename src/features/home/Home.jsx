import React from "react";
import HeroSection from "./components/HeroSection";
import HomeAboutPreview from "./components/HomeAboutPreview";
import HomeServicesPreview from "./components/HomeServicesPreview";
import HomeClientsSection from "./components/HomeClientsSection";
import HomeAchievementsPreview from "./components/HomeAchievementsPreview";
import HomeCtaBanner from "./components/HomeCtaBanner";

export default function Home() {
  return (
    <div className="w-full bg-brand-cream">
      <HeroSection />
      <HomeAboutPreview />
      <HomeServicesPreview />
      <HomeClientsSection />
      <HomeAchievementsPreview />
      <HomeCtaBanner />
    </div>
  );
}
