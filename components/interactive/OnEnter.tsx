"use client";

import { ComponentProps, useRef } from "react";
import { useInView, motion } from "framer-motion";
import clsx from "clsx";

export interface OnEnterProps extends ComponentProps<typeof motion.div> {}

export default function OnEnter({ children, className, animate, ...props }: OnEnterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={clsx("max-w-min", className)}>
      <motion.div {...props} animate={isInView ? animate : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

OnEnter.Props = {} as OnEnterProps;
