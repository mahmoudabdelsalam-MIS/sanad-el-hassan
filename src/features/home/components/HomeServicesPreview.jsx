import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionHeading from "../../shared/heading/SectionHeading";
import ImageFeatureCard from "../../shared/cards/ImageFeatureCard";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";
import { HOME_SERVICES_PREVIEW } from "../data/homeData";

export default function HomeServicesPreview() {
  return (
    <section
      aria-label="الخدمات"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0F3C36] via-[#0B332E] to-[#082622] overflow-hidden"
    >
      {/* Subtle architectural ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#C8A074]/8 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <SectionHeading
            title="الخدمات"
            variant="stacked"
            tone="dark"
            lineWidth="w-10"
          />

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#D2AC80] hover:text-white transition-colors duration-200 self-start sm:self-auto"
          >
            <span>عرض جميع الخدمات</span>
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
          </Link>
        </FadeIn>

        {/* 3-Column Reusable Photo Feature Cards */}
        <StaggerContainer
          stagger={0.09}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {HOME_SERVICES_PREVIEW.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ImageFeatureCard
                image={service.image}
                title={service.title}
                to={service.to}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
