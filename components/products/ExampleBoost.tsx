import styled from "styled-components";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";

const ExampleBoost = () => {
  const isMobile = useIsMobile();
  useSlideIntoView(".slideIntoViewRight");
  return (
    <Container
      id="example-boost"
      className="slideIntoViewRight"
      isMobile={isMobile}
    ></Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  // height: ${(props) => (props.isMobile ? "400px" : "100%")};
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default ExampleBoost;
