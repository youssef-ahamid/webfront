"use client";

import { FontSize, fontSizes } from "@/config/fontSizes";
import clsx from "clsx";
import { useContent, useUser } from "@/contexts";
import { useEffect } from "react";
import Typewriter from "./Typewriter";
export interface ContentProps
  extends React.HTMLAttributes<
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLQuoteElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "q";
  typewriter?: boolean;
  typingDelay?: number;
  typingDuration?: number;
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
  typewriter,
  typingDelay,
  typingDuration,
  textContent,
  ...props
}: ContentProps) {
  const { user } = useUser();
  const { edit, baseContent, lang } = useContent();

  const id = !contentId ? null : contentId + (lang === "en" ? "" : `@${lang}`);
  contentEditable = !!user && !!id;

  if (id) children = (baseContent as any)?.[id] || children || id;
  useEffect(() => {
    if (contentEditable && id && !baseContent?.[id] && children) {
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
      {typewriter && !contentEditable ? (
        <Typewriter delay={typingDelay} duration={typingDuration}>
          {children}
        </Typewriter>
      ) : (
        children
      )}
    </Component>
  );
}

Content.Props = {} as ContentProps;
