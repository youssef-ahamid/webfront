import { ConfigThemes } from "@nextui-org/react";

export const themes: ConfigThemes = {
  "ayman-shahin": {
    extend: "light",
    colors: {
      background: "#FBF9ED",
      foreground: "#292F36",
      default: {
        DEFAULT: "#292F36",
        foreground: "#FBF9ED",
        100: "#292F362a"
      },
      primary: {
        100: "#E7F3FC",
        500: "#1973C2",
        DEFAULT: "#1973C2",
        600: "#003858",
      },
      secondary: {
        DEFAULT: "#FBF9ED",
        foreground: "#292F36",
      },
      warning: {
        500: "#EB7A3D",
        DEFAULT: "#EB7A3D",
        600: "#CF5108",
      },
      success: {
        50: "#F6FEF9",
        100: "#E1EEDA",
        500: "#0FA969",
        DEFAULT: "#0FA969",
        700: "#067647",
        foreground: "#fff",
      },
      danger: {
        50: "#FFF1F0",
        100: "#FFB8B2",
        500: "#CC3D33",
        DEFAULT: "#CC3D33",
        600: "#AD342B",
      },
    },
    layout: {},
  },
};
