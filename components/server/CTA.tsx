import { PaddedContent, Page } from "@/components/server";
import clsx from "clsx";
import { Appear, Button, Content } from "../interactive";

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  action?: typeof Button.Props;
}

export default function CTA({
  children,
  className,
  action,
  ...props
}: CTAProps) {
  return (
    <Appear duration={1} className="w-screen" startingY={100}>
      <PaddedContent className="min-h-[70vh] flex items-center">
        <div
          {...props}
          className={clsx(
            "w-full py-20 px-8 sm:px-14 max-h-min relative group gradients-default rounded-[40px] shadow-2xl border border-gray-800/10 border-opacity-10 justify-start items-center gap-2.5 inline-flex",
            className
          )}
        >
          <div className="flex-col justify-center items-start gap-10 inline-flex">
            {children}
          </div>
        </div>
      </PaddedContent>
    </Appear>
  );
}

CTA.Title = function CTA({
  children,
  className,
  ...props
}: typeof Content.Props) {
  return (
    <Content
      as="h2"
      size="header/xl"
      className={clsx("max-w-2xl text-background", className)}
      {...props}
    >
      {children}
    </Content>
  );
};

CTA.Action = function CTA({
  children,
  className,
  ...props
}: typeof Button.Props) {
  return (
    <Appear delay={0.5}>
      <Button color="secondary" className={className} {...props}>
        {children}
      </Button>
    </Appear>
  );
};

CTA.Props = {} as CTAProps;
