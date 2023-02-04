import { useEffect } from "react";
import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";
import { MdIosShare } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import Products, { Solutions } from "./Solutions";
import { SITE_URL } from "../../lib/constants";
import FirstPage from "../FirstPage";
import { useAutoSwitchDarkMode } from "../../hooks/useAutoSwitchDarkMode";

const ExampleDesign = () => {
  const { isDarkMode, theme, isExampleDark } = useThemeState();
  const dimensions = useGetElementDimensions("design");
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const [colors, setColors] = useAutoSwitchDarkMode(isElementVisible);

  useEffect(() => {
    setColors({
      top: {
        background: theme.cardBackground,
        color: theme.fontColor,
      },
      screen: {
        background: isDarkMode ? "black" : "white",
        color: !isDarkMode ? "black" : "white",
      },
      implementation: { color: theme.secondaryFontColor },
    });
  }, [isDarkMode, theme, setColors]);

  /**
   * Effect to switch dark/light colors inside the example with the button
   */
  useEffect(() => {
    setColors({
      top: {
        background: !isExampleDark
          ? "var(--card-light-background)"
          : "var(--card-dark-background)",
        color: !isExampleDark
          ? "var(--main-light-font-color)"
          : "var(--main-dark-font-color)",
      },
      screen: {
        background: isExampleDark ? "black" : "white",
        color: !isExampleDark ? "black" : "white",
      },
      implementation: {
        color: isExampleDark
          ? "var(--secondary-dark-font-color)"
          : "var(--secondary-light-font-color)",
      },
    });
  }, [isExampleDark, setColors]);

  return (
    <Container ref={ref} id="example-design" className="slideIntoViewRight">
      <MockupWrapper dimensions={dimensions}>
        <Mockup>
          <Bar
            style={{
              background: colors.top.background,
              color: colors.top.color,
            }}
          >
            <SystemIcons />
            <AdressBar>{SITE_URL}</AdressBar>
            <BrowserIcons>
              <MdIosShare />
              <AiOutlinePlus />
              <HiDotsHorizontal />
            </BrowserIcons>
          </Bar>
          {/* Laptop Component */}
          <Screen
            className="laptop"
            style={{
              background: colors.screen.background,
              color: colors.screen.color,
            }}
          >
            <FirstPage
              replicated={true}
              className="laptop"
              titlesStyle={{
                margin: "0.2rem",
                fontSize: "2.5rem",
                color: colors.screen.color,
              }}
              introStyle={{ fontSize: "0.8rem" }}
              firstPageStyle={{
                gap: "0rem",
                minHeight: "100%",
                margin: 0,
              }}
              getADemoStyle={{
                width: "10rem",
                height: "2rem",
                fontSize: "0.6rem",
                color: colors.screen.color,
              }}
              implementationStyle={{
                color: colors.implementation.color,
                fontSize: "0.5rem",
              }}
              fontColor={colors.screen.color}
            />
            <Products
              replicated={true}
              gradientColor={colors.screen.background}
            />
          </Screen>

          {/* Mobile Component */}
          <Screen
            className="mobile"
            style={{
              background: colors.screen.background,
              color: colors.screen.color,
            }}
          >
            <FirstPage
              replicated={true}
              className="mobile"
              titlesStyle={{
                margin: "0 0.5rem 0 0",
                fontSize: "2rem",
                color: colors.screen.color,
              }}
              introStyle={{ fontSize: "0.5rem", marginTop: "1.6rem" }}
              firstPageStyle={{
                gap: "1rem",
                minHeight: "100%",
                margin: "1rem",
              }}
              getADemoStyle={{
                width: "7rem",
                height: "1.2rem",
                fontSize: "0.4rem",
                color: colors.screen.color,
                marginTop: "1rem",
              }}
              implementationStyle={{
                color: colors.implementation.color,
                fontSize: "6px",
              }}
              fontColor={colors.screen.color}
            />
            <Solutions
              replicated={true}
              gradientColor={colors.screen.background}
            />
          </Screen>
          {/* <Testimonials
              replicated={true}
              style={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "scroll",
                justifyContent: "flex-start",
              }}
            /> */}
        </Mockup>
      </MockupWrapper>
    </Container>
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

const MockupWrapper = styled.div<{
  dimensions: { width: number; height: number };
}>`
  width: 100%;
  height: ${(props) => `${props.dimensions.height * 0.8}px`};
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Mockup = styled.div`
  height: 100%;
`;

const Bar = styled.div`
  border: 1px solid var(--middle-font-color);
  border-bottom: none;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--theme-transition-delay) ease;
`;

const Screen = styled.div`
  border: 1px solid var(--middle-font-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all var(--theme-transition-delay) ease;
  overflow: auto;

  &.mobile {
    display: none;
    height: 250px;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  &.laptop {
    display: flex;
    height: 95%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const AdressBar = styled.div`
  width: 50%;
  height: 2rem;
  border: 0.5px solid var(--middle-font-color);
  border-radius: var(--border-radius);
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
    width: 40%;
    height: 1.5rem;
  }
`;

const BrowserIcons = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default ExampleDesign;
