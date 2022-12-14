import styled from "styled-components";
import { useHandleScroll } from "../hooks/usehandleScroll";
import { Cards } from "./Cards";
import { GetADemo } from "./GetADemo";
import { Technos } from "./Technos";
import { Testimonials } from "./Testimonials";
import { Titles } from "./Titles";

export const Body: React.FC = () => {
  return (
    <Container>
      <FirstPage>
        <Titles />
        <Intro>
          You have dreams. I have skills. We can build the future together...
        </Intro>
        <GetADemo />
        <Guidance
          onClick={() => useHandleScroll(document.getElementById("#steps"))}
        >
          <div>STEP BY STEP GUIDANCE</div>
        </Guidance>
      </FirstPage>
      <Cards />
      <Testimonials />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const FirstPage = styled.div`
  height: 90vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--secondary-dark-color);
`;

const Intro = styled.div`
  margin: 2rem;
  font-size: 1.5rem;

  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0;
  }
`;

const Guidance = styled.div`
  cursor: pointer;
  margin-top: 3rem;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;
