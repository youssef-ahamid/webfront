"use client";

import { useInView } from "framer-motion";
import { useState, useEffect, ReactNode, useRef } from "react";

export default function Typewriter({
  delay = 0,
  duration = 0.8,
  children,
  ...props
}: {
  delay?: number;
  duration?: number;
  children?: ReactNode;
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const text = (children as string) || "";
  const length = text.length;
  const interval = duration / length;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!started && inView) {
      setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
    }
  }, [inView]);

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, interval * 1000);
    }
  }, [currentIndex, started]);

  return <span ref={ref}>{currentText}</span>;
}
