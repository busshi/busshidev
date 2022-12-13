import { useEffect, useState } from "react";
import styled from "styled-components";
import { Cards } from "./Cards";
import { Technos } from "./Technos";
import { Testimonials } from "./Testimonials";
import { Titles } from "./Titles";

export const Body: React.FC = () => {
  const [highlighted, setHighlighted] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlighted((c) => (c + 1 >= 4 ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [highlighted]);

  return (
    <Container>
      <Titles highlighted={highlighted} setHighlighted={setHighlighted} />
      <Cards highlighted={highlighted} />
      <Testimonials />
      <Technos />
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
