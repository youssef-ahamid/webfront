import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { getUser } from "@/auth";
import { cookies, headers } from "next/headers";
import { Analytics } from "@/northstar";
import front from "@/utils/front";
import { Page } from "@prisma/client";
import { getLang } from "@/actions/lang";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export type Lang = "en" | "ar";

async function getPage() {
  const path = headers().get("front-pathname") || "/";
  try {
    const page = await front.Page.methods.getOneBySlug(path);
    return page as any;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();
  const page = await getPage();
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
        <Providers themeProps={{ attribute: "class" }} user={user!} page={page}>
          <div className="relative flex flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
