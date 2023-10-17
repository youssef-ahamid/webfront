import { createContext } from "react";

export type ContentCTX = {
  content?: Record<string, any>;
  edit: (id: string, value: string) => void;
  isEdited: boolean;
};

const ContentContext = createContext<ContentCTX>({
  edit: () => {},
  isEdited: false,
});

export default ContentContext;
