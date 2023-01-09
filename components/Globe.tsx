import styled from "styled-components";
import { useRef } from "react";
import world from "../lib/world.json";
import { useWindowSize } from "../hooks/useWindowSize";
import { useThemeState } from "../providers/Theme.provider";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const SpinningGlobe = () => {
  const { isDarkMode } = useThemeState();
  const ref = useRef();
  const size = useWindowSize();

  return (
    <Container>
      <Globe
        //@ts-ignore
        showGlobe={false}
        width={size.width}
        height={size.height}
        backgroundColor={isDarkMode ? "#121212" : "#f1f1f1"}
        ref={ref}
        hexPolygonsData={world}
        hexPolygonMargin={0.7}
        //        hexPolygonColor={() => (!isDarkMode ? "#FFF" : "#3a228a")}
        onGlobeReady={() => {
          if (ref.current) {
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
        showAtmosphere={true}
        atmosphereColor={!isDarkMode ? "#3a228a" : "#000000"}
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
