import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { getUser } from "@/auth";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = getUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "h-full min-h-screen bg-background font-sans antialiased ayman-shahin text-foreground",
          fontSans.className
        )}
      >
        <Providers themeProps={{ attribute: "class" }} user={user!}>
          <div className="relative flex flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
