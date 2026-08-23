import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import world from "../../lib/world.json";
import { useThemeState } from "../../providers/Theme.provider";
let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

// document.documentElement.clientWidth/clientHeight, not
// window.innerWidth/innerHeight: the canvas needs the CSS viewport size,
// and clientWidth stays correct across zoom/scrollbar/device-emulation
// cases where innerWidth can drift.
const useViewportSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
};

// Same accent as the Hero gradient text / var(--gradient-design-start) —
// three.js materials need real color values, not CSS custom properties, so
// the hex is duplicated here. Good contrast on both a near-black and a
// near-white background, so it's used as-is in both themes.
const ACCENT_START = "#030cfa";
// The gradient's other end has to differ by theme: cyan (var(--gradient-
// design-stop)) glows on the dark background but all but disappears on the
// light one, so light mode fades to a saturated violet instead.
const ACCENT_STOP_DARK = "#01f1ff";
const ACCENT_STOP_LIGHT = "#7209b7";

const hexToRgb = (hex: string) => {
  const v = parseInt(hex.slice(1), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
};

const lerpColor = (a: string, b: string, t: number) => {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${bl})`;
};

// Colors each hex by latitude, fading between the two brand accent colors
// from pole to equator instead of the default flat yellow tint.
const hexPolygonColor = (accentStop: string) => (feature: unknown) => {
  const bbox = (feature as { bbox?: [number, number, number, number] }).bbox;
  if (!bbox) return accentStop;
  const avgLat = (bbox[1] + bbox[3]) / 2;
  const t = Math.min(1, Math.max(0, (avgLat + 60) / 145));
  return lerpColor(ACCENT_START, accentStop, t);
};

interface GeoPoint {
  lat: number;
  lng: number;
}

// Real business location — the one hub always shown on the globe.
const PARIS: GeoPoint = { lat: 48.8566, lng: 2.3522 };

const ACCENT_STOP_DARK_RGB = hexToRgb(ACCENT_STOP_DARK).join(", ");
const ACCENT_STOP_LIGHT_RGB = hexToRgb(ACCENT_STOP_LIGHT).join(", ");
const ACCENT_START_RGB = hexToRgb(ACCENT_START).join(", ");
const ringColor =
  (rgb: string) => () => (t: number) => `rgba(${rgb}, ${1 - t})`;
const visitorRingColor = ringColor(ACCENT_START_RGB);

const DESKTOP_STAGE_HEIGHT = 760;

const SpinningGlobe = () => {
  const { isDarkMode } = useThemeState();
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const size = useViewportSize();
  const [visitor, setVisitor] = useState<GeoPoint | null>(null);
  // On desktop the stage grows (flex: 1) to fill whatever room is left
  // above the footer, so the canvas needs to track its own real rendered
  // height instead of a fixed constant.
  const [stageHeight, setStageHeight] = useState(DESKTOP_STAGE_HEIGHT);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) setStageHeight(h);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Best-effort, decorative only: approximate the visitor's location from
  // their IP via a free lookup so we can plot a second point + arc to
  // Paris. Never blocks or errors the page if it's unavailable.
  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const lat = Number(data?.latitude);
        const lng = Number(data?.longitude);
        if (Number.isFinite(lat) && Number.isFinite(lng)) {
          setVisitor({ lat, lng });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const isMobile = size.width > 0 && size.width <= 768;
  const points = visitor ? [PARIS, visitor] : [PARIS];
  const arcs = visitor ? [{ start: PARIS, end: visitor }] : [];
  const accentStop = isDarkMode ? ACCENT_STOP_DARK : ACCENT_STOP_LIGHT;
  const accentStopRgb = isDarkMode ? ACCENT_STOP_DARK_RGB : ACCENT_STOP_LIGHT_RGB;
  const parisRingColor = ringColor(accentStopRgb);

  return (
    <Container ref={wrapperRef}>
      <Globe
        //@ts-ignore
        showGlobe={false}
        width={size.width}
        height={isMobile ? 0.92 * size.height : stageHeight}
        backgroundColor={isDarkMode ? "#121212" : "#f1f1f1"}
        ref={ref}
        hexPolygonsData={world}
        hexPolygonMargin={0.55}
        hexPolygonColor={hexPolygonColor(accentStop)}
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: unknown) =>
          d === visitor ? ACCENT_START : accentStop
        }
        pointAltitude={0.01}
        pointRadius={0.35}
        ringsData={points}
        ringLat="lat"
        ringLng="lng"
        ringAltitude={0.01}
        ringColor={(d: unknown) =>
          d === visitor ? visitorRingColor() : parisRingColor()
        }
        ringMaxRadius={2.5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1600}
        arcsData={arcs}
        //@ts-ignore
        arcStartLat={(d) => d.start.lat}
        //@ts-ignore
        arcStartLng={(d) => d.start.lng}
        //@ts-ignore
        arcEndLat={(d) => d.end.lat}
        //@ts-ignore
        arcEndLng={(d) => d.end.lng}
        arcColor={() => [accentStop, ACCENT_START]}
        arcAltitudeAutoScale={0.3}
        arcStroke={0.5}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2500}
        onGlobeReady={() => {
          if (ref.current) {
            // Frame the globe close from the very first paint instead of
            // whatever distance the library defaults to — otherwise it
            // reads as tiny until the visitor zooms in themselves. Altitude
            // slightly higher than the tightest framing so the globe's top
            // edge stays clear of the title sitting above it. Mobile needs
            // a taller altitude than desktop for the same clearance: the
            // canvas there is a narrow, very tall column (0.92 * viewport
            // height) sitting right below the title, so the same apparent
            // globe size reaches much higher relative to that title.
            // Camera latitude is set north of Paris rather than right on
            // it, so the initial view looks down and onto the city instead
            // of centering it dead-on — Paris lands in the lower half of
            // the globe, a more natural first frame than straight overhead.
            //@ts-ignore
            ref.current.pointOfView(
              {
                lat: PARIS.lat + 22,
                lng: PARIS.lng,
                altitude: isMobile ? 2.4 : 1.6,
              },
              0
            );
            //@ts-ignore
            ref.current.controls().autoRotate = true;
            //@ts-ignore
            ref.current.controls().minDistance = 200;
            //@ts-ignore
            ref.current.controls().maxDistance = 500;
            //@ts-ignore
            ref.current.controls().minPolarAngle = Math.PI / 3.5;
            //@ts-ignore
            ref.current.controls().maxPolarAngle = Math.PI - Math.PI / 3;
          }
        }}
        // The glow reads as an intentional halo on the near-black dark
        // background; on the near-white light one it just adds another
        // layer of pale wash instead of a visible effect, so it's dropped
        // there rather than tuned down.
        showAtmosphere={isDarkMode}
        atmosphereColor={accentStop}
        atmosphereAltitude={0.1}
      />
    </Container>
  );
};

const Container = styled.div`
  /* Full-bleed: spans the whole contact section top (behind the title) to
     bottom (flush with the footer), and breaks out of the page's side
     margins to reach the viewport edges — independent of whatever margin
     the parent Container actually uses. */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: auto;
  width: 100vw;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    position: absolute;
    top: auto;
    bottom: auto;
    left: 0;
    right: 0;
    width: auto;
    transform: none;
    display: block;
    overflow: visible;
  }
`;

export default SpinningGlobe;
