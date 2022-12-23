import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../../lib/constants";
import useIntersectionRatio from "../../hooks/useIntersectionRatio";

export const Contacts = ({
  setCalendlyVisible,
}: {
  setCalendlyVisible: (value: boolean) => void;
}) => {
  const [intersectionRatio, ref] =
    useIntersectionRatio<HTMLDivElement>("-50px");
  const [intersectionRatio2, ref2] =
    useIntersectionRatio<HTMLDivElement>("-50px");
  const [intersectionRatio3, ref3] =
    useIntersectionRatio<HTMLDivElement>("-50px");

  return (
    <Container>
      <Title>3 WAYS TO REACH ME OUT</Title>
      <ItemsWrapper>
        <Item
          ref={ref}
          style={{ opacity: intersectionRatio }}
          onClick={() => alert("comming soon...")}
        >
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item
          ref={ref2}
          style={{ opacity: intersectionRatio2 }}
          onClick={() => setCalendlyVisible(true)}
        >
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        <Item ref={ref3} style={{ opacity: intersectionRatio3 }}>
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={80} />
            <Text>Send an email</Text>
          </Link>
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
    min-height: 6rem;
  }

  a {
    color: var(--secondary-dark-color);
  }
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Contacts;
