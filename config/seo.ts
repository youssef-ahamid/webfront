import front from "@/utils/front";
import { Metadata } from "next";

export const baseSeo: Metadata = {
  applicationName: "Ayman Shahin Group Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ASG",
    "Ayman Shahin Group",
    "Ayman Shahin",
    "FMCG",
    "Ayman Afandy Group",
    "Ayman Afandy",
    "Ayman Afandy Group",
    "Ayman Afandy LLC",
    "Ayman Afandy For Export",
    "Ayman Afandy Duty-Free",
    "Ayman Afandy Duty Free",
    "Ayman Afandy DutyFree",
    "Egypt",
    "Egyptian",
    "Egyptian FMCG",
    "Egyptian FMCG Company",
    "Ayman A",
  ],
  authors: [
    { name: "Memoized Tech House", url: "https://memoized.tech" },
    { name: "Youssef Abdelhamid", url: "https://github.com/youssef-ahamid" },
  ],
  creator: "Youssef Abdelhamid",
  publisher: "Ayman Shahin Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "?lang=en",
      ar: "?lang=ar",
    },
  },
  openGraph: {
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
