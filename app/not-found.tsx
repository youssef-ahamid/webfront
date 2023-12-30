import { Button } from "@/components/interactive";
import Hero from "@/components/server/Hero";
import Page from "@/components/server/Page";
import { t } from "@/utils/t";

export default function Error404() {
  return (
    <Page cta={false}>
      <Hero
        titleContent={t("pageNotFound")}
        subtitleContent={t("pageNotFoundDescription")}
        boxes={false}
        centered
        action={
          <div className="flex flex-row space-x-2">
            <Button href="/" as="a">
              {t("backToHome")}
            </Button>
          </div>
        }
      />
    </Page>
  );
}
