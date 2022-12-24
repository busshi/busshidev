import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../../lib/constants";
//import useIntersectionRatio from "../../hooks/useIntersectionRatio";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Contacts = ({
  setCalendlyVisible,
}: {
  setCalendlyVisible: (value: boolean) => void;
}) => {
  //   const [intersectionRatio, ref] =
  //     useIntersectionRatio<HTMLDivElement>("-50px");
  //   const [intersectionRatio2, ref2] =
  //     useIntersectionRatio<HTMLDivElement>("-50px");
  //   const [intersectionRatio3, ref3] =
  //     useIntersectionRatio<HTMLDivElement>("-50px");
  const isMobile = useIsMobile();

  return (
    <Container>
      <Title>3 WAYS TO REACH ME OUT</Title>
      <ItemsWrapper>
        <Item onClick={() => alert("comming soon...")}>
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item onClick={() => setCalendlyVisible(true)}>
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
  letter-spacing: var(--letter-spacing);
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
    margin: 1.7rem;
    width: 4rem;
    height: 4rem;
  }

  a {
    color: var(--middle-font-color);
  }
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
