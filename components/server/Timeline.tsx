import Image, { StaticImageData } from "next/image";
import { Badge, PaddedContent } from ".";
import { Appear, Content } from "../interactive";
import clsx from "clsx";

export type TimelineEvent = {
  title: string;
  year: string;
  date: string;
  description: string;
  image?: string | StaticImageData;
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  events = events.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  events = events.map((event, index) => {
    if (events.slice(0, index).find((e) => e.year === event.year)) {
      event.year = "";
    }
    return event;
  });
  return (
    <PaddedContent className="flex flex-col relative">
      {events.map((event, index) => (
        <div
          className={clsx(
            "w-full flex justify-center py-12 relative",
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          )}
          key={index}
        >
          <div
            className={clsx(
              "w-full md:max-w-[50%] flex flex-col space-y-2 px-12",
              index % 2 === 0 ? "items-end" : "items-start"
            )}
          >
            <Appear delay={0.1}>
              <Badge contentId={event.date} className="max-w-none" />
            </Appear>
            <div className="max-w-fit">
              <Appear delay={0.2}>
                <Content
                  size="header/sm"
                  contentId={event.title}
                  className="w-full"
                />
              </Appear>
              <Appear delay={0.3}>
                <Content contentId={event.description} className="w-full" />
              </Appear>
            </div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <Appear delay={0.4}>
              <div className="w-4 h-4 bg-default rounded-full relative">
                <div className="absolute w-4 h-4 bg-default rounded-full animate-ping"></div>
                <Content
                  size="header/md"
                  contentId={event.year}
                  className="absolute left-1/2 translate-x-8 -top-12"
                />
              </div>
            </Appear>
          </div>
          {event.image && (
            <div className="w-full md:max-w-[50%] px-12">
              <Appear delay={0.4}>
                <Image
                  src={event.image}
                  alt={event.title}
                  className="max-w-lg"
                />
              </Appear>
            </div>
          )}
        </div>
      ))}
      <div className="absolute left-1/2 top-10 bottom-0 overflow-hidden pb-32 border-l-2 border-default border-spacing-16  border-dashed">
        <div className="h-full w-1 -translate-x-[1.5px]"></div>
      </div>
    </PaddedContent>
  );
}
