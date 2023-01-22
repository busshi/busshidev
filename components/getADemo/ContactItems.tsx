import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { EMAIL } from "../../lib/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useChatVisibleState } from "../../providers/ChatVisible.provider";
import { useThemeState } from "../../providers/Theme.provider";
import { RxCrossCircled } from "react-icons/rx";
import { useContactMenuOpenedState } from "../../providers/ContactMenu.provider";
import { useCalendlyVisibleState } from "../../providers/CalendlyVisible.provider";
import { useListenForOutsideClicks } from "../../hooks/useListenForOutsideClick";
import {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useHighlightedColorState } from "../../providers/HighlightedColor.provider";
import { Color } from "../../types/interfaces";

const Item = ({
  setRef,
  children,
  onClick,
}: {
  setRef: Dispatch<SetStateAction<HTMLElement | null>>;
  children: ReactNode;
  onClick?: () => void;
} & ComponentProps<typeof ContactItems>) => {
  const { theme } = useThemeState();
  const { highlightedColor } = useHighlightedColorState();

  return (
    <ItemWrapper
      ref={setRef}
      style={{ backgroundColor: theme.background }}
      hoverColor={theme.mainColorInverted}
      onClick={onClick}
      highlightedColor={highlightedColor}
    >
      {children}
    </ItemWrapper>
  );
};

export const ContactItems = () => {
  const isMobile = useIsMobile();
  const { setIsChatVisible } = useChatVisibleState();
  const { setIsContactMenuOpened } = useContactMenuOpenedState();
  const { setIsCalendlyVisible } = useCalendlyVisibleState();
  const { theme } = useThemeState();

  const [ref1, setRef1] = useState<HTMLElement | null>(null);
  const [ref2, setRef2] = useState<HTMLElement | null>(null);
  const [ref3, setRef3] = useState<HTMLElement | null>(null);
  useListenForOutsideClicks([ref1, ref2, ref3], () =>
    setIsContactMenuOpened(false)
  );

  return (
    <Container
      style={{
        color: theme.middleFontColor,
      }}
    >
      <Cross
        size={26}
        color={"var(--middle-font-color)"}
        onClick={() => setIsContactMenuOpened(false)}
      />
      <Title>CONNECT FROM EVERYWHERE</Title>
      <ItemsWrapper>
        <Item
          setRef={setRef1}
          onClick={() => {
            setIsChatVisible(true);
            setIsContactMenuOpened(false);
          }}
        >
          <>
            <TfiHeadphoneAlt size={80} />
            <Text>Chat with me</Text>
          </>
        </Item>
        <Item
          setRef={setRef2}
          onClick={() => {
            setIsContactMenuOpened(false);
            setIsCalendlyVisible(true);
          }}
        >
          <>
            <SiGooglemeet size={80} />
            <Text>Book a meeting</Text>
          </>
        </Item>
        <Item setRef={setRef3}>
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={isMobile ? 28 : 54} />
            <Text>Send an email</Text>
          </Link>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  z-index: 2;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Cross = styled(RxCrossCircled)`
  position: absolute;
  top: 18px;
  left: 18px;
  cursor: pointer;
`;

const Title = styled.div`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0.5rem;
  text-align: center;

  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.div<{
  hoverColor: string;
  highlightedColor: Color;
}>`
  cursor: pointer;
  margin: 2rem;
  padding: 2rem;
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => `${props.highlightedColor.stop}`};

  text-align: center;
  border-radius: var(--border-radius);
  opacity: 0.8;
  z-index: 0;

  @media (max-width: 768px) {
    margin: 1.7rem;
    width: 4rem;
    height: 4rem;
  }

  a {
    color: ${(props) => `${props.highlightedColor.stop}`};
  }

  box-shadow: ${(props) => `0px 0px 30px 0px ${props.highlightedColor.start}`};
  :hover {
    box-shadow: ${(props) => `0px 0px 3rem 0px ${props.hoverColor}`};
  }

  transition: box-shadow var(--transition-delay) ease;

  // Text gradient color
  background: ${(props) =>
    `-webkit-linear-gradient(180deg, ${props.highlightedColor.stop}, ${props.highlightedColor.start})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--middle-letter-spacing);

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0;
  }
`;

export default ContactItems;
