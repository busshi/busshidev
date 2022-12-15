import styled from "styled-components";
import { SOLUTIONS } from "../../lib/constants";
import {
  Color,
  useHighlightedColorState,
} from "../../providers/HighlightedColor";
import { Content } from "./Content";

export const LaptopSolutions = () => {
  const { highlighted, highlightedColor } = useHighlightedColorState();

  return (
    <Container id="solutions">
      {SOLUTIONS.map(({ title, description, component, id }, index) => (
        <Solution
          key={title}
          id={id}
          highlightedColor={highlightedColor}
          isShiny={index === highlighted ? true : false}
        >
          <Content
            title={title}
            description={description}
            index={index}
            component={component}
            titleSize="1.5rem"
            descriptionSize="2rem"
          />
        </Solution>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 5rem;
  padding: 2rem;
`;

const Solution = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
  width: 35%;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-self: flex-start;
  position: relative;
  text-align: center;
  z-index: 0;
  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
      : `0px 0px 1rem 0px var(--secondary-dark-color)`};

  transition: box-shadow var(--long-transition-delay) ease;

   @media (prefers-color-scheme: dark) {
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
      : `0px 0px 1rem 0px var(--secondary-light-color)`};
    }
  }

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
