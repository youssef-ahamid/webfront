"use client";

import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { AymanAfandyLogo, FundayProducts } from "@/images";
import Content from "./Content";
import { ContentImage } from "@/content/components";
import Button from "./Button";
import Appear from "./Appear";

const links = [
  "/business/distribution",
  "/business/export",
  "/business/manufacturing",
  "/business/manufacturing",
  "/business/manufacturing",
  "/business/manufacturing",
];
export function Subsidiaries() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
      {links.map((link, i) => (
        <Appear>
          <Subsidiary link={link} id={i + 1} />
        </Appear>
      ))}
    </div>
  );
}

function Subsidiary({ id, link }: any) {
  return (
    <Card isFooterBlurred className="w-full h-[300px] relative">
      <CardHeader className="absolute z-10 justify-between top-1">
        <div className="flex flex-col items-start">
          <Content
            contentId={`subsidiary-${id}-preheader`}
            typewriter
            as="span"
            className="text-tiny text-white/60 uppercase font-bold"
          />
          <Content
            as="h3"
            typewriter
            contentId={`subsidiary-${id}-title`}
            className="text-white/90 font-bold text-2xl"
          />
        </div>
        <Appear delay={0.2}>
          <ContentImage
            alt="Ayman Shahin Group Subsidiary"
            src="AymanAfandyLogo"
            className="rounded-lg w-32 h-auto bg-black object-contain"
            contentId={`subsidiary-${id}-logo`}
          />
        </Appear>
      </CardHeader>
      <ContentImage
        alt="Subsidiary Background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
        width={1200}
        height={1200}
        contentId={`subsidiary-${id}-background`}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center pr-6">
          <div className="flex flex-col">
            <Content
              typewriter
              typingDuration={1.5}
              contentId={`subsidiary-${id}-description`}
              className="text-base text-white/90 font-semibold"
            />
          </div>
        </div>
        <Button href={link} radius="full" size="sm" color="secondary">
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
