"use server";

import { Lang } from "@/app/layout";
import { cookies, headers } from "next/headers";

export async function setLang(lang: Lang) {
  cookies().set("lang", lang);
}

export async function getLang() {
  return (cookies().get("lang")?.value ||
    headers().get("front-lang") ||
    "en") as Lang;
}
