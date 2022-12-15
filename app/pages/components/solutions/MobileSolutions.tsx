import styled from "styled-components";
import { COLORS, SOLUTIONS } from "../../lib/constants";
import { Content } from "./Content";

export const MobileSolutions = () => (
  <Container id="solutions">
    {SOLUTIONS.map(({ title, description, actions, id }, index) => (
      <Solution key={title} id={id}>
        <Line index={index} />
        <Circle isShiny={true} index={index}>
          {index + 1}
        </Circle>
        <Content
          title={title}
          description={description}
          index={index}
          actions={actions}
          titleSize="3rem"
          descriptionSize="3rem"
        />
      </Solution>
    ))}
  </Container>
);

const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin: 1rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.06rem;
  gap: 3rem;
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
