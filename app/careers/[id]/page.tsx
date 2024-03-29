import { JobApplicationForm } from "@/app/contact/form";
import { Page, Hero, Button, PaddedContent } from "@/components";
import { LD } from "@/components/server/LD";
import { JobPostingLD, getSeoForJobPosting } from "@/config/seo";
import front from "@/utils/front";
import { t } from "@/utils/t";
import Link from "next/link";
import Markdown from "react-markdown";

export const generateMetadata = getSeoForJobPosting();

export default async function Contact({ params }: { params: { id: string } }) {
  const job = await front.JobPosting.getOne(params.id);

  return (
    <>
      <LD {...JobPostingLD(job)} />
      <Page cta={false}>
        <Hero
          titleContent={job.title}
          subtitleContent={job.description}
          action={<Button href="#apply"> {t("apply")}</Button>}
        />

        <PaddedContent>
          <Markdown className="w-full max-w-2xl mx-auto py-24 prose">
            {job.content}
          </Markdown>
        </PaddedContent>
        <JobApplicationForm {...job} />
      </Page>
    </>
  );
}
