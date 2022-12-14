import styled from "styled-components";
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
        <Guidance>STEP BY STEP GUIDANCE</Guidance>
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
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 70px;
  color: var(--secondary-dark);
`;

const Intro = styled.div`
  margin: 30px;
  font-size: 1.4rem;

  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const Guidance = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;

  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;
