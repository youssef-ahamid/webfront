import { Hero, Page, Timeline } from "@/components";
import { Owner } from "@/images";

export default function About() {
  return (
    <Page>
      <Hero title="hero-title" subtitle="hero-subtitle" graphicUrl={Owner} />
      <Timeline
        events={[
          {
            title: "timeline-title",
            year: "timeline-year",
            date: "timeline-date",
            description: "timeline-description",
            image: Owner,
          },
          {
            title: "timeline-title",
            year: "timeline-year",
            date: "timeline-date",
            description: "timeline-description",
            image: Owner,
          },
          {
            title: "timeline-title",
            year: "timeline-2-year",
            date: "timeline-date",
            description: "timeline-description",
            image: Owner,
          },
          {
            title: "timeline-title",
            year: "timeline-year",
            date: "timeline-date",
            description: "timeline-description",
            image: Owner,
          },
          {
            title: "timeline-title",
            year: "timeline-year",
            date: "timeline-date",
            description: "timeline-description",
            image: Owner,
          },
        ]}
      />
    </Page>
  );
}
