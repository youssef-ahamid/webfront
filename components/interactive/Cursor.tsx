"use client";

import { useMouse } from "@/contexts";
import useMousePosition from "../../hooks/useMousePosition";
import clsx from "clsx";
import { ComponentProps } from "react";
import { CursorType } from "@/contexts/Mouse/Context";

function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useMouse();

  return (
    <div
      className={clsx(
        "hidden md:block w-8 h-8 rounded-full bg-default fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2",
        cursorType === "hovered" && "scale-[35%]",
        cursorType === "selecting" && "scale-x-[10%] rounded-lg bg-current"
      )}
      style={{
        left: `${x || 0}px`,
        top: `${y || 0}px`,
        transitionDuration: "100ms",
        WebkitTransitionDuration: "100ms",
        MozTransitionDuration: "100ms",
        willChange: "width, height, transform, border",
        WebkitTransitionTimingFunction: "ease-out",
        MozTransitionTimingFunction: "ease-out",
        OTransitionTimingFunction: "ease-out",
        transitionTimingFunction: "ease-out",
      }}
    />
  );
}

const CursorState = ({
  children,
  type,
  ...props
}: ComponentProps<"div"> & { type: CursorType }) => {
  const { cursorChangeHandler } = useMouse();

  return (
    <div
      onMouseOver={() => cursorChangeHandler(type)}
      onMouseOut={() => cursorChangeHandler("")}
      {...props}
    >
      {children}
    </div>
  );
};

export const CursorHovered = (props: ComponentProps<"div">) => (
  <CursorState {...props} type="hovered" />
);

export const CursorSelecting = (props: ComponentProps<"div">) => (
  <CursorState {...props} type="selecting" />
);

export default Cursor;
