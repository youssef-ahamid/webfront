"use client";

import { Lang } from "@/app/layout";
import { createContext } from "react";

export type ContentCTX = {
  content?: Record<string, any>;
  lang: Lang;
  edit: (id: string, value: string) => void;
  isEdited: boolean;
  publish: () => void;
  openImageSelector: (id: string) => void;
  previewedImage: string | null;
};

const ContentContext = createContext<ContentCTX>({
  edit: () => {},
  publish: () => {},
  openImageSelector: () => {},
  isEdited: false,
  lang: "en",
  previewedImage: null,
});

export default ContentContext;
