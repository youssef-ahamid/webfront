import { ComponentProps, useState } from "react";
import MouseContext, { CursorType } from "./Context";

export default function MouseContextProvider({
  children,
}: ComponentProps<"div">) {
  const [cursorType, setCursorType] = useState<CursorType>("");

  const cursorChangeHandler = (cursorType: CursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
}
