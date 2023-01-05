import styled from "styled-components";
import { useRef } from "react";
import world from "../lib/world.json";
import { useIsDarkMode } from "../hooks/useIsDarkMode";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;
// const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const SpinningGlobe = () => {
  const isDarkMode = useIsDarkMode();
  const ref = useRef();

  return (
    <Container>
      <Globe
        //@ts-ignore
        showGlobe={false}
        backgroundColor={isDarkMode ? "#121212" : "#f1f1f1"}
        ref={ref}
        hexPolygonsData={world}
        hexPolygonMargin={0.7}
        onGlobeReady={() => {
          //@ts-ignore
          if (ref.current) ref.current.controls().autoRotate = true;
        }}
        showAtmosphere={true}
        atmosphereColor={isDarkMode ? "#3a228a" : "#444444"}
        atmosphereAltitude={0.25}
        // arcsData={travel}
        // arcDashLength={0.9}
        // arcDashGap={4}
        // arcDashAnimateTime={3000}
        // arcsTransitionDuration={1000}
        // arcStroke={"stroke"}
        // arcCircularResolution={64}
      />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
`;

export default SpinningGlobe;
