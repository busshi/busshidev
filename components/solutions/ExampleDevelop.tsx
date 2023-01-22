import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useIsMobile } from "../../hooks/useIsMobile";
import { COLORS, PAGE_SPEED_RESULTS } from "../../lib/constants";
import { useThemeState } from "../../providers/Theme.provider";
import PieChart from "../PieChart";

const ExampleDevelop = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();
  const isMobile = useIsMobile();
  const charts = [
    {
      id: "Performances",
      maxValue: PAGE_SPEED_RESULTS[isMobile ? "mobile" : "laptop"].performances,
    },
    {
      id: "Best Practices",
      maxValue:
        PAGE_SPEED_RESULTS[isMobile ? "mobile" : "laptop"].bestPractices,
    },
    {
      id: "Accessibility",
      maxValue:
        PAGE_SPEED_RESULTS[isMobile ? "mobile" : "laptop"].accessibility,
    },
  ];

  return (
    <Container ref={ref} id="example-developn" className="slideIntoViewRight">
      <Wrapper
        style={{ background: isMobile ? "none" : theme.backgroundColor }}
      >
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