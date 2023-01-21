import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";
import { MdIosShare } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import Products from "./Products";
import { SITE_URL } from "../../lib/constants";
import FirstPage from "../FirstPage";

const AUTO_SWITCH_DELAY = 1500;

const ExampleDesign = () => {
  const { isDarkMode, theme } = useThemeState();
  const dimensions = useGetElementDimensions("design");
  const [count, setCount] = useState(0);
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const [isExampleDark, setIsExampleDark] = useState(isDarkMode);

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
      if (isElementVisible && count < 2) {
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
              className="laptop"
              titlesStyle={{
                margin: "0.5rem",
                fontSize: "2.5rem",
                color: colors.screen.color,
              }}
              introStyle={{ fontSize: "0.8rem" }}
              firstPageStyle={{
                gap: "1rem",
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
              // replicated={true}
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
              className="mobile"
              titlesStyle={{
                margin: "0.1rem",
                fontSize: "2rem",
                color: colors.screen.color,
              }}
              introStyle={{ fontSize: "0.5rem" }}
              firstPageStyle={{
                gap: "2rem",
                minHeight: "100%",
                margin: "1rem",
              }}
              getADemoStyle={{
                width: "7rem",
                height: "1.2rem",
                fontSize: "0.4rem",
                color: colors.screen.color,
              }}
              implementationStyle={{
                color: colors.implementation.color,
                fontSize: "6px",
              }}
              fontColor={colors.screen.color}
              // replicated={true}
            />
            <Products
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
  width: ${(props) => `${props.dimensions.width * 0.9}px`};
  height: ${(props) => `${props.dimensions.height * 0.8}px`};
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
    height: 350px;
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
