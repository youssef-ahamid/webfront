"use client";

import { Button as NButton } from "@nextui-org/react";
import clsx from "clsx";
import { ComponentProps } from "react";
export default function Button({
  children,
  className,
  size = "lg",
  ...props
}: ComponentProps<typeof NButton>) {
  return (
    <NButton
      {...props}
      size={size}
      radius="sm"
      className={clsx(size === "lg" && "min-w-[327px] h-[56px]", className)}
    >
      <span>{children}</span>
    </NButton>
  );
}
