import { createContext } from "react";

export type CursorType = "" | "hovered" | "locked" | "selecting"

const MouseContext = createContext<{
  cursorType: CursorType;
  cursorChangeHandler: (cursorType: CursorType) => void;
}>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

export default MouseContext;
