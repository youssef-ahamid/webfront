"use client";

import { useMouse } from "@/contexts";
import useMousePosition from "../../hooks/useMousePosition";
import clsx from "clsx";
import { ComponentProps } from "react";

function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useMouse();

  return (
    <div
      className={clsx(
        "hidden md:block w-8 h-8 rounded-full bg-default fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2",
        cursorType === "hovered" && "bg-transparent"
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

export const CursorHovered = ({ children }: ComponentProps<"div">) => {
  const { cursorChangeHandler } = useMouse();

  return (
    <div
      onMouseOver={() => cursorChangeHandler("hovered")}
      onMouseOut={() => cursorChangeHandler("")}
    >
      {children}
    </div>
  );
};

export default Cursor;
