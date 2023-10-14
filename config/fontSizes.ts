import { fontDisplay, fontMono } from "./fonts";

export const fontSizes = {
  "header/xl": `text-4xl font-bold ${fontDisplay.className}`,
  "header/lg": `text-3xl font-bold ${fontDisplay.className}`,
  "header/md": `text-2xl font-bold ${fontDisplay.className}`,
  "header/sm": `text-xl font-bold ${fontDisplay.className}`,
  "header/xs": `text-lg font-bold ${fontDisplay.className}`,
  "subheader/xl": "text-xl font-bold",
  "subheader/lg": "text-lg font-bold",
  "subheader/md": "text-base font-bold",
  "subheader/sm": "text-sm font-bold",
  "subheader/xs": "text-xs font-bold",
  "body/xl": "text-xl",
  "body/lg": "text-lg",
  "body/md": "text-base",
  "body/sm": "text-sm",
  "body/xs": "text-xs",
  "caption/xl": `text-lg ${fontMono.className} uppercase font-bold`,
  "caption/lg": `text-base ${fontMono.className} uppercase`,
  "caption/md": `text-sm ${fontMono.className} uppercase`,
  "caption/sm": `text-xs ${fontMono.className} uppercase`,
  "button/lg": "text-lg capitalize",
  "button/md": "text-base capitalize",
  "button/sm": "text-sm capitalize",
} as const;

export type FontSize = keyof typeof fontSizes;
