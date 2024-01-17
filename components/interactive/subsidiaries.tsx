"use client";

import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { AymanAfandyLogo, FundayProducts } from "@/images";
import Content from "./Content";
import { ContentImage } from "@/content/components";
import Button from "./Button";
import Appear from "./Appear";
import { useUser } from "@/contexts";
import { cn } from "tailwind-variants";
import clsx from "clsx";

const links = [
  "/business/distribution",
  "/business/export",
  "/business/manufacturing",
  "/business/manufacturing",
  "/business/manufacturing",
];
export function Subsidiaries() {
  return (
    <div className="grid grid-cols-1 w-full gap-16 lg:gap-24 mx-auto">
      {links.map((link, i) => (
        <Appear key={i} delay={1}>
          <Subsidiary
            link={link}
            id={i + 1}
            direction={i % 2 === 0 ? "left" : "right"}
          />
        </Appear>
      ))}
    </div>
  );
}

function Subsidiary({ id, link, className, direction = "right" }: any) {
  const { user } = useUser();
  return (
    <div
      className={clsx(
        "flex w-full flex-col justify-between mx-auto",
        direction === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <Card
        isFooterBlurred
        isPressable
        onPress={() =>
          !user && typeof window !== "undefined" && window.open(link, "_self")
        }
        className={`w-full lg:w-[70vw] max-w-3xl h-[400px] shrink-0 relative ${className}`}
      >
        <CardHeader className="absolute z-10 justify-between top-0 pt-1 pb-24 bg-gradient-to-b from-white">
          <div className="flex flex-col items-start">
            <Content
              contentId={`subsidiary-${id}-preheader`}
              typewriter
              as="span"
              size="caption/sm"
              className="text-black/60 uppercase font-bold"
            />
            <Content
              as="h3"
              typewriter
              contentId={`subsidiary-${id}-title`}
              size="header/md"
              className="text-black/90 text-left font-bold"
            />
          </div>
          <Appear delay={0.2}>
            <ContentImage
              alt="Ayman Shahin Group Subsidiary"
              src="AymanAfandyLogo"
              className="rounded-lg h-16 w-[100px] p-1 bg-white object-contain"
              contentId={`subsidiary-${id}-logo`}
            />
          </Appear>
        </CardHeader>
        <ContentImage
          alt="Subsidiary Background"
          className="z-0 w-full h-full object-cover bg-white"
          src="https://nextui.org/images/card-example-5.jpeg"
          width={1600}
          height={1600}
          contentId={`subsidiary-${id}-background`}
        />
      </Card>
      <div
        className={`w-full max-w-lg pt-16 pb-8 px-4 ${
          direction === "right" ? "ltr:lg:pr-16 rtl:pl-16 lg:px-0" : "ltr:lg:pl-16 rtl:pr-16 lg:px-0"
        }`}
      >
        <Appear delay={0.7}>
          <Content
            contentId={`subsidiary-${id}-description`}
            size="body/md"
            typewriter
            typingDuration={2}
            className="max-w-[500px] text-justify"
          />
        </Appear>
      </div>
    </div>
  );
}
