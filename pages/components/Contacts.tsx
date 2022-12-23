import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../../lib/constants";

export const Contacts = ({
  setCalendlyVisible,
}: {
  setCalendlyVisible: (value: boolean) => void;
}) => {
  return (
    <Container>
      <Title>3 WAYS TO REACH ME OUT</Title>
      <ItemsWrapper>
        <Item onClick={() => alert("coming soon...")}>
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item onClick={() => setCalendlyVisible(true)}>
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        <Item>
          <HiOutlineMail size={80} />
          <Text>
            <Link href={`mailto:${EMAIL}`}>Send an email</Link>
          </Text>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  color: var(--secondary-dark-color);
`;

const Title = styled.div`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  font-size: 5rem;
  margin: 0 1rem 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 1rem;
  }
`;

const Item = styled.div`
  cursor: pointer;
  margin: 2rem;
  padding: 2rem;
  width: 12rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  border: solid;
  border-radius: var(--border-radius);

  @media (max-width: 768px) {
    width: 90%;
    height: 7rem;
  }
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 2rem;

  a {
    color: var(--secondary-dark-color);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
