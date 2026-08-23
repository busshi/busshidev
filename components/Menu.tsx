import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDown, IoIosApps } from "react-icons/io";
import { AiOutlineStar, AiOutlineQuestionCircle } from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";
import { COLORS } from "../lib/constants";
import { buildOffers } from "../lib/offers";
import { BuildContactsMenu } from "../lib/mobileMenu";
import { useThemeState } from "../providers/Theme.provider";
import { useHighlightedColorState } from "../providers/HighlightedColor.provider";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { useTranslation } from "../hooks/useTranslation";
import { Lang } from "../lib/i18n";

export const Menu = ({
  setMenuOpened,
}: {
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const [servicesOpened, setServicesOpened] = useState(true);
  const [contactOpened, setContactOpened] = useState(false);
  const { isDarkMode, theme } = useThemeState();
  const { highlightedColor } = useHighlightedColorState();
  const t = useTranslation();
  // Build offers array with icon size of 16px
  const offers = buildOffers((router.locale as Lang) || "fr", 16);
  const contacts = BuildContactsMenu(setMenuOpened);

  const closeAllExcept = (opened: "services" | "contact" | null) => {
    setServicesOpened(opened === "services");
    setContactOpened(opened === "contact");
  };

  return (
    <Container
      style={{ color: theme.middleFontColor, background: theme.mainColor }}
    >
      <MenuItem style={{ borderColor: theme.middleFontColor }}>
        <Item
          $isDarkMode={isDarkMode}
          onClick={() => closeAllExcept(servicesOpened ? null : "services")}
        >
          <ItemLabel>
            <IconCircle
              style={{
                color: servicesOpened ? highlightedColor.start : "inherit",
              }}
            >
              <IoIosApps />
            </IconCircle>
            {t.nav.services}
          </ItemLabel>
          <Chevron $isOpen={servicesOpened}>
            <IoIosArrowDown />
          </Chevron>
        </Item>
        <SubMenuGrid $isOpen={servicesOpened}>
          <SubMenuInner>
            <SubMenuItems>
              {offers.map(({ id, title, icon }, index) => (
                <SubMenuItem
                  key={id}
                  onClick={() => {
                    router.push(`/#${id}`);
                    setMenuOpened(false);
                  }}
                  $hoverColor={COLORS[index % COLORS.length].start}
                  $isDarkMode={isDarkMode}
                >
                  {icon}
                  {title}
                </SubMenuItem>
              ))}
            </SubMenuItems>
          </SubMenuInner>
        </SubMenuGrid>
      </MenuItem>

      <MenuItem style={{ borderColor: theme.middleFontColor }}>
        <Item
          $isDarkMode={isDarkMode}
          onClick={() => {
            router.push("/#testi-title");
            setMenuOpened(false);
          }}
        >
          <ItemLabel>
            <IconCircle>
              <AiOutlineStar />
            </IconCircle>
            {t.nav.testimonials}
          </ItemLabel>
        </Item>
      </MenuItem>

      <MenuItem style={{ borderColor: theme.middleFontColor }}>
        <Item
          $isDarkMode={isDarkMode}
          onClick={() => {
            router.push("/#faq");
            setMenuOpened(false);
          }}
        >
          <ItemLabel>
            <IconCircle>
              <AiOutlineQuestionCircle />
            </IconCircle>
            {t.nav.faq}
          </ItemLabel>
        </Item>
      </MenuItem>

      <MenuItem style={{ borderColor: theme.middleFontColor }}>
        <Item
          $isDarkMode={isDarkMode}
          onClick={() => closeAllExcept(contactOpened ? null : "contact")}
        >
          <ItemLabel>
            <IconCircle
              style={{
                color: contactOpened ? highlightedColor.start : "inherit",
              }}
            >
              <SiGooglemeet />
            </IconCircle>
            {t.nav.bookCall}
          </ItemLabel>
          <Chevron $isOpen={contactOpened}>
            <IoIosArrowDown />
          </Chevron>
        </Item>
        <SubMenuGrid $isOpen={contactOpened}>
          <SubMenuInner>
            <SubMenuItems>
              {contacts.map(({ id, text, icon, onClick }) => (
                <SubMenuItem key={id} onClick={onClick} $isDarkMode={isDarkMode}>
                  {icon} {id !== "email" && text}
                </SubMenuItem>
              ))}
            </SubMenuItems>
          </SubMenuInner>
        </SubMenuGrid>
      </MenuItem>

      <DarkModeRow>
        <ItemLabel>{t.nav.darkMode}</ItemLabel>
        <DarkModeSwitcher />
      </DarkModeRow>
    </Container>
  );
};

const animate = keyframes`
  from {
    opacity: 0%;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 100%;
    transform: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  animation: ${animate} 0.3s ease;
  width: 100vw;
  height: 88vh;
  padding: 0.5rem 1.5rem 0 1.5rem;
  box-sizing: border-box;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  border-bottom: 1px solid;
`;

const Item = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color var(--transition-delay) ease;
  font-size: 1.1rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  padding: 14px 4px;

  &:hover {
    color: ${(props) =>
      props.$isDarkMode ? "var(--main-light-color)" : "var(--main-dark-color)"};
  }
`;

const ItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: color var(--transition-delay) ease;
`;

const Chevron = styled.div<{ $isOpen: boolean }>`
  display: flex;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform var(--transition-delay) ease;
  font-size: 1rem;
`;

const SubMenuGrid = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows var(--middle-transition-delay) ease;
`;

const SubMenuInner = styled.div`
  overflow: hidden;
`;

const SubMenuItems = styled.div`
  padding: 0.25rem 0 1.25rem 0;
`;

const SubMenuItem = styled.div<{ $isDarkMode: boolean; $hoverColor?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  gap: 1rem;
  padding: 0.6rem 0.5rem;
  transition: color var(--transition-delay) ease;
  font-weight: var(--middle-font-weight);
  letter-spacing: var(--letter-spacing);

  a {
    color: var(--main-dark-color);
  }

  &:hover {
    color: ${(props) =>
      props.$hoverColor
        ? props.$hoverColor
        : props.$isDarkMode
        ? "var(--main-light-color)"
        : "var(--main-dark-color)"};
  }
`;

const DarkModeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4px;
  font-size: 1rem;
  font-weight: var(--middle-font-weight);
`;

export default Menu;
