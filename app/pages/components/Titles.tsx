import styled from "styled-components";

export const Titles = ({
  highlighted,
  setHighlighted,
}: {
  highlighted: number;
  setHighlighted: (value: number) => void;
}) => (
  <Container>
    <Title
      start="#030cfa"
      stop="#01f1ff"
      isShiny={highlighted === 0 ? true : false}
      onClick={() => setHighlighted(0)}
    >
      <a href="#design">Design.</a>
    </Title>
    <Title
      start="#520979"
      stop="#ff00f1"
      isShiny={highlighted === 1 ? true : false}
      onClick={() => setHighlighted(1)}
    >
      <a href="#develop">Develop.</a>
    </Title>
    <Title
      start="#ff4d4d"
      stop="#f9cb28"
      isShiny={highlighted === 2 ? true : false}
      onClick={() => setHighlighted(2)}
    >
      <a href="#deploy">Deploy.</a>
    </Title>
    <Title
      start="#02ff01"
      stop="#03faf3"
      isShiny={highlighted === 3 ? true : false}
      onClick={() => setHighlighted(3)}
    >
      <a href="#boost">Boost.</a>
    </Title>
  </Container>
);

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
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

  //  animation: Test 3s ease infinite;

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
