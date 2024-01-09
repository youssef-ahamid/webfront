"use client";

import { FontSize, fontSizes } from "@/config/fontSizes";
import clsx from "clsx";
import { useContent, useUser } from "@/contexts";
import { useEffect } from "react";
export interface ContentProps
  extends React.HTMLAttributes<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLQuoteElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "q";
  size?: FontSize | "";
  contentId?: string;
  textContent?: string;
}

export default function Content({
  as: Component = "p",
  size = "body/md",
  className,
  contentId,
  children,
  contentEditable,
  color,
  textContent,
  ...props
}: ContentProps) {
  const { user } = useUser();
  const { edit, content, lang } = useContent();

  const id = !contentId ? null : contentId + (lang === "en" ? "" : `@${lang}`);
  contentEditable = !!user && !!id;

  useEffect(() => {
    if (id) children = (content as any)?.[id] || children || id;

    if (contentEditable && id && !content?.[id] && children) {
      if (textContent) {
        edit(id, textContent);
      } else if (typeof children === "string") {
        edit(id, children);
      }
    }
  }, [id]);

  return (
    <Component
      {...props}
      suppressContentEditableWarning
      style={{
        outline: "none",
        ...props.style,
      }}
      className={clsx(
        size && fontSizes[size],
        className,
        contentEditable && "focus-within:underline",
        "whitespace-pre-line"
      )}
      contentEditable={contentEditable}
      onKeyDown={(e) => e.stopPropagation()}
      onInput={(e) => {
        if (id) {
          edit(id, e.currentTarget.innerText!);
        }
      }}
    >
      {children}
    </Component>
  );
}

Content.Props = {} as ContentProps;
