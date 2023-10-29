import {
  Page,
  Section,
  Button,
  Hero,
  Content,
  Appear,
  Reveal,
} from "@/components";
import { siteConfig } from "@/config/site";
import front from "@/utils/front";
import Link from "next/link";
import { ContactUsForm } from "./form";

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
        action={
          <Link href="#form">
            <Button contentId="contact-hero-cta" />
          </Link>
        }
        graphicUrl="https://placehold.co/600x400/EEE/31343C"
      />

      <div className="w-screen py-24 bg-default">
        <Page.PaddedContent>
          <Reveal
            direction="left-to-right"
            duration={1.4}
            className="max-w-none"
          >
            <div className="w-full h-px bg-background mb-1"></div>
          </Reveal>
          <Appear delay={0.6}>
            <Content
              contentId="contact-slider-subheader"
              size="caption/sm"
              className="text-background"
            />
          </Appear>
        </Page.PaddedContent>

        {/* TODO: locations */}
      </div>

      <Section title="contact-form-title" form={<ContactUsForm {...form} />} />
    </Page>
  );
}
