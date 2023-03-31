import Link from "next/link";
import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { EMAIL } from "../lib/constants";
import { useChatVisibleState } from "../providers/ChatVisible.provider";
import { useThemeState } from "../providers/Theme.provider";
import dynamic from "next/dynamic";
const SpinningGlobe = dynamic(() => import("./getADemo/SpinningGlobe"), {
  ssr: false,
});

export const Contact = ({
  setIsCalendlyVisible,
}: {
  setIsCalendlyVisible: (value: boolean) => void;
}) => {
  const { setIsChatVisible } = useChatVisibleState();
  const { theme } = useThemeState();

  return (
    <Container style={{ color: theme.middleFontColor }}>
      <Title>CONNECT FROM EVERYWHERE</Title>
      <SpinningGlobe />
      <ItemsWrapper>
        <Item
          style={{ backgroundColor: theme.background }}
          hoverColor={theme.mainColorInverted}
          onClick={() => setIsChatVisible(true)}
        >
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item
          style={{ backgroundColor: theme.background }}
          hoverColor={theme.mainColorInverted}
          onClick={() => setIsCalendlyVisible(true)}
        >
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        <Item
          className="laptop"
          style={{ backgroundColor: theme.background }}
          hoverColor={theme.mainColorInverted}
        >
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={40} />
            <Text>Send an email</Text>
          </Link>
        </Item>
        <Item
          className="mobile"
          style={{ backgroundColor: theme.background }}
          hoverColor={theme.mainColorInverted}
        >
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={24} />
            <Text>Send an email</Text>
          </Link>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0.5rem;
  margin: 0 1rem 1rem 1rem;
  text-align: center;
  z-index: 2;

  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const Item = styled.div<{ hoverColor: string }>`
  cursor: pointer;
  margin: 2rem;
  padding: 2rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

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

  :hover {
    border: 1px solid transparent;
    box-shadow: ${(props) => `0px 0px 3rem 0px ${props.hoverColor}`};
  }

  transition: box-shadow var(--transition-delay) ease;
  transition: background-color var(--long-transition-delay) ease;

  &.mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  &.laptop {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default Contact;
