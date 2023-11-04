import { JobApplicationForm } from "@/app/contact/form";
import { Page, Content, Hero, Button } from "@/components";
import front from "@/utils/front";
import Link from "next/link";

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
        <div
          id="job-content"
          className="w-full max-w-2xl mx-auto py-24 prose"
          dangerouslySetInnerHTML={{ __html: job.content || "" }}
        ></div>
      </Page.PaddedContent>
      <JobApplicationForm {...job} />
    </Page>
  );
}
