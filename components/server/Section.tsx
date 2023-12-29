import { Button, Content } from "@/components/interactive";
import { Box, Page } from "@/components/server";
import { ThemeColors } from "@nextui-org/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { Appear, Reveal } from "../interactive";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: keyof ThemeColors;
  number?: string;
  header?: string;
  title?: string;
  titleContent?: ReactNode;
  subtitle?: string;
  subtitleContent?: ReactNode;
  action?: ReactNode;
  form?: ReactNode;
  graphicUrl?: string;
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
  form,
  graphicUrl,
  titleContent,
  subtitleContent,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={clsx(
        "relative group py-6 my-24 min-h-[75vh] w-full",
        className
      )}
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
            <Appear>
              <Content
                as="span"
                size="caption/md"
                className="text-gray-400 whitespace-nowrap"
              >
                {number}
              </Content>
            </Appear>
            {header && (
              <Appear delay={0.2}>
                <Content
                  as="h3"
                  size="caption/md"
                  className={clsx("max-w-2xl text-gray-700")}
                  contentId={header}
                />
              </Appear>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full">
            <div className="flex flex-col space-y-2">
              <Appear delay={0.5}>
                <Content
                  as="h2"
                  size="header/lg"
                  className={clsx("max-w-2xl")}
                  contentId={title}
                >
                  {titleContent}
                </Content>
              </Appear>
              {graphicUrl && subtitle && (
                <Appear delay={0.7}>
                  <Content
                    contentId={subtitle}
                    size="body/md"
                    className="max-w-[500px]"
                  >
                    {subtitleContent}
                  </Content>
                </Appear>
              )}
            </div>
            <div className="flex flex-col space-y-12 items-start pt-6">
              {!graphicUrl && subtitle && (
                <Appear delay={0.7}>
                  <Content
                    contentId={subtitle}
                    size="body/md"
                    className="max-w-[500px] text-justify"
                  />
                </Appear>
              )}
              {graphicUrl && (
                <Appear delay={0.7}>
                  <img
                    src={graphicUrl}
                    alt="Hero graphic"
                    className="w-full mx-auto my-8 md:my-0 md:pl-8 relative max-w-none"
                  />
                </Appear>
              )}
              {form && <Appear delay={0.7}>{form}</Appear>}
              <Appear delay={0.9}>{action}</Appear>
            </div>
          </div>
        </div>
        {children}
      </Page.PaddedContent>
    </section>
  );
}

Section.Props = {} as SectionProps;
