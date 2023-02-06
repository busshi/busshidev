import { useIsMobile } from "@busshi/react-hooks";
import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { COLORS, PAGE_SPEED_RESULTS } from "../../lib/constants";
import PieChart from "../PieChart";

const ExampleBoost = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const isMobile = useIsMobile();

  return (
    <Container id="example-boost" className="slideIntoViewRight">
      <Wrapper ref={ref}>
        <PieChart
          color={COLORS[3].start}
          maxValue={PAGE_SPEED_RESULTS[isMobile ? "mobile" : "laptop"].seo}
          text="SEO"
          isElementVisible={isElementVisible}
          fontSize="1.5rem"
          mobileFontSize="1.5rem"
        />
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
  width: 60%;
`;

export default ExampleBoost;
