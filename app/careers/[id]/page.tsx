import { JobApplicationForm } from "@/app/contact/form";
import { Page, Hero, Button } from "@/components";
import front from "@/utils/front";
import Link from "next/link";
import Markdown from "react-markdown";

export default async function Contact({ params }: { params: { id: string } }) {
  const job = await front.JobPosting.getOne(params.id);

  return (
    <Page cta={false}>
      <Hero
        title={job.title}
        subtitle={job.description}
        action={
          <Link href="#apply">
            <Button>Apply now</Button>
          </Link>
        }
      />

      <Page.PaddedContent>
        <Markdown className="w-full max-w-2xl mx-auto py-24 prose">
          {job.content}
        </Markdown>
      </Page.PaddedContent>
      <JobApplicationForm {...job} />
    </Page>
  );
}
