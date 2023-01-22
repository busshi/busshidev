import styled from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { COLORS } from "../../lib/constants";
import { useThemeState } from "../../providers/Theme.provider";
import PieChart from "../PieChart";

const ExampleBoost = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();

  return (
    <Container ref={ref} id="example-developn" className="slideIntoViewRight">
      <Wrapper style={{ background: theme.backgroundColor }}>
        <PieChart
          color={COLORS[3].start}
          maxValue={100}
          text="SEO"
          isElementVisible={isElementVisible}
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
  width: 100%;
`;

export default ExampleBoost;
