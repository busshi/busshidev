import styled from "styled-components";
import Link from "next/link";
import { scrollIntoView } from "../lib/scroll";
import { RiMenu2Fill } from "react-icons/ri";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Menu from "./Menu";
import { RxCross2 } from "react-icons/rx";
import { useThemeState } from "../providers/Theme.provider";
import Logo from "./svg/Logo";
import { useRouter } from "next/router";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  const { theme } = useThemeState();
  return (
    <ButtonWrapper
      color={theme.middleFontColor}
      hoverColor={theme.mainColorInverted}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export const TopBar = ({
  isMenuOpened,
  setIsMenuOpened,
}: {
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme, isDarkMode } = useThemeState();
  const router = useRouter();
  const isHome =
    router.pathname !== "/contact" && router.query.schedule !== "true";

  return (
    <div>
      <Container
        id="top"
        style={{ color: theme.mainColorInverted }}
        isDarkMode={isDarkMode}
      >
        {/* Menu for mobile screen */}
        <MobileLogoBox href="/" style={{ color: theme.background }}>
          <Logo size={50} />.
        </MobileLogoBox>
        <MobileMenuIcon
          style={{ color: theme.mainColorInverted }}
          onClick={() => setIsMenuOpened(isMenuOpened ? false : true)}
        >
          {isMenuOpened ? <RxCross2 size={24} /> : <RiMenu2Fill size={24} />}
        </MobileMenuIcon>

        {/* Menu for laptop screen */}
        <LogoBox href="/" style={{ color: theme.background }}>
          <Logo size={80} />.
        </LogoBox>
        <LaptopButtons>
          <Button
            onClick={() =>
              isHome ? scrollIntoView("solutions") : router.push("/#solutions")
            }
          >
            Solutions
          </Button>
          {/* <Link href={BLOG_URL}>
            <Button>About me</Button>
          </Link> */}
          <Button
            onClick={() =>
              isHome
                ? scrollIntoView("testi-title")
                : router.push("/#testi-title")
            }
          >
            Testimonials
          </Button>
          <Link href={isHome ? "/contact" : "/"}>
            <DemoButton
              color={theme.background}
              background={theme.mainColorInverted}
            >
              {isHome ? "Get a Demo" : "Home"}
            </DemoButton>
          </Link>
        </LaptopButtons>
      </Container>
      {isMenuOpened && <Menu setMenuOpened={setIsMenuOpened} />}
    </div>
  );
};

const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

const LogoBox = styled(Link)`
  cursor: pointer;
  margin: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLogoBox = styled(Link)`
  cursor: pointer;
  margin: 1rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuIcon = styled.div`
  cursor: pointer;
  margin: 0 1rem 0 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const LaptopButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div<{ color: string; hoverColor: string }>`
  padding: 0.5rem 1rem 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  transition: color var(--transition-delay) ease;
  color: ${(props) => props.color};

  :hover {
    color: ${(props) => props.hoverColor};
  }
`;

const DemoButton = styled.div<{ color: string; background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: all var(--transition-delay) ease;
  cursor: pointer;
  border: 1px solid ${(props) => props.background};
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  :hover {
    color: ${(props) => props.background};
    background: ${(props) => props.color};
  }
`;

export default TopBar;
