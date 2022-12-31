import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemeet } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import styled from "styled-components";
import { useCalendlyVisibleState } from "../providers/CalendlyVisible";
import { useChatVisibleState } from "../providers/ChatVisible";
import { EMAIL } from "./constants";

export const BuildContactsMenu = (setMenuOpened: (value: boolean) => void) => {
  const router = useRouter();
  const isHome = router.asPath !== "/contact";
  const { setIsChatVisible } = useChatVisibleState();
  const { setIsCalendlyVisible } = useCalendlyVisibleState();

  return [
    {
      id: "chat",
      text: "Chat with me",
      icon: <TfiHeadphoneAlt size={16} color="var(--middle-font-color)" />,
      onClick: () => {
        isHome && router.push("/contact");
        setIsChatVisible(true);
        setMenuOpened(false);
      },
    },
    {
      id: "meet",
      text: "Book a meeting",
      icon: <SiGooglemeet size={16} color="var(--middle-font-color)" />,
      onClick: () => {
        isHome && router.push("/contact");
        setMenuOpened(false);
        setIsCalendlyVisible(true);
      },
    },
    {
      id: "email",
      text: "Send an email",
      icon: (
        <Item href={`mailto:${EMAIL}`}>
          <HiOutlineMail size={16} color="var(--middle-font-color)" />
          <Text>Send an email</Text>
        </Item>
      ),
      onClick: () => {
        setMenuOpened(false);
      },
    },
  ];
};

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.div`
  color: var(--secondary-light-font-color);
  @media (prefers-color-scheme: dark) {
    color: var(--middle-font-color);
  }
`;
