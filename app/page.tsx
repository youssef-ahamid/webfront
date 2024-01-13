import { getLang } from "@/actions/lang";
import {
  Page,
  Section,
  Button,
  Hero,
  ParallaxText,
  Content,
  Appear,
  Reveal,
  PaddedContent,
  LogoCloud,
} from "@/components";
import {
  ASELogo,
  AstraLogo,
  AymanAfandyLogo,
  Funday,
  FundayProducts,
  Spring,
} from "@/images";
import { t } from "@/utils/t";
import clsx from "clsx";
import Image from "next/image";

import { getSeoForPage } from "@/config/seo";
import { ContentImage } from "@/content/components";
import { Subsidiaries } from "@/components/interactive/subsidiaries";
export const generateMetadata = getSeoForPage("/");

const clients = [
  "Zanetti",
  "Milka",
  "AlTahya",
  "BettyCrocker",
  "Bonny",
  "CaliforniaGarden",
];

const companies = [
  {
    name: "Ayman Afandy LLC",
    image: "AymanAfandyLogo",
    link: "/distribution",
    description:
      "A distribution powerhouse with 350 vehicles that facilitate the seamless flow of products across 30,000 Points Of Sale",
  },
  {
    name: "Ayman Afandy For Export",
    image: "ASELogo",
    link: "/export",
    description:
      "Paves the way for the group's global influence by taking locally manufactured products to international markets",
  },
  {
    name: "Ayman Afandy Duty-Free",
    image: "FundayProducts",
    link: "/manufacturing",
    description:
      "A specialized force, enhances the travel retail experience with a portfolio of renowned products.",
  },
];

const factories = [
  {
    name: "Spring",
    logo: "Spring",
    description:
      "Our beverage factory, where diverse flavors come to life, capturing the very essence of quality and taste.",
  },
  {
    name: "Port Said",
    logo: "Funday",
    description:
      "The hub of packaging innovation, where we create an array of packed popcorn bags, cakes, and other confectionery wonders. Our expertise extends to providing white-label products for esteemed companies.",
  },
  {
    name: "Astra",
    logo: "AstraLogo",
    description:
      "Celebrating the art of confectionery, we specialize in crafting lollipops adorned with intricate, handmade designs. We add an artistic touch to your product portfolio.",
  },
];

export default async function Home() {
  const lang = await getLang();
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button href="/contact" contentId="hp-hero-cta" />}
        graphicUrl="Owner"
        graphicId="hero-graphic"
        alternateColor
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

      <LogoCloud
        title="clients-title"
        titleContent="Trusted by the Best"
        items={clients.map((name) => ({ name, logo: name }))}
      />

      <Section
        title="hp-section-1-title"
        number="01"
        header="hp-section-1-header"
        color="success"
        subtitle="hp-section-1-subtitle"
        action={<Button href="/about" contentId="hp-section-1-cta" />}
      />
      <div className="w-screen py-24 bg-default">
        <PaddedContent>
          <Reveal
            direction="left-to-right"
            duration={1.4}
            className="max-w-none"
          >
            <div className="w-full h-px bg-background mb-1"></div>
          </Reveal>
          <Appear delay={0.6}>
            <Content
              contentId="hp-slider-subheader"
              size="caption/sm"
              className="text-background"
            />
          </Appear>
        </PaddedContent>

        <ParallaxText baseVelocity={-0.13} className="text-background">
          <div className="flex items-end translate-x-8 min-w-screen">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-1"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={0.13} className="text-background">
          <div className="flex items-end min-w-screen">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-2"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-0.23} className="text-background">
          <div className="flex items-end min-w-screen">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-3"
            />
          </div>
        </ParallaxText>

        {/* <PaddedContent>
          <Appear delay={0.6}>
            <img
              src="https://placehold.co/800x400/EEE/31343C"
              alt="Picture of the author"
              className="w-full max-w-2xl h-auto pt-16"
            />
          </Appear>
        </PaddedContent> */}
      </div>

      <Section
        title="hp-section-2-title"
        number="02"
        header="hp-section-2-header"
        subtitle="hp-section-2-subtitle"
        action={
          <Button href="/business/manufacturing" contentId="hp-section-2-cta" />
        }
      />

      <PaddedContent>
        <Appear delay={0.6} className="mb-16">
          <Content
            contentId="hp-section-3-header"
            size="header/lg"
            className="text-center"
          >
            Our Companies & Factories
          </Content>
        </Appear>

        <Subsidiaries />
      </PaddedContent>
    </Page>
  );
}
