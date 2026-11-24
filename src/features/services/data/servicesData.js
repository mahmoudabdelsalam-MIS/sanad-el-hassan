import {
  Building2,
  FilePenLine,
  Gavel,
  Handshake,
  Home,
  Landmark,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Users,
  UsersRound,
} from "lucide-react";

export const INDIVIDUAL_SERVICES = [
  {
    id: "consultations",
    icon: Scale,
    title: "الاستشارات القانونية",
    description: "رأي قانوني موثوق وحلول عملية لمختلف المسائل القانونية.",
  },
  {
    id: "financial",
    icon: Shield,
    title: "المطالبات المالية",
    description: "تحصيل الحقوق والمطالبات المالية أمام الجهات المختصة.",
  },
  {
    id: "contracts",
    icon: FilePenLine,
    title: "العقود والاتفاقيات",
    description: "إعداد ومراجعة وصياغة مختلف أنواع العقود.",
  },
  {
    id: "real-estate",
    icon: Home,
    title: "القضايا العقارية",
    description: "المنازعات العقارية، الإخلاء، وتسجيل الملكية.",
  },
  {
    id: "family",
    icon: Users,
    title: "قضايا الأحوال الشخصية",
    description: "الطلاق، النفقة، الحضانة، الزيارة، والإرث.",
  },
  {
    id: "criminal",
    icon: ShieldAlert,
    title: "القضايا الجنائية",
    description: "الدفاع والتمثيل في القضايا الجنائية.",
  },
];

export const CORPORATE_SERVICES = [
  {
    id: "incorporation",
    icon: Building2,
    title: "تأسيس الشركات",
    description: "تأسيس وتعديل الكيانات التجارية وصياغة عقود الشركاء.",
  },
  {
    id: "commercial",
    icon: Gavel,
    title: "المنازعات التجارية",
    description: "تمثيل الشركات في المنازعات التجارية والتحكيم.",
  },
  {
    id: "development",
    icon: Landmark,
    title: "العقار والتطوير",
    description: "الاستشارات والمنازعات العقارية ومشاريع التطوير والاستثمار.",
  },
  {
    id: "labor",
    icon: UsersRound,
    title: "العمل ونظام العمل",
    description: "إعداد اللوائح العمالية وحل المنازعات العمالية.",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "الامتثال والحوكمة",
    description: "بناء سياسات الحوكمة والامتثال للأنظمة واللوائح.",
  },
  {
    id: "restructuring",
    icon: Handshake,
    title: "التصفية وإعادة الهيكلة",
    description: "خدمات التصفية والاندماج وإعادة هيكلة الأعمال.",
  },
];
