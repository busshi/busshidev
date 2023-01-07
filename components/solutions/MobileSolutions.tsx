import styled from "styled-components";
import { COLORS } from "../../lib/constants";
import { buildSolutionsMenu } from "../../lib/solutions";
import { useThemeState } from "../../providers/Theme.provider";
import { Content } from "./Content";

export const MobileSolutions = () => {
  const solutions = buildSolutionsMenu(40, "var(--middle-font-color)");
  const { theme } = useThemeState();
  return (
    <Container id="solutions">
      {solutions.map((solution, index) => (
        <Solution key={solution.title} id={solution.id}>
          <Line index={index} backgroundColor={theme.mainColor} />
          <Circle
            isShiny={true}
            index={index}
            style={{ color: theme.fontColor }}
          >
            {index + 1}
          </Circle>
          <Content
            solution={solution}
            index={index}
            titleSize="3rem"
            descriptionSize="3rem"
          />
        </Solution>
      ))}
    </Container>
  );
};

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

const Line = styled.div<{ index: number; backgroundColor: string }>`
  height: 5rem;
  width: 1px;
  background: ${(props) =>
    `linear-gradient(180deg, ${props.backgroundColor}, ${
      COLORS[props.index].start
    }, ${COLORS[props.index].stop})`};
`;

const Circle = styled.div<{ isShiny: boolean; index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
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

export default MobileSolutions;
