import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { getUser } from "@/auth";
import { Analytics } from "@/northstar";
import { getLang } from "@/actions/lang";
import { baseSeo } from "@/config/seo";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  ...baseSeo,
};

export type Lang = "en" | "ar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();
  const user = getUser();
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head />
      <Analytics />
      <body
        className={clsx(
          "h-full min-h-screen bg-background font-sans antialiased ayman-shahin text-foreground",
          fontSans.className
        )}
      >
        <Providers
          themeProps={{ attribute: "class" }}
          user={user!}
          lang={lang}
        >
          <div className="relative flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
