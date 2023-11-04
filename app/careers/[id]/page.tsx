import { Page, Content } from "@/components";
import front from "@/utils/front";

export default async function Contact({ params }: { params: { id: string } }) {
  const job = await front.JobPosting.getOne(params.id);

  return (
    <Page cta={false}>
      <Content>{job.title}</Content>
    </Page>
  );
}
