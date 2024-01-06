import { Page, Button, Hero } from "@/components";
import Link from "next/link";

import { getSeoForPage } from "@/config/seo";
import { t } from "@/utils/t";
export const generateMetadata = getSeoForPage("/careers/thank-you");

export default async function Contact() {
  return (
    <Page cta={false}>
      <Hero
        title="job-thankyou-hero-title"
        subtitle="job-thankyou-hero-subtitle"
        boxes={false}
        centered
        action={
          <div className="flex flex-row space-x-2">
            <Button href="/">{t("backToHome")}</Button>
            <Button href="/contact" color="secondary">
              {t("readTheBlog")}
            </Button>
          </div>
        }
      />
    </Page>
  );
}
