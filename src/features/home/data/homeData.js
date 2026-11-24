import {
  Building2,
  Compass,
  HardHat,
  Landmark,
  Layers,
} from "lucide-react";
import {
  blogConstruction,
  blogContract,
  blogGavel,
} from "../../../assets/assets";

export const HOME_SERVICES_PREVIEW = [
  {
    id: "commercial-litigation",
    title: "المنازعات التجارية والترافع",
    image: blogGavel,
    to: "/services#commercial",
  },
  {
    id: "construction-projects",
    title: "الخدمات القانونية لقطاع المقاولات والمشروعات",
    image: blogConstruction,
    to: "/services#development",
  },
  {
    id: "contracts-consultations",
    title: "العقود والاستشارات القانونية",
    image: blogContract,
    to: "/services#contracts",
  },
];

export const HOME_CLIENTS = [
  {
    id: "aks",
    name: "شركة عكس",
    logo: null,
    icon: Compass,
  },
  {
    id: "binaa",
    name: "بناء للمقاولات",
    logo: null,
    icon: HardHat,
  },
  {
    id: "ofoq",
    name: "أفق العقارية",
    logo: null,
    icon: Building2,
  },
  {
    id: "rowad",
    name: "رواد للاستثمار",
    logo: null,
    icon: Landmark,
  },
  {
    id: "madar",
    name: "مدار للأعمال",
    logo: null,
    icon: Layers,
  },
];
