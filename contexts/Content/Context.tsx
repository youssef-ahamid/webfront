import { createContext } from "react";

export type ContentCTX = {
  content?: Record<string, any>;
  edit: (id: string, value: string) => void;
  isEdited: boolean;
  publish: () => void;
};

const ContentContext = createContext<ContentCTX>({
  edit: () => {},
  publish: () => {},
  isEdited: false,
});

export default ContentContext;
