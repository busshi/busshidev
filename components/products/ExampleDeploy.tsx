import styled from "styled-components";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
// import useIntersectionRatio from "../../hooks/useIntersectionRatio";
import { useIsMobile } from "../../hooks/useIsMobile";
import SystemIcons from "../SystemIcons";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";

// const FAST_ROTATE_SPEED = 5;
// const SLOW_ROTATE_SPEED = 2;

const ExampleDeploy = () => {
  //  const [ratio, globeRef] = useIntersectionRatio<HTMLDivElement>(1);
  const { theme } = useThemeState();
  // const dimensions = useGetElementDimensions("sample");
  // const { isDarkMode } = useThemeState();
  // const ref = useRef();
  const isMobile = useIsMobile();
  const dimensions = useGetElementDimensions("example-develop");

  useSlideIntoView();

  // useEffect(() => {
  //   if (ref.current && ratio === 1) {
  //     //@ts-ignore
  //     ref.current.controls().autoRotateSpeed = SLOW_ROTATE_SPEED;
  //   } else if (ref.current)
  //     //@ts-ignore
  //     ref.current.controls().autoRotateSpeed = FAST_ROTATE_SPEED;
  // }, [ratio, ref]);

  return (
    <Container
      isMobile={isMobile}
      id="example-develop"
      className="slideIntoView"
    >
      <TerminalWrapper dimensions={dimensions}>
        <Terminal>
          <TopBar
            style={{
              background: theme.cardBackground,
            }}
          >
            <SystemIcons /> <p>busshidev@laptop:~</p>
          </TopBar>
          <Screen>
            1 import useThemeState from coucou;
            <br /> 2 function App()
            <br />3 const theme = useThemeState();
            <br />
            <Cursor />
          </Screen>
        </Terminal>
      </TerminalWrapper>
    </Container>

    // <Container
    //   isMobile={isMobile}
    //   id="sample"
    //   className="slideIntoView"
    //   style={{
    //     color: theme.middleFontColor,
    //   }}
    //   ref={globeRef}
    // >
    //   {/* <Globe //@ts-ignore
    //     width={dimensions.width}
    //     height={dimensions.height}
    //     polygonsData={world}
    //     polygonCapColor={() => "#3a228a"}
    //     backgroundColor={isDarkMode ? "#121212" : "#f1f1f1"}
    //     ref={ref}
    //     arcsData={travel}
    //     arcColor={() => "#ff4d4d"}
    //     arcDashLength={0.5}
    //     arcDashGap={4}
    //     arcDashAnimateTime={4000}
    //     arcsTransitionDuration={1000}
    //     arcStroke={"stroke"}
    //     arcCircularResolution={64}
    //     // pointOfView={{ lat: 48.856788 }}
    //     enablePointerInteraction={false}
    //     onGlobeReady={() => {
    //       if (ref.current) {
    //         //@ts-ignore
    //         ref.current.controls().autoRotate = true;
    //         //@ts-ignore
    //         ref.current.controls().autoRotateSpeed = FAST_ROTATE_SPEED;
    //         //@ts-ignore
    //         ref.current.controls().enableZoom = false;
    //         //@ts-ignore
    //         ref.current.controls().minPolarAngle = Math.PI / 3.5;
    //         //@ts-ignore
    //         ref.current.controls().maxPolarAngle = Math.PI - Math.PI / 3;
    //         //@ts-ignore
    //         //ref.current.pointOfView({ altitude: 3.5 });
    //       }
    //     }}
    //   /> */}
    // </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  // height: 400px;
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;

  &.slideIntoView {
    transition: var(--slide-transition);
  }

  &.slideIntoView[data-view="inview-top"],
  &.slideIntoView[data-view="inview-bottom"] {
    transform: translate(0);
    opacity: 1;
  }

  &.slideIntoView[data-view="outview-top"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(-300px)" : "translateX(50px)"};
    opacity: 0;
  }

  &.slideIntoView[data-view="outview-bottom"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(300px)" : "translateX(50px)"};
    opacity: 0;
  }
`;

const TerminalWrapper = styled.div<{
  dimensions: { width: number; height: number };
}>`
  width: ${(props) => `${props.dimensions.width * 0.9}px`};
  height: ${(props) => `${props.dimensions.height * 0.9}px`};
`;

const Terminal = styled.div`
  height: 100%;
`;

const TopBar = styled.div`
  border: 1px solid var(--middle-font-color);
  border-bottom: none;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Screen = styled.div`
  border: 1px solid var(--middle-font-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  height: 80%;
  background: black;
  text-align: left;
  padding: 1rem;
  display: flex;
  color: white;
`;

const Cursor = styled.div`
  width: 0.1rem;
  height: 1.1rem;
  background: gray;
  margin: 0 0 0 0.5rem;
`;

export default ExampleDeploy;
