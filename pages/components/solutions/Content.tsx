import styled from "styled-components";
import useIntersectionRatio from "../../../hooks/useIntersectionRatio";
import useIsElementVisible from "../../../hooks/useIsElementVisible";
import { COLORS } from "../../../lib/constants";
import { useHighlightedColorState } from "../../../providers/HighlightedColor";
import { Color, Solution } from "../../../types/interfaces";
import { Title } from "../Titles";

export const Content = ({
  index,
  solution,
  titleSize,
  descriptionSize,
}: {
  index: number;
  solution: Solution;
  titleSize: string;
  descriptionSize: string;
}) => {
  const { highlightedColor } = useHighlightedColorState();
  const [isVisible, ref] = useIsElementVisible<HTMLDivElement>(0);
  const [intersectionRatio, containerRef] =
    useIntersectionRatio<HTMLDivElement>();

  if (!solution) return null;

  return (
    <div ref={containerRef} style={{ opacity: intersectionRatio }}>
      <TitleBox>
        <Title
          isShiny={true}
          highlightedColor={COLORS[index]}
          fontSize={titleSize}
          margin="0"
        >
          {solution.title.substring(0, solution.title.length - 1)}
        </Title>
      </TitleBox>
      <Description fontSize={descriptionSize}>
        {solution.description}
      </Description>
      <ActionsBox
        index={index}
        highlightedColor={highlightedColor}
        isVisible={isVisible}
        ref={ref}
      >
        <Icon
          isShiny={true}
          highlightedColor={highlightedColor}
          color={COLORS[index].stop}
        >
          {solution.icon}
        </Icon>
        {solution.actions.map((item) => (
          <TextBox key={item}>{item}</TextBox>
        ))}
      </ActionsBox>
    </div>
  );
};

const Description = styled.div<{ fontSize: string }>`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0rem;

  color: var(--main-dark-color);
  font-size: ${(props) => props.fontSize};

  @media (prefers-color-scheme: dark) {
      color: var(--secondary-light-color);
    }
  }
`;

const TitleBox = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const ActionsBox = styled.div<{
  index: number;
  highlightedColor: Color;
  isVisible: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    margin: 3rem 0.5rem 2rem 0.5rem;
    padding: 2rem;
    border-radius: var(--border-radius);
    background: var(--light-background-card);

    box-shadow: ${(props) =>
      props.isVisible
        ? `0px 0px 3rem 0px ${COLORS[props.index].start}`
        : "0px 0px 1px var(--secondary-dark-color)"};

    transition: box-shadow var(--long-transition-delay) ease;

    @media (prefers-color-scheme: dark) {
      background: var(--dark-background-card);
    }
  }
`;

const Icon = styled.div<{
  isShiny: boolean;
  highlightedColor: Color;
  color: string;
}>`
  background-color: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
      : "var(--main-dark-color)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 0px;
    border-radius: var(--border-radius);
    background: ${(props) =>
      props.isShiny
        ? `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`
        : "var(--secondary-dark-color)"};
    -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask-composite: exclude;
  }
`;

const TextBox = styled.div`
  color: var(--secondary-dark-color);
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default Content;
