import styled from "styled-components";
import { useIsMobile } from "../../hooks/useIsMobile";

const ExampleBoost = () => {
  const isMobile = useIsMobile();
  return <Container isMobile={isMobile}></Container>;
};

const Container = styled.div<{ isMobile: boolean }>`
  // height: ${(props) => (props.isMobile ? "400px" : "100%")};
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &.slideIntoView {
    transition: all var(--transition-delay) ease;
  }

  &.slideIntoView[data-view="inview-top"],
  &.slideIntoView[data-view="inview-bottom"] {
    transform: translateY(0);
    opacity: 1;
  }

  &.slideIntoView[data-view="outview-top"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(-300px)" : "translateY(-400px)"};
    opacity: 0;
  }

  &.slideIntoView[data-view="outview-bottom"] {
    transform: ${(props) =>
      props.isMobile ? "translateY(300px)" : "translateY(400px)"};
    opacity: 0;
  }
`;

export default ExampleBoost;
