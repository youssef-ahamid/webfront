"use client";

import { Button as NButton } from "@nextui-org/react";
import clsx from "clsx";
import { ComponentProps } from "react";
import Content from "./Content";
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
      className={clsx(`button-${size}`, className)}
    >
      <Content as="span" size={`button/${size}`}>
        {children}
      </Content>
    </NButton>
  );
}
