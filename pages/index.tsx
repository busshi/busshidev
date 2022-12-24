import { NextPage } from "next";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { scrollIntoView } from "../lib/scroll";
import GetADemo from "./components/GetADemo";
import MobileSolutions from "./components/solutions/MobileSolutions";
import Solutions from "./components/solutions/Solutions";
import Technos from "./components/Technos";
import Testimonials from "./components/Testimonials";
import Titles from "./components/Titles";

const Home: NextPage = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <FirstPage>
        <Titles />
        <Intro>
          You have dreams. I have skills. We can build the future together...
        </Intro>
        <GetADemo />
        <Implementation onClick={() => scrollIntoView("solutions")}>
          <div>STEP-BY-STEP IMPLEMENTATION</div>
        </Implementation>
      </FirstPage>
      {isMobile ? <MobileSolutions /> : <Solutions />}
      <Testimonials />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const FirstPage = styled.div`
  min-height: 90vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--secondary-dark-color);
`;

const Intro = styled.div`
  margin: 2rem;
  padding: 0 1rem 0 1rem;
  font-size: 1.5rem;

  font-weight: var(--font-weight);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0;
  }
`;

const Implementation = styled.div`
  cursor: pointer;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;
  margin: 3rem;

  @media (max-width: 768px) {
    margin: 0;
  }

  color: var(--main-dark-color);

  @media (prefers-color-scheme: dark) {
    color: var(--main-light-color);
  }
`;

export default Home;
