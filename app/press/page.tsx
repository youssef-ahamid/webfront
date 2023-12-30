import { Content, Hero, PaddedContent, Page } from "@/components";
import { Blogs } from "@/components/server/Blogs";
import { PageIntro } from "@/components/server/PageIntro";
import { Suspense } from "react";

export default async function Press() {
  return (
    <Page>
      <PaddedContent>
        <Hero color="danger" title="hero-title" subtitle="hero-subtitle" />

        <Suspense>
          <Blogs />
        </Suspense>
      </PaddedContent>
    </Page>
  );
}
