"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";
import { GlobeProvider, useGlobe } from "./Markers";
import { Button, Content } from "@/components/interactive";
import clsx from "clsx";

const World = () => {
  return (
    <GlobeProvider>
      <BusinessGlobe />
      <MarkerPreview />
    </GlobeProvider>
  );
};

export const BusinessGlobe = () => {
  const globeEl = useRef<GlobeMethods>();

  const { markers, getMarker, focusedMarker, setLoaded, loaded } = useGlobe();

  const defaultFocus = { lat: 0, lng: 0, altitude: 2 };

  useEffect(() => {
    if (!globeEl.current) return;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.05;
    if (focusedMarker) {
      globeEl.current.controls().autoRotate = false;
      globeEl.current.controls().enableRotate = false;
    }
    globeEl.current.pointOfView(
      focusedMarker
        ? { lat: focusedMarker.lat, lng: focusedMarker.lng, altitude: 1.25 }
        : defaultFocus,
      4000
    );
  }, [focusedMarker]);

  if (typeof window === "undefined") return null;

  return (
    <Globe
      ref={globeEl}
      showGlobe
      htmlElementsData={markers}
      waitForGlobeReady
      htmlElement={getMarker}
      onGlobeReady={() => setLoaded(true)}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />
  );
};

export const MarkerPreview = () => {
  const { focusedMarker, setFocusedMarker } = useGlobe();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!focusedMarker) return;
    setHidden(true);
    setTimeout(() => setHidden(false), 5000);
  }, [focusedMarker]);

  return (
    <div
      className={clsx(
        "absolute left-1/2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 transition px-12",
        (!focusedMarker || hidden) && "opacity-0"
      )}
    >
      <Content
        onClick={() => setFocusedMarker()}
        size="caption/sm"
        color="white"
        className="cursor-pointer transition hover:opacity-80"
      >
        Back
      </Content>
      <Content
        size="header/lg"
        color="white"
        contentId={focusedMarker?.data.labelId}
      />
      <Content color="white" contentId={focusedMarker?.data.descriptionId} />
    </div>
  );
};
export default World;
