import { useRouter } from "next/router";
import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemeet } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useChatVisibleState } from "../providers/ChatVisible";

export const buildContactsMenu = (setMenuOpened: (value: boolean) => void) => {
  const router = useRouter();
  const isHome = router.asPath !== "/contact";
  const { setIsChatVisible } = useChatVisibleState();

  return [
    {
      id: "chat",
      text: "Chat with me",
      icon: <TfiHeadphoneAlt size={16} color="var(--middle-font)color)" />,
      onClick: () => {
        isHome && router.push("/contact");
        setIsChatVisible(true);
        setMenuOpened(false);
      },
    },
    {
      id: "meet",
      text: "Book a meeting",
      icon: <SiGooglemeet size={16} color="var(--middle-font)color)" />,
      onClick: () => {
        isHome && router.push("/contact");
        setMenuOpened(false);
      },
    },
    {
      id: "email",
      text: "Send an email",
      icon: <HiOutlineMail size={16} color="var(--middle-font)color)" />,
      onClick: () => {
        isHome && router.push("/contact");
        setMenuOpened(false);
      },
    },
  ];
};
