import { useIsMobile } from "../../hooks/useIsMobile";
import { Container } from "./ExampleDesign";

const ExampleBoost = () => {
  const isMobile = useIsMobile();
  return <Container isMobile={isMobile}></Container>;
};

export default ExampleBoost;
