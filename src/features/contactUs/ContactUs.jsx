import React from "react";
import { Clock, Mail, Phone } from "lucide-react";
import SITE_INFO from "../../lib/siteInfo";
import PageHero from "../shared/hero/PageHero";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../shared/motion/MotionPrimitives";
import ContactInfoCard from "./components/ContactInfoCard";
import OfficeLocationCard from "./components/OfficeLocationCard";
import ContactForm from "./components/ContactForm";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "اتصل بنا",
    lines: [SITE_INFO.phoneDisplay],
    href: SITE_INFO.phoneHref,
    dir: "ltr",
  },
  {
    icon: Mail,
    title: "راسلنا",
    lines: [SITE_INFO.email],
    href: SITE_INFO.emailHref,
    dir: "ltr",
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    lines: SITE_INFO.workHours,
    dir: "rtl",
  },
];

export default function ContactUs() {
  return (
    <div className="w-full bg-brand-cream">
      {/* Reused Inner Page Hero Banner */}
      <PageHero
        eyebrow="تواصل معنا"
        title="يسعدنا تواصلكم"
        subtitle="فريقنا القانوني جاهز للإجابة على استفساراتكم وتقديم الدعم القانوني المناسب لاحتياجاتكم."
      />

      {/* Main Contact Content */}
      <section
        aria-label="معلومات التواصل ونموذج المراسلة"
        className="w-full py-10 sm:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Right Column (RTL start): 3 Reusable Contact Cards + Office Location */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <StaggerContainer
                stagger={0.08}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {CONTACT_CARDS.map((card) => (
                  <StaggerItem key={card.title} className="h-full">
                    <ContactInfoCard
                      icon={card.icon}
                      title={card.title}
                      lines={card.lines}
                      href={card.href}
                      dir={card.dir}
                      className="h-full"
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeIn delay={0.18} className="flex-1 flex">
                <OfficeLocationCard className="w-full flex-1" />
              </FadeIn>
            </div>

            {/* Left Column (RTL end): Contact Form */}
            <FadeIn direction="left" delay={0.12} className="lg:col-span-6 flex">
              <ContactForm className="w-full h-full" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
