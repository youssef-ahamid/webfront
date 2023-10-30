import { Page, Button, Hero } from "@/components";
import Link from "next/link";

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
            <Link href="/">
              <Button>Back to home</Button>
            </Link>
            <Link href="/contact">
              <Button color="secondary">Read the blog</Button>
            </Link>
          </div>
        }
      />
    </Page>
  );
}
