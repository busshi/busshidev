import { Fragment } from "react";
import styled from "styled-components";
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
  if (!solution) return <></>;
  return (
    <Fragment>
      <TitleBox>
        <Title
          isShiny={true}
          highlightedColor={COLORS[index]}
          fontSize={titleSize}
          margin="0"
        >
          {solution!.title.substring(0, solution!.title.length - 1)}
        </Title>
      </TitleBox>
      <Description fontSize={descriptionSize}>
        {solution.description}
      </Description>
      <ActionsBox>
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
    </Fragment>
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

const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;
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
