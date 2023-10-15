import { Content } from "@/components/server";
import { BaseColors, ThemeColors } from "@nextui-org/react";
import clsx from "clsx";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: keyof ThemeColors | keyof BaseColors;
  active?: boolean;
  autoActivate?: boolean;
  label?: string;
  contentId?: ContentKey;
}
import { headers } from "next/headers";
import { CursorHovered } from "../interactive/Cursor";
import { ContentKey } from "./Content";

export default function Anchor({
  color = "primary",
  active = false,
  label,
  children = label,
  contentId,
  className,
  autoActivate = false,
  ...props
}: AnchorProps) {
  const headersList = Object.fromEntries(headers().entries());
  const path = headersList["next-url"] || headersList["x-invoke-path"];

  active = active || (autoActivate && path === props.href);
  return (
    <CursorHovered>
      <a
        {...props}
        className={clsx(
          "relative overflow-visible group max-w-min px-1 py-3 cursor-none",
          className
        )}
      >
        <Content
          as="span"
          size="caption/md"
          className="whitespace-nowrap z-10 relative"
          contentId={contentId}
        >
          {children}
        </Content>

        <div
          className={`w-full absolute top-100 h-3 -translate-y-2.5 bg-${color}-100 z-0 group-hover:scale-x-100 ${
            !active && "scale-x-0"
          } transition duration-300 ease-soft-spring origin-bottom-left`}
        ></div>
      </a>
    </CursorHovered>
  );
}

const colors = "bg-primary-100 bg-warning-100 bg-success-100 bg-danger-100 bg-default-100";

Anchor.Props = {} as AnchorProps;
