import { ReactNode } from "react";
import { Appear, Content } from "../interactive";
import Page from "./Page";
import Image, { StaticImageData } from "next/image";
import { PaddedContent } from ".";

export default function LogoCloud({
  items,
  title,
  titleContent,
}: {
  items: { name: string; logo: string | StaticImageData }[];
  title?: string;
  titleContent?: ReactNode;
}) {
  return (
    <div className="w-full py-16 bg-white">
      <PaddedContent>
        <Appear>
          <Content
            size="header/md"
            className="text-center pb-8"
            contentId={title}
          >
            {titleContent}
          </Content>
        </Appear>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
          {items.map((client, i) => (
            <Appear key={i} delay={i * 0.1}>
              <Image
                key={i}
                className="col-span-2 max-h-20 w-full object-contain justify-center mx-auto lg:col-span-1"
                src={client.logo}
                width={200}
                height={200}
                alt={client.name}
              />
            </Appear>
          ))}
        </div>
      </PaddedContent>
    </div>
  );
}
