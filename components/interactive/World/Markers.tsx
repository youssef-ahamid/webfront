import { ComponentProps, createContext, useContext, useState } from "react";

const MARKER_SIZE = 8;
const MARKER_FILL_COLOR = "#fff";
const MARKER_FILL_OPACITY = 0.7;

const MARKER_SVG = `<svg viewBox="0 0 24 24" class="relative overflow-visible">
    <circle
        cx="14"
        cy="14"
        r="${MARKER_SIZE}"
        fill="${MARKER_FILL_COLOR}"
        fill-opacity="${MARKER_FILL_OPACITY}"
        class="animate-ping absolute -top-8 -left-8 origin-center"
    />

    <circle
        cx="14"
        cy="14"
        r="${MARKER_SIZE}"
        fill="${MARKER_FILL_COLOR}"
        fill-opacity="${MARKER_FILL_OPACITY}"
        class="relative"
    />
</svg>`;

const N = 30;
const markers = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  data: { labelId: "marker-" + Math.random().toFixed(3), descriptionId: "marker-description-" + Math.random().toFixed(3) },
}));
type Marker = {
  lat: number;
  lng: number;
  data: any;
};

export const GlobeContext = createContext<{
  focusedMarker?: Marker;
  setFocusedMarker: (marker?: Marker) => void;
  markers: Marker[];
  getMarker: (marker: Marker) => HTMLElement;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}>({
  focusedMarker: undefined,
  setFocusedMarker: () => {},
  markers,
  getMarker: () => document.createElement("div"),
  loaded: false,
  setLoaded: () => {},
});

export const useGlobe = () => useContext(GlobeContext);

export const GlobeProvider = ({ children }: ComponentProps<"div">) => {
  const [focusedMarker, setFocusedMarker] = useState<Marker>();
  const [loaded, setLoaded] = useState(false);

  const getMarker = (marker: Marker) => {
    const el = document.createElement("div");
    el.innerHTML = MARKER_SVG;
    el.style.width = `${MARKER_SIZE}px`;
    el.style.height = `${MARKER_SIZE}px`;
    el.style["pointer-events"] = "auto";
    el.style.cursor = "pointer";
    el.onclick = () => {
      setFocusedMarker(marker);
    };
    return el;
  };

  return (
    <GlobeContext.Provider
      value={{
        focusedMarker,
        setFocusedMarker,
        markers,
        getMarker,
        loaded,
        setLoaded,
      }}
    >
      {children}
    </GlobeContext.Provider>
  );
};
