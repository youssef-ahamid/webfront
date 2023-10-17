import clsx from "clsx";
import OnEnter, { OnEnterProps } from "./OnEnter";

export interface OnEnterAppearProps extends OnEnterProps {
  delay?: number;
  duration?: number;
  startingX?: number;
  startingY?: number;
  fade?: boolean;
}

export default function Appear({
  children,
  delay = 0,
  duration = 0.8,
  startingX = 0,
  startingY = -20,
  fade = true,
  ...props
}: OnEnterAppearProps) {
  return (
    <OnEnter
      {...props}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay, duration },
      }}
      initial={{
        opacity: fade ? 0 : 1,
        x: startingX,
        y: startingY,
      }}
      className={clsx("max-w-none", props.className)}
    >
      {children}
    </OnEnter>
  );
}

Appear.Props = {} as OnEnterAppearProps;
