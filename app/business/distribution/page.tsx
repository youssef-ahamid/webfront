import { Page, Button, Hero, Reveal, Section, LogoCloud } from "@/components";
import {
  AlTahya,
  AymanAfandyLogo,
  Bahlsen,
  BettyCrocker,
  Bonny,
  CaliforniaGarden,
  Castania,
  CavendishAndHarvey,
  Certificate,
  ChupaChups,
  Davidoff,
  Fisherman,
  Funday,
  Guylian,
  Haribo,
  HariboAward,
  Hersheys,
  Holsten,
  Kavli,
  Kellogs,
  Kikkoman,
  Loacker,
  Lotus,
  Mazola,
  Mentos,
  Milka,
  Moussy,
  MoussyAward,
  OldAmsterdam,
  Papadopoulos,
  Pinar,
  PowerHorse,
  Rauch,
  StDalfour,
  SweetLife,
  Tabasco,
  Tchibe,
  Twinnings,
  Zanetti,
} from "@/images";

const features = [
  {
    title: "Swift and Reliable Distribution",
    description:
      "Our extensive distribution fleet, boasting over 250 vehicles, forms the backbone of our operations. This expansive network enables us to eliminate third-party involvement, guaranteeing efficient and on-time deliveries.",
    image: Certificate,
  },
  {
    title: "State-of-the-Art Warehousing Facilities",
    description:
      "AAC takes pride in its cutting-edge warehousing infrastructure, With a vast storage capacity exceeding 16,000 square meters and accommodating 12,000 pallets, we ensure that products remain fresh and of the highest quality throughout their journey within our facilities.",
    image: MoussyAward,
  },
  {
    title: "Trade Marketing Excellence",
    description:
      "Renowned for our on-ground executions, We go beyond conventional distribution by actively contributing to the visibility and presence of our partners' products. Through vigilant monitoring, frequent in-store activities, and strategic trade marketing initiatives, our dedicated team ensures that your products not only reach the shelves but also command attention and preference among consumers.",
    image: HariboAward,
  },
];

const clients = [
  { name: "Zanetti", logo: Zanetti },
  { name: "Milka", logo: Milka },
  { name: "AlTahya", logo: AlTahya },
  { name: "BettyCrocker", logo: BettyCrocker },
  { name: "Bonny", logo: Bonny },
  { name: "CaliforniaGarden", logo: CaliforniaGarden },
  { name: "Haribo", logo: Haribo },
  { name: "Tchibe", logo: Tchibe },
  { name: "Rauch", logo: Rauch },
  { name: "StDalfour", logo: StDalfour },
  { name: "SweetLife", logo: SweetLife },
  { name: "Tabasco", logo: Tabasco },
  { name: "Twinnings", logo: Twinnings },
  { name: "Pinar", logo: Pinar },
  { name: "Mentos", logo: Mentos },
  { name: "Mazola", logo: Mazola },
  { name: "Moussy", logo: Moussy },
  { name: "OldAmsterdam", logo: OldAmsterdam },
  { name: "Papadopoulos", logo: Papadopoulos },
  { name: "PowerHorse", logo: PowerHorse },
  { name: "Kikkoman", logo: Kikkoman },
  { name: "Holsten", logo: Holsten },
  { name: "CavendishAndHarvey", logo: CavendishAndHarvey },
  { name: "Kavli", logo: Kavli },
  { name: "Bahlsen", logo: Bahlsen },
  { name: "Kellogs", logo: Kellogs },
  { name: "Lotus", logo: Lotus },
  { name: "Loacker", logo: Loacker },
  { name: "Castania", logo: Castania },
  { name: "ChupaChups", logo: ChupaChups },
  { name: "Davidoff", logo: Davidoff },
  { name: "Fisherman", logo: Fisherman },
  { name: "Funday", logo: Funday },
  { name: "Guylian", logo: Guylian },
  { name: "Hersheys", logo: Hersheys },
];

export default function Distribution() {
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button contentId="hp-hero-cta" />}
        graphicUrl={AymanAfandyLogo}
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
        items={clients}
      />
    </Page>
  );
}
