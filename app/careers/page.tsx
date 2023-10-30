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
import { siteConfig } from "@/config/site";
import front from "@/utils/front";

export default async function Careers() {
  const postings = await front.JobPosting.getWhere("siteId", siteConfig.id);
  console.log(postings);

  return (
    <Page>
      <Hero
        title="careers-hero-title"
        subtitle="careers-hero-subtitle"
        color="warning"
        action={<Button contentId="careers-hero-cta" />}
        graphicUrl="https://placehold.co/600x400/EEE/31343C"
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
          <div className="flex items-end">
            <div className="w-[120vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-1"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[180vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-2"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-0.23} className="text-background">
          <div className="flex items-end">
            <div className="w-[170vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="text-7xl font-bold mx-8 text-current"
              contentId="hp-slider-text-3"
            />
          </div>
        </ParallaxText>

        <Page.PaddedContent>
          <Appear delay={0.6}>
            <img
              src="https://placehold.co/800x400/EEE/31343C"
              alt="Picture of the author"
              className="w-full max-w-2xl h-auto pt-16"
            />
          </Appear>
        </Page.PaddedContent>
      </div>
      {/* career list */}
    </Page>
  );
}
