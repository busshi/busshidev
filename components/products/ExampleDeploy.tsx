import styled from "styled-components";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { TbArrowNarrowRight } from "react-icons/tb";

const TEXT_INTERVAL = 50;

const GetLine = ({
  isElementVisible,
  finished,
  setFinished,
  line,
}: {
  isElementVisible: boolean;
  finished: number;
  setFinished: (value: number) => void;
  line: string;
}) => {
  const [textDisplayed, setTextDisplayed] = useState("");

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;
    if (isElementVisible) {
      intervalId = setInterval(
        () => setTextDisplayed(line.substring(0, textDisplayed.length + 1)),
        TEXT_INTERVAL
      );
    }
    if (textDisplayed === line) setFinished(finished + 1);
    return () => {
      intervalId && clearInterval(intervalId);
      if (!isElementVisible && textDisplayed.length === line.length)
        setTextDisplayed("");
    };
  }, [textDisplayed, isElementVisible]);

  return (
    <LineWrapper>
      <TbArrowNarrowRight
        style={{ marginRight: "0.5rem", color: "var(--git-prompt-arrow)" }}
      />
      <Prompt color="var(--git-prompt-user)" marginRight="0.5rem">
        busshidev
      </Prompt>
      <Prompt color="var(--git-prompt-git)" marginRight="0rem">
        git:(
      </Prompt>
      <Prompt color="var(--git-prompt-branch)" marginRight="0rem">
        main
      </Prompt>
      <Prompt color="var(--git-prompt-git)" marginRight=".5rem">
        )
      </Prompt>
      <MobilePrompt>~ </MobilePrompt>
      <div style={{ display: "flex" }}>
        <div>{textDisplayed}</div>{" "}
        {<Cursor isCursorAnimated={textDisplayed !== line ? false : true} />}
      </div>
    </LineWrapper>
  );
};

const ExampleDeploy = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();
  // const dimensions = useGetElementDimensions("sample");
  const dimensions = useGetElementDimensions("develop");
  const lines = ["git add .", 'git commit -m "ready to deploy"', "git push"];
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const Screen = () => {
    const [finished, setFinished] = useState(0);
    const [items, setItems] = useState([lines[0]]);

    useEffect(() => {
      //      setDisplayedLines([...items, lines[finished]]);
    }, [finished]);

    console.log(finished);

    return (
      <ScreenWrapper>
        <div>
          {items.map((line, i) => {
            return (
              <div key={line}>
                <GetLine
                  isElementVisible={isElementVisible}
                  finished={finished}
                  setFinished={setFinished}
                  line={line}
                />
              </div>
            );
          })}
        </div>
      </ScreenWrapper>
    );
  };

  useSlideIntoView(".slideIntoViewRight");

  // useEffect(() => {
  //   if (ref.current && ratio === 1) {
  //     //@ts-ignore
  //     ref.current.controls().autoRotateSpeed = SLOW_ROTATE_SPEED;
  //   } else if (ref.current)
  //     //@ts-ignore
  //     ref.current.controls().autoRotateSpeed = FAST_ROTATE_SPEED;
  // }, [ratio, ref]);

  return (
    <></>
    // <Container id="example-deploy" className="slideIntoViewRight">
    //   <TerminalWrapper ref={ref} dimensions={dimensions}>
    //     <Terminal>
    //       <TopBar
    //         style={{
    //           background: theme.cardBackground,
    //           height: "3rem",
    //         }}
    //       >
    //         <SystemIcons style={{ position: "absolute", left: 0 }} />
    //         <div>busshidev@laptop:~</div>
    //       </TopBar>
    //       <Screen />
    //     </Terminal>
    //   </TerminalWrapper>
    // </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TerminalWrapper = styled.div<{
  dimensions: { width: number; height: number };
}>`
  width: ${(props) => `${props.dimensions.width}px`};
  height: ${(props) => `${props.dimensions.height * 0.3}px`};
`;

const Terminal = styled.div`
  height: 100%;
  position: relative;
`;

const TopBar = styled.div`
  border: 1px solid var(--middle-font-color);
  border-bottom: none;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScreenWrapper = styled.div`
  border: 1px solid var(--middle-font-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  height: 80%;
  background: black;
  text-align: left;
  padding: 1rem;
  display: flex;
  color: white;
`;

const Cursor = styled.div<{ isCursorAnimated: boolean }>`
  width: 0.5rem;
  height: 1.1rem;
  background: gray;
  // margin: 0 0 0 0.5rem;
  display: flex;
  align-items: flex-end;

  animation: ${(props) => (props.isCursorAnimated ? "cursor 1s 5" : "none")};

  @keyframes cursor {
    from {
      background-color: var(--middle-font-color);
    }
    50% {
      background-color: black;
    }
    to {
      background-color: var(--middle-font-color);
    }
  }
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--secondary-dark-font-color);
`;

const Prompt = styled.div<{ color: string; marginRight: string }>`
  margin-right: ${(props) => props.marginRight};
  display: block;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobilePrompt = styled.div`
  color: var(--git-prompt-user);
  margin-right: 0.8rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default ExampleDeploy;

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
