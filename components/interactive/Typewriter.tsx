"use client";

import { useState, useEffect, ReactNode } from "react";

export default function Typewriter({
  delay = 50,
  children,
  ...props
}: {
  delay?: number;
  children?: ReactNode;
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = (children as string) || "";
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return currentText;
}
