import styled from "styled-components";
import { COLORS, SOLUTIONS } from "../lib/constants";
import { useHighlightedColorState } from "../providers/HighlightedColor";
import { Title } from "./Titles";

export const Solutions = () => {
  const { highlighted } = useHighlightedColorState();

  return (
    <Container id="solutions">
      {SOLUTIONS.map(({ title, description }, index) => (
        <Solution key={title}>
          <Line index={index} />
          <Circle isShiny={highlighted === index ? true : false} index={index}>
            {index + 1}
          </Circle>
          <Box>
            <Title
              key={title}
              isShiny={true}
              highlightedColor={COLORS[index]}
              fontSize="4rem"
            >
              {title}
            </Title>
            <div>{description}</div>
          </Box>
        </Solution>
      ))}
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  gap: 3rem;
  margin: 0.1rem;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Solution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div<{ index: number }>`
  height: 5rem;
  width: 1px;
  background: ${(props) =>
    `linear-gradient(360deg, ${COLORS[props.index].stop}, ${
      COLORS[props.index].start
    })`};
`;

const Circle = styled.div<{ isShiny: boolean; index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-dark-color);
  width: 3rem;
  height: 3rem;
  border-radius: 99999px;
  position: relative;
  text-align: center;
  font-weight: var(--font-weight);
  z-index: 0;
  box-shadow: ${(props) =>
    props.isShiny ? `0px 0px 3rem 0px ${COLORS[props.index].start}` : "none"};
  background: ${(props) =>
    `linear-gradient(360deg, ${COLORS[props.index].start}, ${
      COLORS[props.index].stop
    })`};
`;

const Box = styled.div`
  margin: 0 0 2rem 0;
`;

// const Card = styled.div<{ highlightedColor: Color; isShiny: boolean }>`
//   width: 15rem;
//   height: 15rem;
//   padding: 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   text-align: center;
//   z-index: 0;
//   border-radius: var(--border-radius);
//   box-shadow: ${(props) =>
//     props.isShiny
//       ? `0px 0px 3rem 0px ${props.highlightedColor.start}`
//       : "none"};
//   transition: box-shadow var(--long-transition-delay) ease;

//   &:before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     inset: 0;
//     padding: 1px;
//     border-radius: var(--border-radius);
//     background: ${(props) =>
//       props.isShiny
//         ? `linear-gradient(180deg, ${props.highlightedColor.start}, ${props.highlightedColor.stop})`
//         : "var(--secondary-dark-color)"};
//     -webkit-mask: linear-gradient(var(--main-light-color) 0 0) content-box,
//       linear-gradient(var(--main-light-color) 0 0);
//     mask: linear-gradient(var(--main-light-color) 0 0) content-box,
//       linear-gradient(var(--main-light-color) 0 0);
//     mask-composite: exclude;
//   }
// `;

// const Icon = styled.div`
//   position: absolute;
//   top: 0px;
// `;
