import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetElementDimensions } from "../../hooks/useGetElementDimensions";
import useIntersectionRatio from "../../hooks/useIntersectionRatio";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { COLORS } from "../../lib/constants";
import { buildThresholdList } from "../../lib/observerIntersection";
import { buildSolutionsMenu } from "../../lib/solutions";
import { useThemeState } from "../../providers/Theme.provider";
import { Color, Solution } from "../../types/interfaces";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { Title } from "../Titles";

const Item = ({
  solution,
  index,
  replicated,
  gradientColor,
}: {
  solution: Solution;
  index: number;
  replicated: boolean;
  gradientColor: string;
}) => {
  const [ratio, ref] = useIntersectionRatio<HTMLDivElement>(
    1,
    "0px",
    buildThresholdList(100)
  );
  const [height, setHeight] = useState(0);
  const productHeight = useGetElementDimensions(
    replicated ? `${solution.id}-replicated` : solution.id
  ).height;
  const { theme } = useThemeState();
  const isMobile = useIsMobile();

  useSlideIntoView(".slideIntoViewLeft");

  useEffect(() => {
    setHeight(
      isMobile ? ratio * productHeight * 1.5 : ratio * productHeight * 1.2
    );
  }, [ratio, productHeight, isMobile]);

  return (
    <Product ref={ref} replicated={replicated}>
      <Border
        style={{ height: `${height}px` }}
        highlightedColor={COLORS[index]}
        gradientColor={gradientColor}
      />
      <div
        className="slideIntoViewLeft"
        id={replicated ? `${solution.id}-replicated` : solution.id}
      >
        <Circle
          index={index}
          style={{
            color: theme.fontColor,
            width: replicated ? "2rem" : "3rem",
            height: replicated ? "2rem" : "3rem",
          }}
        >
          {index + 1}
        </Circle>
        <TitleBox>
          <Title
            isShiny={true}
            highlightedColor={COLORS[index]}
            style={{ fontSize: replicated ? "1rem" : "1.5rem" }}
            fontColor={theme.fontColor}
            // replicated={replicated}
          >
            {solution.title.substring(0, solution.title.length - 1)}
          </Title>
        </TitleBox>
        <Description
          style={{
            color: theme.fontColor,
            fontSize: replicated ? "1.5rem" : "2.5rem",
          }}
        >
          {solution.description}
        </Description>
        <ActionsBox>
          {solution.icon}
          {solution.actions.map((item) => (
            <div key={item} style={{ display: "flex", gap: "1rem" }}>
              <TextBox
                style={{
                  fontSize: replicated ? "0.8rem" : "1rem",
                  color: theme.secondaryFontColor,
                }}
              >
                {item}
              </TextBox>
              {item === "Dark mode" && <DarkModeSwitcher />}
            </div>
          ))}
        </ActionsBox>
      </div>
      {!replicated && solution.example}
    </Product>
  );
};
export const Products = ({
  replicated,
  gradientColor,
}: {
  replicated: boolean;
  gradientColor: string;
}) => {
  const solutions = buildSolutionsMenu(replicated ? 20 : 40);

  return (
    <div id="solutions">
      {solutions.map((solution, index) => (
        <Item
          replicated={replicated}
          solution={solution}
          index={index}
          key={solution.title}
          gradientColor={gradientColor}
        />
      ))}
    </div>
  );
};

const Product = styled.div<{ replicated: boolean }>`
  position: relative;
  // margin: 0 2rem 0 2rem;
  margin: 2rem;
  padding: 2rem 0 2rem 0;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${(props) =>
    `repeat(${props.replicated ? 1 : 2}, minmax(0, 1fr)`});
  grid-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
