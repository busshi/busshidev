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

const Test = ({
  setRef,
  children,
  onClick,
}: {
  setRef: Dispatch<SetStateAction<HTMLElement | null>>;
  children: ReactNode;
  onClick?: () => void;
} & ComponentProps<typeof ContactItems>) => {
  const { theme } = useThemeState();

  return (
    <Item
      ref={setRef}
      style={{ backgroundColor: theme.background }}
      hoverColor={theme.mainColorInverted}
      onClick={onClick}
    >
      {children}
    </Item>
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
        <Test
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
        </Test>
        <Test setRef={setRef2} onClick={() => setIsCalendlyVisible(true)}>
          <>
            <SiGooglemeet size={80} />
            <Text>Book a meeting</Text>
          </>
        </Test>
        <Test setRef={setRef3}>
          <Link href={`mailto:${EMAIL}`}>
            <HiOutlineMail size={isMobile ? 24 : 40} />
            <Text>Send an email</Text>
          </Link>
        </Test>
      </ItemsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
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
  // margin: 0 1rem 1rem 1rem;
  text-align: center;
  // z-index: 2;

  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // margin: 5rem 0 20rem 0;

  @media (max-width: 768px) {
    // margin: 5rem 0 5rem 0;
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
  // z-index: 2;

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
`;

const Text = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export default ContactItems;
