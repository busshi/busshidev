import styled from "styled-components";
import { COLORS, SOLUTIONS } from "../lib/constants";
import { Title } from "./Titles";

export const Solutions = () => {
  return (
    <Container id="solutions">
      {SOLUTIONS.map(({ title, description, component, id }, index) => (
        <Solution key={title} id={id}>
          <Line index={index} />
          <Circle isShiny={true} index={index}>
            {index + 1}
          </Circle>
          <TitleBox>
            <Title
              key={title}
              isShiny={true}
              highlightedColor={COLORS[index]}
              fontSize="3rem"
              margin="0"
            >
              {title.substring(0, title.length - 1)}
            </Title>
          </TitleBox>
          <Description>{description}</Description>
          {component}
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
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    margin: 1rem;
    line-height: 1.1;
  }
`;

const Solution = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  color: var(--secondary-light-color);
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

  @media (prefers-color-scheme: dark) {
      color: var(--main-dark-color);
    }
  }
`;

const TitleBox = styled.div`
  margin: 2rem;
`;

const Description = styled.div`
  color: var(--main-dark-color);
  font-size: 3rem;

  @media (prefers-color-scheme: dark) {
      color: var(--secondary-light-color);
    }
  }
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
