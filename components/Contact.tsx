import Link from "next/link";
import styled from "styled-components";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { CONTACTS, COLORS, EMAIL } from "../lib/constants";
import { useChatVisibleState } from "../providers/ChatVisible.provider";
import { useThemeState } from "../providers/Theme.provider";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import MaltIcon from "./svg/Malt";
import { useTranslation } from "../hooks/useTranslation";
import { Color } from "../types/interfaces";

const SpinningGlobe = dynamic(() => import("./getADemo/SpinningGlobe"), {
  ssr: false,
});

const Item = ({
  area,
  color,
  onClick,
  href,
  icon,
  label,
}: {
  area: "chat" | "meet" | "email" | "malt";
  color: Color;
  onClick?: () => void;
  href?: string;
  icon: ReactNode;
  label: string;
}) => {
  const { theme, isDarkMode } = useThemeState();

  const content = (
    <>
      <IconCircle
        style={{
          background: `linear-gradient(135deg, ${color.start}, ${color.stop})`,
          borderColor: "transparent",
        }}
      >
        {icon}
      </IconCircle>
      <Text style={{ color: theme.fontColor }}>{label}</Text>
    </>
  );

  return (
    <ItemWrapper
      $isDarkMode={isDarkMode}
      style={{ background: theme.cardBackground, gridArea: area }}
      onClick={onClick}
    >
      {href ? <Link href={href}>{content}</Link> : content}
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
  const t = useTranslation();
  // Each icon just takes the page's own text color, same as the Offer
  // cards' icons sitting on their own gradient circles.
  const iconColor = theme.fontColor;

  return (
    <Container style={{ color: theme.middleFontColor }}>
      <Title style={{ color: theme.fontColor }}>{t.contact.title}</Title>
      <SpinningGlobe />
      <CardStage>
        <ItemsWrapper>
          <Item
            area="chat"
            color={COLORS[0]}
            onClick={() => setIsChatVisible(true)}
            icon={<TfiHeadphoneAlt size={22} color={iconColor} />}
            label={t.contact.chat}
          />
          <Item
            area="meet"
            color={COLORS[1]}
            onClick={() => setIsCalendlyVisible(true)}
            icon={<SiGooglemeet size={22} color={iconColor} />}
            label={t.contact.meet}
          />
          <Item
            area="email"
            color={COLORS[2]}
            href={`mailto:${EMAIL}`}
            icon={<HiOutlineMail size={22} color={iconColor} />}
            label={t.contact.email}
          />
          <Item
            area="malt"
            color={COLORS[3]}
            href={CONTACTS[1].url}
            icon={
              <MaltIcon
                color={iconColor}
                backgroundColor="transparent"
                size="22px"
              />
            }
            label={t.contact.workTogether}
          />
        </ItemsWrapper>
      </CardStage>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Unlike the homepage sections, Contact is the only thing on this page
     before the footer — the usual --section-gap bottom margin would just
     reserve dead space instead of letting the globe reach it. */
  margin: 0 1.5rem 0 1.5rem;

  @media (max-width: 768px) {
    margin: 0 1rem var(--section-gap) 1rem;
  }
`;

const Title = styled.div`
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  letter-spacing: 0.5rem;
  margin: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 2;

  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    letter-spacing: 0.25rem;
  }
`;

const CardStage = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  min-height: 26rem;
  /* Same trap as ItemsWrapper below: this box spans the whole card region
     above the globe, so its own empty background — not just ItemsWrapper's
     — has to let pointer events fall through to the canvas. */
  pointer-events: none;

  @media (max-width: 768px) {
    min-height: 20rem;
  }
`;

const ItemsWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  /* The grid box spans the whole stage, including the empty middle gutter
     where the globe should stay interactive — without this, that gutter
     silently swallows mouse events meant for the canvas underneath. */
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr 14rem 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "chat . meet"
    "email . malt";
  align-items: center;
  align-content: center;
  column-gap: 1.5rem;
  row-gap: 2rem;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;
    grid-template-areas:
      "chat meet"
      "email malt";
    gap: 1rem;
    max-width: none;
    padding: 0;
  }
`;

const ItemWrapper = styled.div<{ $isDarkMode: boolean }>`
  cursor: pointer;
  pointer-events: auto;
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.9rem;
  text-align: left;
  border-radius: 99999px;
  transition: transform var(--transition-delay) ease,
    box-shadow var(--transition-delay) ease;
  /* The fill barely differs from the page/globe behind it — dark mode gets
     away with that since the hover glow does the work, but on light the
     cards need a border + resting shadow just to read as cards instead of
     blending into the white behind them. */
  border: 1px solid
    ${(props) =>
      props.$isDarkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.08)"};
  box-shadow: ${(props) =>
    props.$isDarkMode ? "none" : "0 0.4rem 1.1rem rgba(15, 23, 42, 0.1)"};

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: ${(props) =>
      props.$isDarkMode
        ? "0 0.75rem 1.5rem rgba(0, 0, 0, 0.15)"
        : "0 0.75rem 1.75rem rgba(15, 23, 42, 0.16)"};
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.9rem;
    color: inherit;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.1rem 0.6rem 0.6rem;
    gap: 0.65rem;
  }
`;

const IconCircle = styled.div`
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 99999px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

const Text = styled.div`
  font-size: 0.95rem;
  font-weight: var(--middle-font-weight);
  line-height: var(--line-height);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default Contact;
