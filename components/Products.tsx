import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetElementHeight } from "../hooks/useGetElementheight";
import useIntersectionRatio from "../hooks/useIntersectionRatio";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSlideIntoView } from "../hooks/useSlideIntoView";
import { COLORS } from "../lib/constants";
import { buildSolutionsMenu } from "../lib/solutions";
import { useThemeState } from "../providers/Theme.provider";
import { Color, Solution } from "../types/interfaces";
import { Title } from "./Titles";

const DarkModeSwitcher = () => {
  const { isDarkMode, setIsDarkMode, theme } = useThemeState();

  return (
    <Button
      onClick={() => setIsDarkMode(isDarkMode ? false : true)}
      style={{
        background: theme.mainColor,
        border: `1px solid ${theme.mainColorInverted}`,
      }}
    >
      <CircleDark
        style={{
          background: theme.mainColorInverted,
          border: `1px solid ${theme.mainColor}`,
        }}
      />
    </Button>
  );
};

const Item = ({ solution, index }: { solution: Solution; index: number }) => {
  const [ratio, borderRef] = useIntersectionRatio<HTMLDivElement>(1);
  const [height, setHeight] = useState(0);
  const productHeight = useGetElementHeight(`product${index}`);
  const { theme } = useThemeState();
  const isMobile = useIsMobile();

  useSlideIntoView("200px");

  useEffect(() => {
    setHeight(isMobile ? ratio * (productHeight - 80) : ratio * productHeight);
  }, [ratio, productHeight]);

  return (
    <Product ref={borderRef} id={`product${index}`}>
      <Border
        style={{ height: `${height}px` }}
        highlightedColor={COLORS[index]}
        gradientColor={theme.mainColor}
      />
      <Wrapper className="slideIntoView">
        <Circle index={index} style={{ color: theme.fontColor }}>
          {index + 1}
        </Circle>
        <TitleBox>
          <Title
            isShiny={true}
            highlightedColor={COLORS[index]}
            fontSize="1.5rem"
            margin="0"
            mainColor={theme.mainColor}
          >
            {solution.title.substring(0, solution.title.length - 1)}
          </Title>
        </TitleBox>
        <Description style={{ color: theme.fontColor }}>
          {solution.description}
        </Description>
        <ActionsBox>
          {solution.icon}
          {solution.actions.map((item) => (
            <div key={item} style={{ display: "flex", gap: "1rem" }}>
              <TextBox style={{ color: theme.secondaryFontColor }}>
                {item}
              </TextBox>
              {item === "Dark mode" && <DarkModeSwitcher />}
            </div>
          ))}
        </ActionsBox>
      </Wrapper>
      <Wrapper className="slideIntoView">
        <Example style={{ background: theme.cardBackground }}>Example</Example>
      </Wrapper>
    </Product>
  );
};
export const Products = () => {
  const solutions = buildSolutionsMenu(40);

  return (
    <div id="solutions">
      {solutions.map((solution, index) => (
        <Item solution={solution} index={index} key={solution.title} />
      ))}
    </div>
  );
};

const Example = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
`;

const Product = styled.div`
  position: relative;
  margin: 2rem;
  padding: 2rem 0 2rem 0;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  &.slideIntoView {
    transition: all var(--transition-delay) ease;
  }

  &.slideIntoView[data-view="inview-top"],
  &.slideIntoView[data-view="inview-bottom"] {
    opacity: 1;
    transform: translateY(0);
  }

  &.slideIntoView[data-view="outview-top"] {
    opacity: 0;
    transform: translateY(-600px);
  }

  &.slideIntoView[data-view="outview-bottom"] {
    opacity: 0;
    transform: translateY(600px);
  }
`;

const Border = styled.div<{
  highlightedColor: Color;
  gradientColor: string;
}>`
  position: absolute;
  border-left: 3px solid;
  border-image: ${(props) =>
    `linear-gradient(to bottom, ${props.gradientColor}, ${props.highlightedColor.start}, ${props.highlightedColor.stop}, ${props.highlightedColor.start}, ${props.gradientColor}) 1 100%`};
`;

const Description = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  font-size: 2.5rem;

  margin: 3rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 0 0 0 3rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const CircleDark = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 99999px;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 99999px;
`;

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 3rem;
  gap: 1rem;

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const TextBox = styled.div`
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-align: left;
`;

const Circle = styled.div<{ index: number }>`
  margin: 0 3rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 99999px;
  position: relative;
  text-align: center;
  font-weight: var(--font-weight);
  box-shadow: ${(props) => `0px 0px 3rem 0px ${COLORS[props.index].start}`};
  background: ${(props) =>
    `linear-gradient(360deg, ${COLORS[props.index].start}, ${
      COLORS[props.index].stop
    })`};

  @media (max-width: 768px) {
    margin: 0 2rem 1rem 2rem;
  }
`;

export default Products;
