import { FiFigma } from "react-icons/fi";
import { BsTerminalFill, BsRobot } from "react-icons/bs";
import { getT, Lang } from "./i18n";

const ICONS = [FiFigma, BsTerminalFill, BsRobot];
const IDS = ["websites", "applications", "ai-agents"];

export const buildOffers = (lang: Lang, size: number, color?: string) =>
  getT(lang).offers.items.map((item, index) => {
    const Icon = ICONS[index];
    return {
      id: IDS[index],
      title: item.title,
      tagline: item.tagline,
      bullets: item.bullets,
      icon: <Icon size={size} color={color} />,
    };
  });
