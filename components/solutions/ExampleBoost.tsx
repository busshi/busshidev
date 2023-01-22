import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { COLORS } from "../../lib/constants";
import PieChart from "../PieChart";

const ExampleBoost = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();

  return (
    <Container ref={ref} id="example-developn" className="slideIntoViewRight">
      <Wrapper>
        <PieChart
          color={COLORS[3].start}
          maxValue={100}
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
