import { MouseEvent, useEffect, useState } from "react";

export default function useMousePosition<Element = HTMLDivElement>() {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const mouseMoveHandler = ({ clientX, clientY }: MouseEvent<Element>) => {
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler as any);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler as any);
    };
  }, []);

  return mousePosition;
}
