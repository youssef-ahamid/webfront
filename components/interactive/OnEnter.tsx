"use client";

import { ComponentProps, useRef } from "react";
import { useInView, motion } from "framer-motion";

export interface OnEnterProps extends ComponentProps<typeof motion.div> {}

export default function OnEnter({ children, animate, ...props }: OnEnterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="relative max-w-min">
      <motion.div {...props} animate={isInView ? animate : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

OnEnter.Props = {} as OnEnterProps;
