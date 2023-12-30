import { Lang } from "@/app/layout";
import { createContext } from "react";

export type ContentCTX = {
  content?: Record<string, any>;
  lang: Lang;
  edit: (id: string, value: string) => void;
  isEdited: boolean;
  publish: () => void;
};

const ContentContext = createContext<ContentCTX>({
  edit: () => {},
  publish: () => {},
  isEdited: false,
  lang: "en",
});

export default ContentContext;
