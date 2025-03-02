import Link from "next/link";
import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { CONTACTS, EMAIL } from "../lib/constants";
import { useChatVisibleState } from "../providers/ChatVisible.provider";
import { useThemeState } from "../providers/Theme.provider";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import MaltIcon from "./svg/Malt";

const SpinningGlobe = dynamic(() => import("./getADemo/SpinningGlobe"), {
  ssr: false,
});

const Item = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const { theme } = useThemeState();

  return (
    <ItemWrapper
      className={className ?? ""}
      style={{ backgroundColor: theme.background }}
      hoverColor={theme.mainColorInverted}
      onClick={onClick && onClick}
    >
      {children}
    </ItemWrapper>
  );
};

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
        <Item onClick={() => setIsChatVisible(true)}>
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item onClick={() => setIsCalendlyVisible(true)}>
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        {/* Laptop Items with big icon size */}
        <Item className="laptop">
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={40} />
            <Text>Send an email</Text>
          </Link>
        </Item>
        <Item className="laptop">
          <Link href={CONTACTS[1].url}>
            <MaltIcon
              color={theme.middleFontColor}
              backgroundColor={theme.backgroundColor}
              size="40px"
            />
            <Text>Work together</Text>
          </Link>
        </Item>
        {/* Mobile Items with small icon size */}
        <Item className="mobile">
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={24} />
            <Text>Send an email</Text>
          </Link>
        </Item>
        <Item className="mobile">
          <Link href={CONTACTS[1].url}>
            <MaltIcon
              color={theme.middleFontColor}
              backgroundColor={theme.backgroundColor}
              size="25px"
            />
            <Text>Work together</Text>
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

  gap: 3rem;
  margin-top: 8rem;
  @media (max-width: 768px) {
    gap: 0;
    margin-top: 3rem;
  }
`;

export const ItemWrapper = styled.div<{ hoverColor: string }>`
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
  opacity: 0.8;

  text-align: center;

  border: 1px solid transparent;
  box-shadow: ${(props) => `0px 0px 1rem 0px ${props.hoverColor}`};
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
    opacity: 1;
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
