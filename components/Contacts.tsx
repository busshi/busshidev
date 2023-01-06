import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../lib/constants";
import { useIsMobile } from "../hooks/useIsMobile";
import { useChatVisibleState } from "../providers/ChatVisible.provider";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import { Color } from "../types/interfaces";
import dynamic from "next/dynamic";
import { useThemeState } from "../providers/Theme.provider";
const SpinningGlobe = dynamic(() => import("./Globe"), { ssr: false });

export const Contacts = ({
  setIsCalendlyVisible,
}: {
  setIsCalendlyVisible: (value: boolean) => void;
}) => {
  const isMobile = useIsMobile();
  const { setIsChatVisible } = useChatVisibleState();
  const { highlightedColor } = useHighlightedColorState();
  const { theme } = useThemeState();

  return (
    <Container style={{ color: theme.middleFontColor }}>
      <Title highlightedColor={highlightedColor}>CONNECT FROM EVERYWHERE</Title>
      <SpinningGlobe />
      <ItemsWrapper>
        <Item
          onClick={() => setIsChatVisible(true)}
          style={{ backgroundColor: theme.background }}
        >
          <TfiHeadphoneAlt size={80} />
          <Text>Chat with me</Text>
        </Item>
        <Item
          onClick={() => setIsCalendlyVisible(true)}
          style={{ backgroundColor: theme.background }}
        >
          <SiGooglemeet size={80} />
          <Text>Book a meeting</Text>
        </Item>
        <Item style={{ backgroundColor: theme.background }}>
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={isMobile ? 24 : 40} />
            <Text>Send an email</Text>
          </Link>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  // color: var(--middle-font-color);
  display: flex;
  flex-direction: column;
  position: relative;

  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled.div<{ highlightedColor: Color }>`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0.5rem;
  font-size: 5rem;
  margin: 0 1rem 1rem 1rem;
  text-align: center;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  text-shadow: none;
  transition: none;

  @media (prefers-color-scheme: dark) {
    // text-shadow: ${(props) =>
      `0px 0px 30px ${props.highlightedColor.start}`};
    // transition: text-shadow 1s ease;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem 0 20rem 0;

  @media (max-width: 768px) {
    margin: 5rem 0 5rem 0;
  }
`;

export const Item = styled.div`
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

  // @media (prefers-color-scheme: dark) {
  //   background-color: var(--dark-background);
  // }

  :hover {
    border: 1px solid transparent;
    box-shadow: 0px 0px 3rem 0px var(--dark-background);
  }

  transition: box-shadow var(--transition-delay) ease;
  transition: background-color var(--long-transition-delay) ease;
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default Contacts;
