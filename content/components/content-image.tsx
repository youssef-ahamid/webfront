"use client";

import clsx from "clsx";
import { useContent, useUser } from "@/contexts";
import { useEffect, useMemo } from "react";
import Image from "next/image";

export type ContentImageProps<T extends "img" | typeof Image = typeof Image> = {
  as?: T;
  contentId?: string;
  textContent?: string;
} & React.ComponentProps<T>;

import * as images from "@/images";

export function ContentImage<T extends "img" | typeof Image = typeof Image>({
  as: Component = Image as any,
  className,
  contentId,
  children,
  contentEditable,
  color,
  textContent,
  ...props
}: ContentImageProps<T>) {
  const { user } = useUser();
  const { edit, content, openImageSelector } = useContent();
  const type = Component === "img" || Component === Image ? "image" : "text";

  const id = !contentId ? null : contentId;
  if (id) {
    contentEditable = !!user;
  }

  const src = useMemo(() => {
    if (type !== "image") return;
    if (id && (content as any)?.[id]) {
      if ((content as any)?.[id] in images)
        return images[(content as any)?.[id] as keyof typeof images] as any;
      return (content as any)?.[id];
    }
    if ("src" in props) {
      if ((props.src as any) in images)
        return images[props.src as keyof typeof images] as any;
      return props.src;
    }
  }, [id, props, type, content]);

  useEffect(() => {
    if (contentEditable && id && "src" in props && !content?.[id]) {
      edit(id, props.src as any);
    }
  }, [id, props]);

  return (
    <Component
      {...(props as any)}
      width={props.width ?? 800}
      height={props.height ?? 800}
      src={src}
      onClick={() => {
        if (!contentEditable || !id) return;
        openImageSelector(id);
      }}
      suppressContentEditableWarning
      style={{
        outline: "none",
        ...props.style,
      }}
      className={clsx(className, contentEditable && "cursor-pointer")}
      children={undefined}
    />
  );
}
