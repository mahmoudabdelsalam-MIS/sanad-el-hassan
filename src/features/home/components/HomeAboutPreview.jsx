import React from "react";
import { blogContract } from "../../../assets/assets";
import EditorialSplitSection from "../../shared/editorial/EditorialSplitSection";

export default function HomeAboutPreview() {
  return (
    <EditorialSplitSection
      title="من نحن"
      description="في سند الحسّان، نربط المعرفة النظامية بفهم طبيعة الأعمال واحتياجات العميل، نعمل على صياغة العقود ومراجعتها، وتقديم المشورة، ومساندة العملاء في معالجة الخلافات ومتابعة مطالباتهم، ضمن نطاق التكليف المهني المتفق عليه."
      image={blogContract}
      imageAlt="مكتب سند الحسّان للمحاماة والتوثيق والاستشارات القانونية"
      linkLabel="المزيد من التفاصيل"
      linkTo="/aboutUs"
      backgroundClass="bg-brand-cream"
      showOffsetFrame
    />
  );
}
