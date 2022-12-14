import Link from "next/link";
import styled from "styled-components";
import { COLORS, ITEMS } from "../lib/constants";
import { Color, useHighlightedColorState } from "../providers/HighlightedColor";

export const Titles = () => {
  const { highlighted, setHighlighted, setHighlightedColor, highlightedColor } =
    useHighlightedColorState();

  return (
    <Container>
      {ITEMS.map(({ title, link }, i) => (
        <Title
          key={title}
          isShiny={highlighted === i ? true : false}
          onClick={() => {
            setHighlighted(i);
            setHighlightedColor(COLORS[i]);
          }}
          highlightedColor={highlightedColor}
        >
          <Link href={link}>{title}</Link>
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
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    line-height: 1;
  }
`;

const Title = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
  cursor: pointer;
  font-size: 100px;
  background: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`
      : "var(--main-dark-color)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 60px;
    margin-right: 0;
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
