import Link from "next/link";
import styled from "styled-components";
import { Color, useHighlightedColorState } from "../providers/HighlightedColor";

export const Titles = () => {
  const { highlighted, setHighlighted, highlightedColor } =
    useHighlightedColorState();

  return (
    <Container>
      <Title
        isShiny={highlighted === 0 ? true : false}
        onClick={() => setHighlighted(0)}
        highlightedColor={highlightedColor}
      >
        <Link href="#design">Design.</Link>
      </Title>
      <Title
        isShiny={highlighted === 1 ? true : false}
        onClick={() => setHighlighted(1)}
        highlightedColor={highlightedColor}
      >
        <Link href="#develop">Develop.</Link>
      </Title>
      <Title
        isShiny={highlighted === 2 ? true : false}
        onClick={() => setHighlighted(2)}
        highlightedColor={highlightedColor}
      >
        <Link href="#deploy">Deploy.</Link>
      </Title>
      <Title
        isShiny={highlighted === 3 ? true : false}
        onClick={() => setHighlighted(3)}
        highlightedColor={highlightedColor}
      >
        <Link href="#boost">Boost.</Link>
      </Title>
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

  @media (max-width: 768px) {
    font-size: 60px;
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
