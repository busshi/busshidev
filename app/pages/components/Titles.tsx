import styled from "styled-components";
import { useScrollIntoView } from "../hooks/useScrollIntoView";
import { COLORS, SOLUTIONS } from "../lib/constants";
import { Color, useHighlightedColorState } from "../providers/HighlightedColor";

export const Titles = () => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();

  return (
    <Container>
      {SOLUTIONS.map(({ title, id }, i) => (
        <Title
          key={title}
          isShiny={highlighted === i ? true : false}
          onClick={() => {
            setHighlighted(i);
            setHighlightedColor(COLORS[i]);
            useScrollIntoView(id);
          }}
          highlightedColor={highlightedColor}
        >
          {title}
        </Title>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Title = styled.div<{
  highlightedColor: Color;
  isShiny: boolean;
  fontSize?: string;
  margin?: string;
}>`
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "6rem")};
  margin: ${(props) => (props.margin ? props.margin : "0 1rem 0 0")};
  background: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
      : "var(--main-dark-color)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    margin: 0;
    font-size: ${(props) => (props.fontSize ? "2rem" : "4rem")};
    line-height: 1.1;
  }

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.isShiny
        ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
        : "var(--main-light-color)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
