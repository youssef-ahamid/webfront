"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export const ImageWithFallback = (
  props: ImageProps & {
    fallbackSrc?: string;
  }
) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc || "/images/placeholder.png");
        if (!fallbackSrc || imgSrc === fallbackSrc) {
          setErrored(true);
        }
      }}
    />
  );
};
