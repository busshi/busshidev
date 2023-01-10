import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";
import { MdIosShare } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { FirstPage } from "../../pages";
import Products from "../Products";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SITE_URL } from "../../lib/constants";

const AUTO_SWITCH_DELAY = 1500;

const ExampleDesign = () => {
  const { isDarkMode, theme } = useThemeState();
  const dimensions = useGetElementDimensions("design");
  const [count, setCount] = useState(0);
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const [isExampleDark, setIsExampleDark] = useState(isDarkMode);
  const isMobile = useIsMobile();
  const [colors, setColors] = useState({
    top: {
      background: theme.cardBackground,
      color: theme.fontColor,
    },
    screen: { background: "black", color: "white" },
    implementation: { color: theme.secondaryFontColor },
  });

  useEffect(() => {
    const autoSwitch = () => {
      if (
        (isElementVisible && count < 2) ||
        (!isElementVisible && count < 2 && count)
      ) {
        setIsExampleDark(!isExampleDark);
        setColors({
          top: {
            background: isExampleDark
              ? "var(--card-light-background)"
              : "var(--card-dark-background)",
            color: isExampleDark
              ? "var(--main-light-font-color)"
              : "var(--main-dark-font-color)",
          },
          screen: {
            background: !isExampleDark ? "black" : "white",
            color: isExampleDark ? "black" : "white",
          },
          implementation: {
            color: !isExampleDark
              ? "var(--secondary-dark-font-color)"
              : "var(--secondary-light-font-color)",
          },
        });
        setCount(count + 1);
      }
    };

    const interval = setInterval(autoSwitch, AUTO_SWITCH_DELAY);

    return () => {
      interval && clearInterval(interval);
    };
  }, [isExampleDark, isElementVisible, count]);

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
  }, [isDarkMode, theme]);

  useEffect(() => {
    if (!isElementVisible) setCount(0);
  }, [isElementVisible]);

  return (
    <Container
      isMobile={isMobile}
      ref={ref}
      id="example-design"
      className="slideIntoView"
    >
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
          <Screen
            isMobile={isMobile}
            style={{
              background: colors.screen.background,
              color: colors.screen.color,
            }}
          >
            <FirstPage
              titlesStyle={{
                margin: isMobile ? "0.1rem" : "0.5rem",
                fontSize: isMobile ? "2rem" : "2.5rem",
                color: colors.screen.color,
              }}
              introStyle={{ fontSize: isMobile ? "0.5rem" : "0.8rem" }}
              firstPageStyle={{
                gap: isMobile ? "2rem" : "1rem",
                minHeight: "100%",
                margin: isMobile ? "1rem" : 0,
              }}
              getADemoStyle={{
                width: isMobile ? "7rem" : "10rem",
                height: isMobile ? "1.2rem" : "2rem",
                fontSize: isMobile ? "0.4rem" : "0.6rem",
                color: colors.screen.color,
              }}
              implementationStyle={{
                color: colors.implementation.color,
                fontSize: isMobile ? "6px" : "0.5rem",
              }}
              fontColor={colors.screen.color}
            />
            <Products
              replicated={true}
              gradientColor={colors.screen.background}
            />
            {/* <Testimonials
              replicated={true}
              style={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "scroll",
                justifyContent: "flex-start",
              }}
            /> */}
          </Screen>
        </Mockup>
      </MockupWrapper>
    </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? "400px" : "100%")};
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: flex-start;

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

const MockupWrapper = styled.div<{
  dimensions: { width: number; height: number };
}>`
  width: ${(props) => `${props.dimensions.width * 0.9}px`};
  height: ${(props) => `${props.dimensions.height * 0.9}px`};
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

const Screen = styled.div<{ isMobile: boolean }>`
  border: 1px solid var(--middle-font-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  height: ${(props) => (props.isMobile ? "330px" : "90%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all var(--theme-transition-delay) ease;
  overflow: auto;
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
