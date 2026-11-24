import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { BreadCrumbProvider } from "../../context/breadcrumb/BreadCrumbContext";
import SecondaryNavbar from "../shared/navbar/SecondaryNavbar";
import MainNavbar from "../shared/navbar/MainNavbar";
import Footer from "../shared/footer/Footer";

export default function Layout() {
  return (
    <MotionConfig reducedMotion="user">
      <BreadCrumbProvider>
        <div className="min-h-screen flex flex-col bg-brand-cream">
          <SecondaryNavbar showLocation />
          <MainNavbar />

          <main className="flex-1">
            <Outlet />
          </main>

          <ScrollRestoration />
          <Footer />
        </div>
      </BreadCrumbProvider>
    </MotionConfig>
  );
}
