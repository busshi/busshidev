import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../lib/constants";
import { useIsMobile } from "../hooks/useIsMobile";
import { useChatVisibleState } from "../providers/ChatVisible";

export const Contacts = ({
  setIsCalendlyVisible,
}: {
  setIsCalendlyVisible: (value: boolean) => void;
}) => {
  const isMobile = useIsMobile();
  const { setIsChatVisible } = useChatVisibleState();

  return (
    <Container>
      <Title>CONNECT FROM EVERYWHERE</Title>
      <ItemsWrapper>
        <Item onClick={() => setIsChatVisible(true)}>
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item onClick={() => setIsCalendlyVisible(true)}>
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        <Item>
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={isMobile ? 24 : 80} />
            <Text>Send an email</Text>
          </Link>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  color: var(--middle-font-color);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0.5rem;
  font-size: 5rem;
  margin: 0 1rem 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 0 3rem 0;
`;

export const Item = styled.div`
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
  border: 1px solid;
  border-radius: var(--border-radius);

  @media (max-width: 768px) {
    margin: 1.7rem;
    width: 4rem;
    height: 4rem;
  }

  a {
    color: var(--middle-font-color);
  }

  background-color: var(--light-background);
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-background);
  }

  :hover {
    border: 1px solid transparent;
    box-shadow: 0px 0px 3rem 0px var(--dark-background);
  }

  transition: all var(--transition-delay) ease;
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default Contacts;
