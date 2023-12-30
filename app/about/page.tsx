import { Hero, Page, Section, Timeline } from "@/components";
import { Owner, Speech } from "@/images";

const events = [
  {
    title: "timeline-1-title",
    year: "timeline-1-year",
    date: "timeline-1-date",
    description: "timeline-1-subtitle",
    image: Speech,
  },
  {
    title: "timeline-2-title",
    year: "timeline-2-year",
    date: "timeline-2-date",
    description: "timeline-2-subtitle",
    image: Speech,
  },
  {
    title: "timeline-3-title",
    year: "timeline-3-year",
    date: "timeline-3-date",
    description: "timeline-3-subtitle",
    image: Speech,
  },
  {
    title: "timeline-4-title",
    year: "timeline-4-year",
    date: "timeline-4-date",
    description: "timeline-4-subtitle",
    image: Speech,
  },
  {
    title: "timeline-5-title",
    year: "timeline-5-year",
    date: "timeline-5-date",
    description: "timeline-5-subtitle",
    image: Speech,
  },
  {
    title: "timeline-6-title",
    year: "timeline-6-year",
    date: "timeline-6-date",
    description: "timeline-6-subtitle",
    image: Speech,
  },
  {
    title: "timeline-7-title",
    year: "timeline-7-year",
    date: "timeline-7-date",
    description: "timeline-7-subtitle",
    image: Speech,
  },
  {
    title: "timeline-8-title",
    year: "timeline-8-year",
    date: "timeline-8-date",
    description: "timeline-8-subtitle",
    image: Speech,
  },
  {
    title: "timeline-9-title",
    year: "timeline-9-year",
    date: "timeline-9-date",
    description: "timeline-9-subtitle",
    image: Speech,
  },
  {
    title: "timeline-10-title",
    year: "timeline-10-year",
    date: "timeline-10-date",
    description: "timeline-10-subtitle",
    image: Speech,
  },
];

export default function About() {
  return (
    <Page>
      <Hero
        title="hero-title"
        subtitle="hero-subtitle"
        graphicUrl={Owner}
        color="success"
        titleContent="Driven by Vision: Ayman Shahin's Legacy in Egypt's FMCG Landscape"
        subtitleContent="Established in 1991 by the visionary Ayman Shahin, the Ayman Shahin Group stands today as a testament to entrepreneurial spirit and dedication in Egypt's fast-moving consumer goods (FMCG) sector. From its inception in Port Said, Ayman Shahin's dream was to not only introduce premium global brands to the Egyptian market but also to build a legacy of excellence and innovation."
      />
      <Section
        title="section-1-title"
        number="01"
        header="section-1-header"
        color="success"
        subtitle="section-1-subtitle"
        graphicUrl={Owner}
        subtitleContent={`Under Ayman Shahin's leadership, the group has flourished, becoming one of Egypt's foremost names in FMCG distribution and manufacturing. Our journey, spanning over three decades, is marked by the relentless pursuit of quality, growth, and consumer satisfaction. We've expanded our reach to include a diverse array of products and services, continually adapting to meet the evolving needs of our consumers.`}
      />
      <Timeline events={events} />
      <Section
        title="section-2-title"
        number="02"
        header="section-2-header"
        color="success"
        subtitle="section-2-subtitle"
        graphicUrl={Speech}
        subtitleContent={`Today, the Ayman Shahin Group encompasses a wide spectrum of activities, from importing and distributing renowned international brands to developing our own highly successful labels. We're committed to offering the Egyptian market a variety of unique products at competitive prices, ensuring consistent quality and taste. Our strategy has always been forward-thinking, focusing on operational excellence, market visibility, robust distribution plans, and continuous innovation.\n\nEmploying over 1,000 dedicated individuals and with significant investments in the industry, our group is not just a business entity; it's a driving force in Egypt's economy. As we look towards the future, Ayman Shahin's initial vision continues to guide us – we aim to strengthen our global presence, foster more international partnerships, and keep contributing positively to Egypt's economy while ensuring that we exceed consumer expectations with every product.`}
      />
    </Page>
  );
}
