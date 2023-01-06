import styled from "styled-components";
import { scrollIntoView } from "../lib/scroll";
import { COLORS } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { Color } from "../types/interfaces";
import { buildSolutionsMenu } from "../lib/solutions";
import { useThemeState } from "../providers/Theme.provider";

export const Titles = () => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();
  const solutions = buildSolutionsMenu(40);
  const { theme } = useThemeState();
  return (
    <Container>
      {solutions.map(({ title }, i) => (
        <Title
          key={title}
          isShiny={highlighted === i ? true : false}
          mainColor={theme.mainColorInverted}
          onClick={() => {
            setHighlighted(i);
            setHighlightedColor(COLORS[i]);
            scrollIntoView(solutions[i].id);
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
  mainColor: string;
  fontSize?: string;
  margin?: string;
}>`
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "6rem")};
  margin: ${(props) => (props.margin ? props.margin : "0 1rem 0 0")};
  background: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
      : props.mainColor};
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
`;

export default Titles;
