import {
  Page,
  Section,
  Button,
  Hero,
  Content,
  Appear,
  Reveal,
  PaddedContent,
} from "@/components";
import { siteConfig } from "@/config/site";
import front from "@/utils/front";
import Link from "next/link";
import { ContactUsForm } from "./form";


import { getSeoForPage } from "@/config/seo";
export const generateMetadata = getSeoForPage("/contact");

export default async function Contact() {
  const form = await front.Form.getOneWhere("siteId", siteConfig.id, {
    included: ["fields"],
  });

  return (
    <Page cta={false}>
      <Hero
        title="contact-hero-title"
        subtitle="contact-hero-subtitle"
        color="default"
        form={<ContactUsForm {...form} />}
      />

      <div className="w-screen py-24 bg-default">
        <PaddedContent>
          <Reveal
            direction="left-to-right"
            duration={1.4}
            className="max-w-none"
          >
            <div className="w-full h-px bg-background mb-1"></div>
          </Reveal>
          <Appear delay={0.6}>
            <Content
              contentId="contact-locations-subheader"
              size="caption/sm"
              className="text-background"
            />
          </Appear>
        </PaddedContent>

        <PaddedContent className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-auto pl-6 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Appear
              delay={0.8 + 0.1 * i}
              key={i}
            >
              <Content
                contentId={`contact-offices-${i}-title`}
                as="h3"
                className="border-l border-background pl-6 font-semibold text-background"
              />
              <address className="border-l border-background/20 pl-6 pt-2 not-italic text-background/80">
                <Content contentId={`contact-offices-${i}-street`} />
                <Content contentId={`contact-offices-${i}-city`} />
              </address>
            </Appear>
          ))}
        </PaddedContent>
      </div>
    </Page>
  );
}
