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
import { Input } from "@nextui-org/react";
import Link from "next/link";

export default async function Contact() {
  return (
    <Page>
      <Hero
        title="contact-hero-title"
        subtitle="contact-hero-subtitle"
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

      <Section
        title="contact-form-title"
        header="contact-form-header"
        subtitle="contact-form-subtitle"
        form={ContactUsForm}
      />
    </Page>
  );
}

async function ContactUsForm() {
  const form = await front.Form.getOneWhere("siteId", siteConfig.id);
  async function submit(formData: FormData) {
    const response = await front.FormSubmission.create({
      formId: form.id,
      data: form.fields.map(({ id: fieldId }) => ({
        fieldId,
        response: formData.get(fieldId) as string,
      })),
    });
    console.log(response);
    // TODO: redirect
  }

  return (
    <form action={submit}>
      {form.fields.map(({ id, type, title, required }, i) => (
        <Input
          name={id}
          label={title}
          isRequired={required}
          type={type}
          key={i}
        />
      ))}
    </form>
  );
}
