//import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
import NoSsr from "../NoSsr";
import world from "../../lib/world.json";
import travel from "../../lib/globeArcs.json";
import { useEffect, useRef } from "react";
import useIntersectionRatio from "../../hooks/useIntersectionRatio";
//import { Container } from "./ExampleDesign";
import { useIsMobile } from "../../hooks/useIsMobile";
import styled from "styled-components";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

const FAST_ROTATE_SPEED = 5;
const SLOW_ROTATE_SPEED = 2;

const ExampleDeploy = () => {
  const [ratio, globeRef] = useIntersectionRatio<HTMLDivElement>(1);
  const { theme } = useThemeState();
  const dimensions = useGetElementDimensions("sample");
  const { isDarkMode } = useThemeState();
  const ref = useRef();
  const isMobile = useIsMobile();

  useSlideIntoView();

  useEffect(() => {
    if (ref.current && ratio === 1) {
      //@ts-ignore
      ref.current.controls().autoRotateSpeed = SLOW_ROTATE_SPEED;
    } else if (ref.current)
      //@ts-ignore
      ref.current.controls().autoRotateSpeed = FAST_ROTATE_SPEED;
  }, [ratio, ref]);

  return (
    <Container
      isMobile={isMobile}
      id="sample"
      className="slideIntoView"
      style={{
        color: theme.middleFontColor,
      }}
      ref={globeRef}
    >
      <NoSsr>
        <Globe //@ts-ignore
          width={dimensions.width}
          height={dimensions.height}
          polygonsData={world}
          polygonCapColor={() => "#3a228a"}
          backgroundColor={isDarkMode ? "#121212" : "#f1f1f1"}
          ref={ref}
          arcsData={travel}
          arcColor={() => "#ff4d4d"}
          arcDashLength={0.5}
          arcDashGap={4}
          arcDashAnimateTime={4000}
          arcsTransitionDuration={1000}
          arcStroke={"stroke"}
          arcCircularResolution={64}
          pointOfView={{ lat: 48.856788 }}
          enablePointerInteraction={false}
          onGlobeReady={() => {
            if (ref.current) {
              //@ts-ignore
              ref.current.controls().autoRotate = true;
              //@ts-ignore
              ref.current.controls().autoRotateSpeed = FAST_ROTATE_SPEED;
              //@ts-ignore
              ref.current.controls().enableZoom = false;
              //@ts-ignore
              ref.current.controls().minPolarAngle = Math.PI / 3.5;
              //@ts-ignore
              ref.current.controls().maxPolarAngle = Math.PI - Math.PI / 3;
              //@ts-ignore
              //ref.current.pointOfView({ altitude: 3.5 });
            }
          }}
        />
      </NoSsr>
    </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  height: 400px;
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;

  &.slideIntoView {
    transition: all var(--transition-delay) ease;
  }

  &.slideIntoView[data-view="inview-top"],
  &.slideIntoView[data-view="inview-bottom"] {
    transform: translateY(0);
    opacity: 1;
  }

  &.slideIntoView[data-view="outview-top"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(-300px)" : "translateY(-400px)"};
    opacity: 0;
  }

  &.slideIntoView[data-view="outview-bottom"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(300px)" : "translateY(400px)"};
    opacity: 0;
  }
`;

export default ExampleDeploy;
