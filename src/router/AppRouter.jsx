import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../features/layout/Layout";
import Home from "../features/home/Home";
import AboutUs from "../features/aboutUs/AboutUs";
import Services from "../features/services/Services";
import Blog from "../features/Blog/Blog";
import ContactUs from "../features/contactUs/ContactUs";
import OrderService from "../features/orderService/OrderService";
import Button from "../features/shared/button/Button";

function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-brand-green">404</h1>
      <p className="mt-3 text-lg font-semibold text-brand-muted">
        عذراً، الصفحة التي تبحث عنها غير موجودة
      </p>
      <Button to="/" variant="primary" size="md" className="mt-6">
        العودة للرئيسية
      </Button>
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "orderService",
        element: <OrderService />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
