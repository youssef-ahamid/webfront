import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

const paths = [
  "/business/distribution",
  "/business/export",
  "/business/manufacturing",
  "/careers",
  "/careers/[id]",
  "/careers/thank-you",
  "/contact",
  "/contact/thank-you",
  "/press",
  "/press/[slug]",
  "/",
] as const;

const url = (path: (typeof paths)[number]) =>
  `https://${siteConfig.domain}` + path;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: url(path),
    lastModified: new Date(),
    changeFrequency: "daily",
  }));
}
