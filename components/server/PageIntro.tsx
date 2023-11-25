import clsx from "clsx";

import { Container } from "@/components/server/Container";
import { FadeIn } from "@/components/interactive/FadeIn";
import Content from "@/components/interactive/Content";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container
      className={clsx(
        "mt-24 sm:mt-32 lg:mt-40 w-full",
        centered && "text-center"
      )}
    >
      <FadeIn>
        <Content as="h1">
          <Content
          size="caption/sm"
            contentId={eyebrow}
            className="block text-neutral-950"
          />
          <span className="sr-only"> - </span>
          <Content
            size="header/lg"
            contentId={title}
            className={clsx(
              "mt-6 block max-w-5xl tracking-tight text-neutral-950 [text-wrap:balance]",
              centered && "mx-auto"
            )}
          />
        </Content>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
