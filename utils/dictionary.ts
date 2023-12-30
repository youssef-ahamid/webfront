import { Lang } from "@/app/layout";
import dict from "@/dictionary.json";

export type DictionaryKey = keyof typeof dict[Lang];

class Dictionary<M extends Record<Lang, Record<string, string>>> {
  constructor(public map: M) {}

  public get<L extends Lang, T extends keyof (typeof this.map)[L]>(
    lang: L,
    key: T
  ): (typeof this.map)[L][T] {
    return this.map[lang][key];
  }
}

export const dictionary = new Dictionary(dict);
