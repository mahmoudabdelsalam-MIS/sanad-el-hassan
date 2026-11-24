import React from "react";
import SectionHeading from "../../shared/heading/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../shared/motion/MotionPrimitives";
import { HOME_CLIENTS } from "../data/homeData";

function ClientLogoCard({ client }) {
  const Icon = client.icon;

  return (
    <article className="group flex flex-col items-center justify-center text-center aspect-square sm:aspect-[6/5] rounded-2xl bg-white border border-brand-border p-5 shadow-[0_6px_18px_-14px_rgba(15,60,54,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_14px_26px_-14px_rgba(15,60,54,0.16)]">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="h-12 w-auto max-w-[110px] object-contain"
        />
      ) : (
        <Icon className="w-10 h-10 text-brand-gold stroke-[1.5] transition-colors duration-300 group-hover:text-brand-green" />
      )}

      <p className="mt-3.5 text-sm font-bold text-brand-green transition-colors duration-200 group-hover:text-brand-gold">
        {client.name}
      </p>
    </article>
  );
}

export default function HomeClientsSection() {
  return (
    <section
      aria-label="عملائنا"
      className="w-full py-12 sm:py-16 bg-brand-surface border-y border-brand-border/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 sm:mb-10">
          <SectionHeading
            title="عملائنا"
            variant="stacked"
            lineWidth="w-10"
          />
        </FadeIn>

        <StaggerContainer
          stagger={0.07}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {HOME_CLIENTS.map((client, index) => (
            <StaggerItem
              key={client.id}
              className={
                index === HOME_CLIENTS.length - 1
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }
            >
              <ClientLogoCard client={client} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
