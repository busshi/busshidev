import styled from "styled-components";
import { COLORS, SOLUTIONS } from "../../lib/constants";
import { useHighlightedColorState } from "../../providers/HighlightedColor";
import { Color } from "../../types/interfaces";
import { Content } from "./Content";

export const Solutions = () => {
  const { highlighted, highlightedColor } = useHighlightedColorState();

  return (
    <Container id="solutions">
      {SOLUTIONS.map((solution, index) => (
        <Card
          key={solution.title}
          id={solution.id}
          highlightedColor={COLORS[index]}
          isShiny={index === highlighted ? true : false}
        >
          <Content
            solution={solution}
            index={index}
            titleSize="1.5rem"
            descriptionSize="1.5rem"
          />
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 5rem;
  padding: 2rem;
  margin: auto;
  min-height: 100vh;
`;

const Card = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
  width: 35%;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  text-align: center;
  z-index: 0;
  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
      : "none"};

  transition: box-shadow var(--long-transition-delay) ease;

   @media (prefers-color-scheme: dark) {
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
      : "none"};
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: ${(props) =>
      `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`};
    -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask-composite: exclude;
  }
`;
