import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "../shared/hero/PageHero";
import { FadeIn } from "../shared/motion/MotionPrimitives";
import FeaturedServicesSidebar from "./components/FeaturedServicesSidebar";
import WhySanadMiniCard from "./components/WhySanadMiniCard";
import OrderServiceForm from "./components/OrderServiceForm";

export default function OrderService() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const [selectedService, setSelectedService] = useState(initialService);

  return (
    <div className="w-full bg-brand-cream">
      {/* Reused Inner Page Hero Banner (BreadCrumb comes automatically from Context) */}
      <PageHero
        eyebrow="طلب الخدمة القانونية"
        title="اطلب استشارتك أو خدمتك القانونية"
        subtitle="عبئ البيانات التالية، وسيقوم فريقنا المتخصص بالتواصل معك خلال وقت قصير لتقديم الدعم القانوني المناسب."
      />

      {/* Main Two-Column Content matching Page 5 */}
      <section
        aria-label="نموذج طلب الخدمة القانونية"
        className="w-full py-10 sm:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Right Column (RTL start): Featured Services + Why Sanad Mini Card */}
            <FadeIn
              direction="right"
              className="lg:col-span-4 space-y-5 order-2 lg:order-1"
            >
              <FeaturedServicesSidebar
                selectedService={selectedService}
                onSelectService={setSelectedService}
              />
              <WhySanadMiniCard />
            </FadeIn>

            {/* Left Column (RTL end): Consultation Request Form */}
            <FadeIn
              direction="left"
              delay={0.08}
              className="lg:col-span-8 order-1 lg:order-2"
            >
              <OrderServiceForm
                selectedService={selectedService}
                onServiceChange={setSelectedService}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
