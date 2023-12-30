import { Button, Hero, Page, Section, Timeline } from "@/components";
import { Owner, Speech } from "@/images";

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
        subtitleContent={`Under Ayman Shahin's leadership, the group has flourished, becoming one of Egypt's foremost names in FMCG distribution and manufacturing. Our journey, spanning over three decades, is marked by the relentless pursuit of quality, growth, and consumer satisfaction. We've expanded our reach to include a diverse array of products and services, continually adapting to meet the evolving needs of our consumers.\n\nToday, the Ayman Shahin Group encompasses a wide spectrum of activities, from importing and distributing renowned international brands to developing our own highly successful labels. We're committed to offering the Egyptian market a variety of unique products at competitive prices, ensuring consistent quality and taste. Our strategy has always been forward-thinking, focusing on operational excellence, market visibility, robust distribution plans, and continuous innovation.`}
      />
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
      <Section
        title="section-2-title"
        number="02"
        header="section-2-header"
        color="success"
        subtitle="section-2-subtitle"
        graphicUrl={Speech}
        subtitleContent="Employing over 1,000 dedicated individuals and with significant investments in the industry, our group is not just a business entity; it's a driving force in Egypt's economy. As we look towards the future, Ayman Shahin's initial vision continues to guide us – we aim to strengthen our global presence, foster more international partnerships, and keep contributing positively to Egypt's economy while ensuring that we exceed consumer expectations with every product."
      />
    </Page>
  );
}
