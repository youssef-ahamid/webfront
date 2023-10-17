import {
  Badge,
  Box,
  CTA,
  OnEnter,
  Reveal,
  Navbar,
  Page,
  Section,
  Button,
  Hero,
  ParallaxText,
  Content,
} from "@/components";
import Anchor from "@/components/server/Anchor";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <Hero
        title="hp-hero-title"
        subtitle="hp-hero-subtitle"
        action={<Button contentId="hp-hero-cta" />}
        graphicUrl="https://placehold.co/600x400/EEE/31343C"
      />

      <Section
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        number="01"
        header="About"
        color="success"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        action={<Button>Get Started</Button>}
      />
      <div className="w-screen py-24 bg-default">
        <Page.PaddedContent>
          <div className="w-full h-px bg-background mb-1"></div>
          <Content
            contentId="hp-slider-subheader"
            size="caption/sm"
            className="text-background"
          />
        </Page.PaddedContent>

        <ParallaxText baseVelocity={-0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[120vw] h-24 bg-current opacity-5" />
            <Content
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-1"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[180vw] h-24 bg-current opacity-5" />
            <Content
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-2"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-0.23} className="text-background">
          <div className="flex items-end">
            <div className="w-[170vw] h-24 bg-current opacity-5" />
            <Content
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-3"
            />
          </div>
        </ParallaxText>

        <Page.PaddedContent>
          <img
            src="https://placehold.co/800x400/EEE/31343C"
            alt="Picture of the author"
            className="w-full max-w-2xl h-auto pt-16"
          />
        </Page.PaddedContent>
      </div>

      <Section
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        number="02"
        header="Our Business"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
        action={<Button>Get Started</Button>}
      />
    </Page>
  );
}
