"use client";

import { ComponentProps } from "react";
import { AnimationControls, TargetAndTransition, motion } from "framer-motion";
import clsx from "clsx";

export interface OnEnterProps extends ComponentProps<typeof motion.div> {}

export default function OnEnter({
  children,
  className,
  animate,
  ...props
}: OnEnterProps) {
  const whileInView = (animate as TargetAndTransition) ?? {};
  return (
    <div className={clsx("max-w-min", className)}>
      <motion.div
        {...props}
        whileInView={
          {
            ...whileInView,
            transition: {
              ...spring,
              ...whileInView?.transition,
            },
          } as any
        }
        viewport={{ once: true }}
        transition={spring}
      >
        {children}
      </motion.div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

OnEnter.Props = {} as OnEnterProps;
