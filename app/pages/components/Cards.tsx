import styled from "styled-components";
import { ITEMS } from "../lib/constants";
import { Color, useHighlightedColorState } from "../providers/HighlightedColor";

export const Cards = () => {
  const { highlighted, highlightedColor } = useHighlightedColorState();

  return (
    <Container>
      {ITEMS.map(({ title, description, icon }, i) => (
        <Card
          id={title.substring(0, title.length - 1).toLowerCase()}
          isShiny={highlighted === i ? true : false}
          highlightedColor={highlightedColor}
        >
          <Icon>{icon}</Icon>
          <div>{description}</div>
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 12px;
  margin-top: 300px;
  justify-content: center;
`;

const Card = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
  width: 200px;
  height: 200px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  z-index: 0;
  border-radius: 14px;
  box-shadow: ${(props) =>
    props.isShiny
      ? `0px 0px 30px 0px ${props.highlightedColor.start}`
      : "none"};
  transition: box-shadow 1s ease;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 14px;
    background: ${(props) =>
      props.isShiny
        ? `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`
        : "var(--secondary-dark-color)"};
    -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(var(--main-light-color) 0 0) content-box,
      linear-gradient(var(--main-light-color) 0 0);
    mask-composite: exclude;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0px;
`;
