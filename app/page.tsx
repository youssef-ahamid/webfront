import {
  Page,
  Section,
  Button,
  Hero,
  ParallaxText,
  Content,
  Appear,
  Reveal,
} from "@/components";

export default function Home() {
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
      <Section
        title="hp-section-1-title"
        number="01"
        header="hp-section-1-header"
        color="success"
        subtitle="hp-section-1-subtitle"
        action={<Button contentId="hp-section-1-cta" />}
      />
      <div className="w-screen py-24 bg-default">
        <Page.PaddedContent>
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
        </Page.PaddedContent>

        <ParallaxText baseVelocity={-0.13} className="text-background">
          <div className="flex items-end translate-x-8">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-5xl font-bold mx-8 text-current"
              contentId="hp-slider-text-1"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-5xl font-bold mx-8 text-current"
              contentId="hp-slider-text-2"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-0.23} className="text-background">
          <div className="flex items-end">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-5xl font-bold mx-8 text-current"
              contentId="hp-slider-text-3"
            />
          </div>
        </ParallaxText>

        {/* <Page.PaddedContent>
          <Appear delay={0.6}>
            <img
              src="https://placehold.co/800x400/EEE/31343C"
              alt="Picture of the author"
              className="w-full max-w-2xl h-auto pt-16"
            />
          </Appear>
        </Page.PaddedContent> */}
      </div>

      <Section
        title="hp-section-2-title"
        number="02"
        header="hp-section-2-header"
        subtitle="hp-section-2-subtitle"
        action={<Button contentId="hp-section-2-cta" />}
      />
    </Page>
  );
}
