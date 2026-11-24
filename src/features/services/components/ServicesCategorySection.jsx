import React from "react";
import SectionHeading from "../../shared/heading/SectionHeading";
import ServiceCard from "../../shared/cards/ServiceCard";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";

export default function ServicesCategorySection({
  id,
  title,
  services = [],
  variant = "light",
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className="w-full py-6 sm:py-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title={title}
            lineWidth="w-14 sm:w-20"
            className="mb-6 sm:mb-7"
          />
        </FadeIn>

        <StaggerContainer
          stagger={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant={variant}
                to={`/orderService?service=${encodeURIComponent(service.title)}`}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
