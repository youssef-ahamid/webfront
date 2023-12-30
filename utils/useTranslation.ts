"use client";
import { useContent } from "@/contexts/Content";
import { DictionaryKey, dictionary } from "./dictionary";

export const useTranslation = () => {
  const { lang } = useContent();

  return <T extends DictionaryKey>(key: T) =>
    dictionary.get(lang, key) as (typeof dictionary.map)[typeof lang][T];
};
