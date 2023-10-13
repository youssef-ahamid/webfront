import { Box, Button, Content, Page } from "@/components/server";
import { ThemeColors } from "@nextui-org/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { Reveal } from "../interactive";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: keyof ThemeColors;
  number?: string;
  header?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export default function Section({
  children,
  className,
  color = "primary",
  number,
  header,
  title,
  subtitle,
  action,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={clsx("relative group py-6 min-h-[75vh] w-full", className)}
    >
      <div className="flex items-end absolute z-0 -mt-12">
        <Reveal direction="top-to-bottom" duration={0.7}>
          <Box size="h-[70vh] min-w-[144px] w-[20vw]" color={color} light />
        </Reveal>
        <Reveal direction="left-to-right" delay={0.5}>
          <Box
            size="h-32 w-32 sm:h-48 sm:w-48"
            color={color}
            className="-mb-8"
          />
        </Reveal>
      </div>
      <Page.PaddedContent className="relative z-10 py-6">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col max-w-fit">
            <Reveal direction="left-to-right" delay={0.4} duration={0.3}>
              <div className={`w-24 h-3 mb-2 bg-${color}`} />
            </Reveal>
            <Content
              as="span"
              size="caption/md"
              className="text-gray-400 whitespace-nowrap"
            >
              {number}
            </Content>
            <Content
              as="h3"
              size="caption/md"
              className={clsx("max-w-2xl text-gray-700")}
              {...props}
            >
              {header}
            </Content>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full">
            <Content
              as="h2"
              size="header/lg"
              className={clsx("max-w-2xl")}
              {...props}
            >
              {title}
            </Content>
            <div className="flex flex-col space-y-12 items-start pt-6">
              {subtitle && (
                <Content size="body/md" className="max-w-[300px] text-justify">
                  {subtitle}
                </Content>
              )}
              {action}
            </div>
          </div>
        </div>
        {children}
      </Page.PaddedContent>
    </section>
  );
}

Section.Props = {} as SectionProps;
