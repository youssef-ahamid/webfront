"use client";

import { FontSize, fontSizes } from "@/config/fontSizes";
import clsx from "clsx";
import { useContent, useUser } from "@/contexts";
export interface ContentProps
  extends React.HTMLAttributes<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLQuoteElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "q";
  size?: FontSize | ""
  contentId?: string;
}

export default function Content({
  as: Component = "p",
  size = "body/md",
  className,
  contentId,
  children,
  contentEditable,
  ...props
}: ContentProps) {
  const { user } = useUser();
  const { edit, content } = useContent();
  if (contentId) {
    children = (content as any)[contentId] || "Edit me!";
    contentEditable = !!user;
  }
  return (
    <Component
      {...props}
      className={clsx(size && fontSizes[size], className)}
      contentEditable={contentEditable}
      onInput={(e) => {
        if (contentId) {
          edit(contentId, e.currentTarget.textContent!);
        }
      }}
    >
      {children}
    </Component>
  );
}

Content.Props = {} as ContentProps;
