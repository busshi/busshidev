import { HiOutlineMail } from "react-icons/hi";
import { SiGooglemeet } from "react-icons/si";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export const CONTACT_MENU = [
  {
    id: "chat",
    text: "Chat with me",
    icon: <TfiHeadphoneAlt size={16} color="var(--middle-font)color)" />,
  },
  {
    id: "meet",
    text: "Book a meeting",
    icon: <SiGooglemeet size={16} color="var(--middle-font)color)" />,
  },
  {
    id: "email",
    text: "Send an email",
    icon: <HiOutlineMail size={16} color="var(--middle-font)color)" />,
  },
];
