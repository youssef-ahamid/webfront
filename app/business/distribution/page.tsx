import { Page, Button, Hero, Reveal, Section, LogoCloud, PaddedContent } from "@/components";
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
    image: "Certificate",
  },
  {
    title: "State-of-the-Art Warehousing Facilities",
    description:
      "AAC takes pride in its cutting-edge warehousing infrastructure, With a vast storage capacity exceeding 16,000 square meters and accommodating 12,000 pallets, we ensure that products remain fresh and of the highest quality throughout their journey within our facilities.",
    image: "MoussyAward",
  },
  {
    title: "Trade Marketing Excellence",
    description:
      "Renowned for our on-ground executions, We go beyond conventional distribution by actively contributing to the visibility and presence of our partners' products. Through vigilant monitoring, frequent in-store activities, and strategic trade marketing initiatives, our dedicated team ensures that your products not only reach the shelves but also command attention and preference among consumers.",
    image: "HariboAward",
  },
];

const clients = [
  "Zanetti",
  "Milka",
  "AlTahya",
  "BettyCrocker",
  "Bonny",
  "CaliforniaGarden",
  "Haribo",
  "Tchibe",
  "Rauch",
  "StDalfour",
  "SweetLife",
  "Tabasco",
  "Twinnings",
  "Pinar",
  "Mentos",
  "Mazola",
  "Moussy",
  "OldAmsterdam",
  "Papadopoulos",
  "PowerHorse",
  "Kikkoman",
  "Holsten",
  "CavendishAndHarvey",
  "Kavli",
  "Bahlsen",
  "Lotus",
  "Loacker",
  "Castania",
  "ChupaChups",
  "Davidoff",
  "Fisherman",
  "Funday",
  "Guylian",
  "Hersheys",
];


import { getSeoForPage } from "@/config/seo";
export const generateMetadata = getSeoForPage("/business/distribution");

export default function Distribution() {
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button contentId="hp-hero-cta" />}
        graphicUrl={"AymanAfandyLogo"}
      />

      <PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </PaddedContent>

      {features.map(({ title, description, image }, i) => (
        <Section
          key={i}
          title={`feature-${i}-title`}
          titleContent={title}
          subtitle={`feature-${i}-description`}
          subtitleContent={description}
          graphicUrl={image}
          graphicId={`feature-${i}-image`}
          number={`0${i + 1}`}
          className="mb-16"
        />
      ))}

      <LogoCloud
        title="clients-title"
        titleContent="Trusted by the Best"
        items={clients.map((name) => ({ name, logo: name }))}
      />
    </Page>
  );
}
