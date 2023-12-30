import {
  Page,
  Section,
  Button,
  Hero,
  ParallaxText,
  Content,
  Appear,
  Reveal,
  Badge,
  PaddedContent,
} from "@/components";
import { siteConfig } from "@/config/site";
import { Speech } from "@/images";
import front from "@/utils/front";
import Link from "next/link";

export default async function Careers() {
  const postings = await front.JobPosting.getWhere("siteId", siteConfig.id);

  const byDepartment = postings.reduce((acc, posting) => {
    if (!acc[posting.department]) {
      acc[posting.department] = [];
    }
    acc[posting.department].push(posting);
    return acc;
  }, {} as Record<string, typeof postings>);

  return (
    <Page>
      <Hero
        title="hero-title"
        subtitle="hero-subtitle"
        color="warning"
        action={
          <Link href="#jobs-list">
            <Button contentId="hero-cta" />
          </Link>
        }
        graphicUrl={Speech}
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
              contentId="slider-subheader"
              size="caption/sm"
              className="text-background"
            />
          </Appear>
        </PaddedContent>

        <ParallaxText baseVelocity={-0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="slider-text-1"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={0.13} className="text-background">
          <div className="flex items-end">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="slider-text-2"
            />
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-0.23} className="text-background">
          <div className="flex items-end">
            <div className="w-[80vw] h-24 bg-current opacity-5" />
            <Content
              size=""
              className="whitespace-nowrap shrink-0 text-4xl sm:text-7xl font-bold mx-8 text-current"
              contentId="slider-text-3"
            />
          </div>
        </ParallaxText>
      </div>
      <PaddedContent className="w-full flex flex-col items-center space-y-8 py-20">
        <Content contentId="jobs-list-header" as="h2" size="header/md" />

        {Object.entries(byDepartment).map(([department, postings]) => (
          <div className="w-full py-8 flex flex-col space-y-6" key={department}>
            <Content key={department} size="header/sm" as="h3">
              {department}
            </Content>
            <div className="w-full">
              {postings.map((posting) => (
                <a
                  href={`/careers/${posting.id}`}
                  className="w-full py-4 flex justify-between group relative"
                  key={posting.id}
                >
                  <div className="flex flex-col space-y-2">
                    <Badge color="primary">{posting.location}</Badge>
                    <Content size="subheader/lg" className="px-1">
                      {posting.title}
                    </Content>
                  </div>
                  {/* TODO: Arrow */}

                  <div className="absolute bottom-0 inset-x-0 w-full h-px bg-default-200" />
                  <div className="absolute bottom-0 inset-x-0 w-full h-px transition duration-250 ease-out origin-left scale-x-0 bg-default group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </PaddedContent>
    </Page>
  );
}
