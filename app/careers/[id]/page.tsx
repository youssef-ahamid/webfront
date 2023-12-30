import { JobApplicationForm } from "@/app/contact/form";
import { Page, Hero, Button, PaddedContent } from "@/components";
import front from "@/utils/front";
import { t } from "@/utils/t";
import Link from "next/link";
import Markdown from "react-markdown";

export default async function Contact({ params }: { params: { id: string } }) {
  const job = await front.JobPosting.getOne(params.id);

  return (
    <Page cta={false}>
      <Hero
        titleContent={job.title}
        subtitleContent={job.description}
        action={
          <Link href="#apply">
            <Button>{t('apply')}</Button>
          </Link>
        }
      />

      <PaddedContent>
        <Markdown className="w-full max-w-2xl mx-auto py-24 prose">
          {job.content}
        </Markdown>
      </PaddedContent>
      <JobApplicationForm {...job} />
    </Page>
  );
}
