import styled, { CSSProperties } from "styled-components";
import { scrollIntoView } from "../lib/scroll";
import { COLORS } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { Color } from "../types/interfaces";
import { buildSolutionsMenu } from "../lib/solutions";

export const Titles = ({
  fontColor,
  style,
}: {
  fontColor: string;
  style: CSSProperties;
}) => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();
  const solutions = buildSolutionsMenu(40);

  return (
    <Container>
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

  @media (max-width: 768px) {
    line-height: 1.1;
  }
`;

export default Titles;
