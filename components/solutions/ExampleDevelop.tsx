import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { COLORS } from "../../lib/constants";
import { useThemeState } from "../../providers/Theme.provider";
import PieChart from "../PieChart";

const ExampleDevelop = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();
  const charts = [
    { id: "Performances", maxValue: 100 },
    { id: "Best Practices", maxValue: 100 },
    { id: "Accessibility", maxValue: 100 },
  ];

  return (
    <Container ref={ref} id="example-developn" className="slideIntoViewRight">
      <Wrapper style={{ background: theme.backgroundColor }}>
        {charts.map(({ id, maxValue }) => (
          <PieChart
            key={id}
            maxValue={maxValue}
            text={id}
            isElementVisible={isElementVisible}
            color={COLORS[1].start}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60%;
  width: 100%;
`;

export default ExampleDevelop;
