import { cookies, headers } from "next/headers";
import { Lang } from "@/app/layout";
import { dictionary } from "./dictionary";

export const t = <T extends keyof (typeof dictionary.map)[Lang]>(key: T) => {
  const lang = (cookies().get("lang")?.value ||
    headers().get("front-lang") ||
    "en") as Lang;
  return dictionary.get(lang, key) as (typeof dictionary.map)[Lang][T];
};
