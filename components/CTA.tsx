import { Button, Content } from "@/components";
import clsx from "clsx";

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
    <div
      {...props}
      className={clsx(
        "w-full py-20 px-8 sm:px-14 relative group gradients-default rounded-[40px] shadow-2xl border border-gray-800/10 border-opacity-10 justify-start items-center gap-2.5 inline-flex",
        className
      )}
    >
      <div className="flex-col justify-center items-start gap-10 inline-flex">
        {children}
      </div>
    </div>
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
    <Button color="secondary" className={className} {...props}>
      {children}
    </Button>
  );
};

CTA.Props = {} as CTAProps;
