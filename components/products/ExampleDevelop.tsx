import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";

const ExampleDevelop = () => {
  const { theme } = useThemeState();
  const dimensions = useGetElementDimensions("develop");
  const isMobile = useIsMobile();
  useSlideIntoView(".slideIntoViewRight");

  return (
    <Container
      isMobile={isMobile}
      id="example-develop"
      className="slideIntoViewRight"
    >
      <TerminalWrapper dimensions={dimensions}>
        <Terminal>
          <TopBar
            style={{
              background: theme.cardBackground,
            }}
          >
            <SystemIcons style={{ position: "absolute", left: 0 }} />{" "}
            <p>busshidev@laptop:~</p>
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
  height: ${(props) => (props.isMobile ? "100%" : "100%")};
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
