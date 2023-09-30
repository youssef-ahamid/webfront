export const fontSizes = {
  "header/xl": "text-4xl font-bold",
  "header/lg": "text-3xl font-bold",
  "header/md": "text-2xl font-bold",
  "header/sm": "text-xl font-bold",
  "header/xs": "text-lg font-bold",
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
  "caption/xl": "text-lg font-mono uppercase font-bold",
  "caption/lg": "text-base font-mono uppercase",
  "caption/md": "text-sm font-mono uppercase",
  "caption/sm": "text-xs font-mono uppercase",
  "button/lg": "text-lg capitalize",
  "button/md": "text-base capitalize",
  "button/sm": "text-sm capitalize",
} as const;

export type FontSize = keyof typeof fontSizes;