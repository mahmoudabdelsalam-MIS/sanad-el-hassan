import React from "react";
import { heroBg } from "../../../assets/assets";
import EditorialSplitSection from "../../shared/editorial/EditorialSplitSection";

const ACHIEVEMENT_HIGHLIGHTS = [
  "+10 سنوات من الخبرة",
  "+500 استشارة قانونية",
  "+100 قضية وتمثيل قانوني",
];

export default function HomeAchievementsPreview() {
  return (
    <EditorialSplitSection
      title="الإنجازات"
      subtitle="أثر مهني في العقود والمطالبات والمشروعات"
      description="نعمل على مساعدة عملائنا في بناء علاقات تعاقدية أوضح، ومعالجة الخلافات، ومتابعة المطالبات، ودعم تنفيذ المشروعات. نعرض مؤشرات الإنجاز والخبرة العملية التفصيلية في صفحة من نحن وفق أعلى معايير الدقة والمهنية."
      image={heroBg}
      imageAlt="إنجازات مكتب سند الحسّان للمحاماة والاستشارات القانونية"
      highlights={ACHIEVEMENT_HIGHLIGHTS}
      linkLabel="المزيد من التفاصيل"
      linkTo="/aboutUs"
      backgroundClass="bg-brand-cream"
    />
  );
}
