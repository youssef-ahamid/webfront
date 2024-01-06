"use client";

import { Lang } from "@/app/layout";
import { setLang } from "@/actions/lang";
import clsx from "clsx";

export default function LangActions({ lang }: { lang: Lang }) {
  const setMyLang = async (lang: Lang) => {
    await setLang(lang);
  };
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setMyLang("en")}
        className={clsx(lang === "en" && "font-bold", "relative")}
      >
        <p className="text-sm font-mono mx-2 relative z-10">EN</p>
        <div
          className={`w-full absolute top-100 h-1 -translate-y-2.5 bg-warning-100 z-0 group-hover:scale-x-100 ${
            lang !== "en" && "scale-x-0"
          } transition duration-300 ease-soft-spring origin-bottom-left`}
        ></div>
      </button>
      <button
        onClick={() => setMyLang("ar")}
        className={clsx(lang === "ar" && "font-bold", "relative")}
      >
        <p className="text-sm font-mono mx-2 relative z-10">عربي</p>
        <div
          className={`w-full absolute top-100 h-1 -translate-y-2.5 bg-danger-100 z-0 group-hover:scale-x-100 ${
            lang !== "ar" && "scale-x-0"
          } transition duration-300 ease-soft-spring origin-bottom-left`}
        ></div>
      </button>
    </div>
  );
}
