import { Page, Button, Hero } from "@/components";
import Link from "next/link";

import { getSeoForPage } from "@/config/seo";
import { t } from "@/utils/t";
export const generateMetadata = getSeoForPage("/contact/thank-you");

export default async function Contact() {
  return (
    <Page cta={false}>
      <Hero
        title="thankyou-hero-title"
        subtitle="thankyou-hero-subtitle"
        boxes={false}
        centered
        action={
          <div className="flex flex-row space-x-2">
            <Link href="/">
              <Button>{t("backToHome")}</Button>
            </Link>
            <Link href="/contact">
              <Button color="secondary">{t("readTheBlog")}</Button>
            </Link>
          </div>
        }
      />
    </Page>
  );
}
