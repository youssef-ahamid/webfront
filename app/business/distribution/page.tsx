import {
  Page,
  Button,
  Hero,
  Reveal,
  Section,
  LogoCloud,
  PaddedContent,
} from "@/components";
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
        action={<Button href="/contact" contentId="hp-hero-cta" />}
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

      <Section
        key={1}
        title={`feature-0-title`}
        titleContent={features[0].title}
        subtitle={`feature-0-description`}
        subtitleContent={features[0].description}
        graphicUrl={features[0].image}
        graphicId={`feature-0-image`}
        number={`01`}
        className="mb-16"
      />
      <LogoCloud
        title="clients-title"
        titleContent="Trusted by the Best"
        items={clients.map((name) => ({ name, logo: name }))}
      />
      <Section
        key={2}
        title={`feature-1-title`}
        titleContent={features[1].title}
        subtitle={`feature-1-description`}
        subtitleContent={features[1].description}
        graphicUrl={features[1].image}
        graphicId={`feature-1-image`}
        number={`02`}
        
      />
       <PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 -mt-16" />
        </Reveal>
      </PaddedContent>
      <Section
        key={3}
        className="mt-0 mb-0"
        color="default"
        title={`feature-2-title`}
        titleContent={features[2].title}
        subtitle={`feature-2-description`}
        subtitleContent={features[2].description}
        graphicUrl={features[2].image}
        graphicId={`feature-2-image`}
        number={`03`}
      />
    </Page>
  );
}
