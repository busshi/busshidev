import styled from "styled-components";
import { SOLUTIONS } from "../lib/constants";
import { Color, useHighlightedColorState } from "../providers/HighlightedColor";

export const Solutions = () => {
  const { highlighted, highlightedColor } = useHighlightedColorState();

  return (
    <Container id="solutions">
      {SOLUTIONS.map(({ title, description, icon, component }, i) => (
        <Card
          key={title}
          id={title.substring(0, title.length - 1).toLowerCase()}
          isShiny={highlighted === i ? true : false}
          highlightedColor={highlightedColor}
        >
          <Icon>{icon}</Icon>
          <div>{description}</div>
          {component}
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 0.1rem;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Card = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
  width: 15rem;
  height: 15rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  z-index: 0;
  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
      : "none"};
  transition: box-shadow var(--long-transition-delay) ease;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
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

const Icon = styled.div`
  position: absolute;
  top: 0px;
`;
