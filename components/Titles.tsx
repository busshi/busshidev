import styled, { CSSProperties } from "styled-components";
import { scrollIntoView } from "../lib/scroll";
import { COLORS } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { Color } from "../types/interfaces";
import { buildSolutionsMenu } from "../lib/solutions";

export const Titles = ({
  fontColor,
  style,
  replicated,
}: {
  fontColor: string;
  style: CSSProperties;
  replicated: boolean;
}) => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();
  const solutions = buildSolutionsMenu(40);

  return (
    <Container replicated={replicated}>
      {solutions.map(({ title }, i) => (
        <Title
          key={title}
          isShiny={highlighted === i ? true : false}
          onClick={() => {
            setHighlighted(i);
            setHighlightedColor(COLORS[i]);
            scrollIntoView(solutions[i].id);
          }}
          highlightedColor={highlightedColor}
          fontColor={fontColor}
          style={{ ...style }}
        >
          {title}
        </Title>
      ))}
    </Container>
  );
};

const Container = styled.div<{ replicated: boolean }>`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.replicated ? "row" : "column")};
    margin: 0;
  }
`;

export const Title = styled.div<{
  highlightedColor: Color;
  isShiny: boolean;
  fontColor: string;
}>`
  cursor: pointer;
  background: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
      : props.fontColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
`;

export default Titles;
