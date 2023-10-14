import {
  IBM_Plex_Mono as FontMono,
  Poppins as FontSans,
} from "next/font/google";
import localFont from "next/font/local";
export const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const fontDisplay = localFont({
  src: "../public/fonts/MonumentExtended-Regular.otf",
});
