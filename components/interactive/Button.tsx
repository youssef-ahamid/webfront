"use client";

import {
  ButtonProps as NButtonProps,
  Button as NButton,
} from "@nextui-org/react";
import clsx from "clsx";
import Content from "./Content";

export interface ButtonProps extends NButtonProps {
  contentId?: string;
}
export default function Button({
  children,
  className,
  size = "lg",
  contentId,
  ...props
}: ButtonProps) {
  return (
    <NButton
      {...props}
      size={size}
      radius="sm"
      className={clsx(`button-${size}`, className)}
    >
      <Content as="span" size={`button/${size}`} contentId={contentId}>
        {children}
      </Content>
    </NButton>
  );
}

Button.Props = {} as ButtonProps;
