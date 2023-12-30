import React, { ReactNode } from "react";
import Content from "../interactive/Content";
import { ThemeColors } from "@nextui-org/react";
import Box from "./Box";
import { Appear, Reveal } from "../interactive";
import Image, { StaticImageData } from "next/image";
import { getLang } from "@/actions/lang";
import clsx from "clsx";
import { PaddedContent } from ".";

interface HeroProps {
  title?: string;
  titleContent?: ReactNode;
  subtitle?: string;
  subtitleContent?: ReactNode;
  action?: ReactNode;
  form?: ReactNode;
  graphicUrl?: string | StaticImageData;
  color?: keyof ThemeColors;
  boxes?: boolean;
  centered?: boolean;
}

export default async function Hero({
  title,
  subtitle,
  titleContent,
  subtitleContent,
  action,
  graphicUrl,
  form,
  color = "primary",
  boxes = true,
  centered = false,
}: HeroProps) {
  const lang = await getLang();
  return (
    <div className="relative w-full min-h-[90vh] pt-16">
      <PaddedContent className="pb-24 mb-12 z-10 relative">
        <div
          className={`container mx-auto flex flex-col ${
            centered
              ? "justify-center items-center pt-12"
              : "justify-between items-start md:flex-row"
          }`}
        >
          <div
            className={`${
              centered ? "text-center items-center" : "md:w-1/2 items-start"
            } flex flex-col space-y-12 md:pr-6`}
          >
            <Appear>
              <Content
                as="h1"
                size="header/xl"
                className="max-w-md"
                contentId={title}
              >
                {titleContent}
              </Content>
            </Appear>
            <Appear delay={0.2}>
              <Content
                size="body/lg"
                className="mb-6 max-w-xl"
                contentId={subtitle}
              >
                {subtitleContent}
              </Content>
            </Appear>
            <Appear delay={0.4} className="flex">
              {action}
            </Appear>
          </div>
          <div className={`w-full ${centered ? "" : "md:w-1/2"} pt-24 md:pt-0`}>
            <Appear delay={0.6}>
              {graphicUrl && (
                <Image
                  src={graphicUrl}
                  width={1080}
                  height={1080}
                  priority
                  placeholder="blur"
                  alt="Hero graphic"
                  className="w-full mx-auto my-8 md:my-0 md:pl-8 relative max-w-none"
                />
              )}
              {form}
            </Appear>
          </div>
        </div>
      </PaddedContent>
      {boxes && (
        <div
          className={clsx(
            "absolute md:top-0 w-full md:w-1/2 z-0",
            lang === "en" ? "right-0" : "left-0"
          )}
        >
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
      )}
    </div>
  );
}

Hero.Props = {} as HeroProps;
