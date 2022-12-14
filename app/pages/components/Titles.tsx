import Link from "next/link";
import styled from "styled-components";
import { useHighlightedColorState } from "../providers/HighlightedColor";

export const Titles = () => {
  const { highlighted, setHighlighted } = useHighlightedColorState();

  return (
    <Container>
      <Title
        start="#030cfa"
        stop="#01f1ff"
        isShiny={highlighted === 0 ? true : false}
        onClick={() => setHighlighted(0)}
      >
        <Link href="#design">Design.</Link>
      </Title>
      <Title
        start="#520979"
        stop="#ff00f1"
        isShiny={highlighted === 1 ? true : false}
        onClick={() => setHighlighted(1)}
      >
        <Link href="#develop">Develop.</Link>
      </Title>
      <Title
        start="#ff4d4d"
        stop="#f9cb28"
        isShiny={highlighted === 2 ? true : false}
        onClick={() => setHighlighted(2)}
      >
        <Link href="#deploy">Deploy.</Link>
      </Title>
      <Title
        start="#01961c"
        stop="#23ff00"
        isShiny={highlighted === 3 ? true : false}
        onClick={() => setHighlighted(3)}
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

const Title = styled.div<{ start: string; stop: string; isShiny?: boolean }>`
  cursor: pointer;
  font-size: 100px;
  background: ${(props) =>
    props.isShiny
      ? `-webkit-linear-gradient(180deg, ${props.stop}, ${props.start})`
      : "black"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (prefers-color-scheme: dark) {
    background: ${(props) =>
      props.isShiny
        ? `-webkit-linear-gradient(180deg, ${props.stop}, ${props.start})`
        : "white"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes Test {
    0% {
      background: black;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    100% {
      background: ${(props) =>
        props.isShiny
          ? `-webkit-linear-gradient(180deg, ${props.stop}, ${props.start})`
          : "black"};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
