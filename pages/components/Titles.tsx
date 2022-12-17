import styled from "styled-components";
import { scrollIntoView } from "../../lib/scrollIntoView";
import { COLORS } from "../../lib/constants";
import { SOLUTIONS } from "../../lib/solutions";
import { useHighlightedColorState } from "../../providers/HighlightedColor";
import { Color } from "../../types/interfaces";

export const Titles = () => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();

  return (
    <Container>
      {SOLUTIONS.map(({ title }, i) => (
        <Title
          key={title}
          isShiny={highlighted === i ? true : false}
          onClick={() => {
            setHighlighted(i);
            setHighlightedColor(COLORS[i]);
            scrollIntoView(SOLUTIONS[i].id);
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

  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);

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

export default Titles;
