import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemeet } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import styled from "styled-components";
import { useCalendlyVisibleState } from "../providers/CalendlyVisible.provider";
import { useChatVisibleState } from "../providers/ChatVisible.provider";
import { useThemeState } from "../providers/Theme.provider";
import { EMAIL } from "./constants";

export const BuildContactsMenu = (setMenuOpened: (value: boolean) => void) => {
  const { setIsChatVisible } = useChatVisibleState();
  const { setIsCalendlyVisible } = useCalendlyVisibleState();
  const { theme } = useThemeState();

  return [
    {
      id: "chat",
      text: "Chat with me",
      icon: <TfiHeadphoneAlt size={16} color="var(--middle-font-color)" />,
      onClick: () => {
        setIsChatVisible(true);
        setMenuOpened(false);
      },
    },
    {
      id: "meet",
      text: "Book a meeting",
      icon: <SiGooglemeet size={16} color="var(--middle-font-color)" />,
      onClick: () => {
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
          <Text hoverColor={theme.mainColorInverted}>Send an email</Text>
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

const Text = styled.div<{ hoverColor: string }>`
  color: var(--middle-font-color);

  :hover {
    color: ${(props) => props.hoverColor};
  }
`;