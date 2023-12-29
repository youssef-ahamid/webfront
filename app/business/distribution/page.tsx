import { Page, Button, Hero, Reveal, Section, LogoCloud } from "@/components";

const features = [
  {
    title: "Swift and Reliable Distribution",
    description:
      "Our extensive distribution fleet, boasting over 250 vehicles, forms the backbone of our operations. This expansive network enables us to eliminate third-party involvement, guaranteeing efficient and on-time deliveries.",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    title: "State-of-the-Art Warehousing Facilities",
    description:
      "AAC takes pride in its cutting-edge warehousing infrastructure, With a vast storage capacity exceeding 16,000 square meters and accommodating 12,000 pallets, we ensure that products remain fresh and of the highest quality throughout their journey within our facilities.",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  {
    title: "Trade Marketing Excellence",
    description:
      "Renowned for our on-ground executions, We go beyond conventional distribution by actively contributing to the visibility and presence of our partners' products. Through vigilant monitoring, frequent in-store activities, and strategic trade marketing initiatives, our dedicated team ensures that your products not only reach the shelves but also command attention and preference among consumers.",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
];

export default function Distribution() {
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button contentId="hp-hero-cta" />}
        graphicUrl="https://placehold.co/600x400/EEE/31343C"
      />

      <Page.PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </Page.PaddedContent>

      {features.map(({ title, description, image }, i) => (
        <Section
          key={i}
          title={`feature-${i}-title`}
          titleContent={title}
          subtitle={`feature-${i}-description`}
          subtitleContent={description}
          graphicUrl={image}
          number={`0${i + 1}`}
          className="mb-16"
        />
      ))}

      <LogoCloud
        title="clients-title"
        titleContent="Trusted by the Best"
        items={Array.from({ length: 10 }, (_, i) => ({
          name: `${i}`,
          logo: "https://placehold.co/200x80/EEE/31343C",
        }))}
      />
    </Page>
  );
}
