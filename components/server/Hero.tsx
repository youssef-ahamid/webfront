import React, { ReactNode } from "react";
import Content from "./Content";
import { ThemeColors } from "@nextui-org/react";
import Page from "./Page";
import Box from "./Box";
import { Appear, Reveal } from "../interactive";

interface HeroProps {
  title: string;
  subtitle: string;
  action: ReactNode;
  graphicUrl: string;
  color?: keyof ThemeColors;
}

export default function Hero({
  title,
  subtitle,
  action,
  graphicUrl,
  color = "primary",
}: HeroProps) {
  return (
    <div className="relative w-full min-h-[90vh] pt-16">
      <Page.PaddedContent className="pb-24 mb-12 z-10 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 flex flex-col items-start space-y-12 md:pr-6">
            <Appear>
              <Content
                as="h1"
                size="header/xl"
                className="max-w-md"
                contentId={title}
              />
            </Appear>
            <Appear delay={0.2}>
              <Content
                size="body/lg"
                className="mb-6 max-w-xl"
                contentId={subtitle}
              />
            </Appear>
            <Appear delay={0.4}>{action}</Appear>
          </div>
          <div className="md:w-1/2 pt-24 md:pt-0">
            <img
              src={graphicUrl}
              alt="Hero graphic"
              className="w-full mx-auto my-8 md:my-0 md:pl-8 relative max-w-none"
            />
          </div>
        </div>
      </Page.PaddedContent>
      <div className="absolute right-0 md:top-0 w-full md:w-1/2 z-0">
        <Reveal
          direction="top-to-bottom"
          duration={0.8}
          delay={0.3}
          className="absolute xl:left-56 right-0 md:top-0 bottom-40"
        >
          <Box
            size="w-64 h-64 sm:w-80 sm:h-72 lg:w-[420px] lg:h-[360px]"
            className=""
            color={color}
            light
          />
        </Reveal>
        <Reveal
          direction="top-to-bottom"
          delay={0.2}
          className="absolute bottom-20 md:top-60 lg:top-72 left-0"
        >
          <Box
            size="w-80 h-56 sm:w-96 sm:h-96 md:h-80 lg:w-[420px] lg:h-[420px]"
            color={color}
          />
        </Reveal>
      </div>
    </div>
  );
}

Hero.Props = {} as HeroProps;
