import OnEnter, { OnEnterProps } from "./OnEnter";

export interface OnEnterRevealProps extends OnEnterProps {
  delay?: number;
  duration?: number;
  direction?:
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top";
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "left-to-right",
  ...props
}: OnEnterRevealProps) {
  const originX = direction === "left-to-right" ? 0 : 1;
  const originY = direction === "top-to-bottom" ? 0 : 1;
  const scaleX =
    direction === "left-to-right" || direction === "right-to-left" ? 0 : 1;
  const scaleY =
    direction === "top-to-bottom" || direction === "bottom-to-top" ? 0 : 1;

  return (
    <OnEnter
      {...props}
      animate={{
        scaleX: 1,
        scaleY: 1,
        originX,
        originY,
        transition: { delay, duration },
      }}
      initial={{
        scaleX,
        scaleY,
        originX,
        originY,
      }}
    >
      {children}
    </OnEnter>
  );
}

Reveal.Props = {} as OnEnterRevealProps;
