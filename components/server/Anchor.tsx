import { Content } from "@/components/server";
import { BaseColors, ThemeColors } from "@nextui-org/react";
import clsx from "clsx";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: keyof Omit<ThemeColors, keyof BaseColors>;
}

export default function Anchor({
  color = "primary",
  children,
  className,
  ...props
}: AnchorProps) {
  return (
    <a
      {...props}
      className={clsx(
        "relative overflow-visible group max-w-min px-1 py-3 cursor-pointer",
        className
      )}
    >
      <Content
        as="span"
        size="caption/md"
        className="whitespace-nowrap z-10 relative"
      >
        {children}
      </Content>

      <div
        className={`w-full absolute top-100 h-3 -translate-y-2.5 bg-${color}/20 z-0 group-hover:scale-x-100 scale-x-0 transition duration-300 ease-soft-spring origin-bottom-left`}
      ></div>
    </a>
  );
}

Anchor.Props = {} as AnchorProps;
