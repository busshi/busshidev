import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";

const ExampleDevelop = () => {
  const { theme } = useThemeState();
  const dimensions = useGetElementDimensions("example-develop");
  const isMobile = useIsMobile();
  useSlideIntoView();

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
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  //height: ${(props) => (props.isMobile ? "400px" : "100%")};
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

export default ExampleDevelop;
