import content from "@/content.json";
import { createContext } from "react";

export type ContentCTX = {
  content: typeof content;
  edit: (id: keyof typeof content, value: string) => void;
  isEdited: boolean;
};

const ContentContext = createContext<ContentCTX>({
  content,
  edit: () => {},
  isEdited: false,
});

export default ContentContext;
