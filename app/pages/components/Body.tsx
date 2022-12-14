import styled from "styled-components";
import { Cards } from "./Cards";
import { GetADemo } from "./GetADemo";
import { Technos } from "./Technos";
import { Testimonials } from "./Testimonials";
import { Titles } from "./Titles";

export const Body: React.FC = () => {
  return (
    <Container>
      <Titles />
      <Intro>
        Have a dream? Want to make it a reality? Let's work together.
      </Intro>
      <GetADemo />
      <Cards />
      <Testimonials />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Intro = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 1.5rem;
  color: #888;

  line-height: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 12px;
  }
`;
