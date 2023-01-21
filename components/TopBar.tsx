import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";
import Link from "next/link";
import { scrollIntoView } from "../lib/scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";
import Menu from "./Menu";
import { RxCross2 } from "react-icons/rx";
// import { BLOG_URL } from "../lib/constants";
import { useThemeState } from "../providers/Theme.provider";
import { useContactMenuOpenedState } from "../providers/ContactMenu.provider";

const Button = ({
  children,
}: {
  children: ReactNode;
} & ComponentProps<typeof ButtonWrapper>) => {
  const { theme } = useThemeState();
  return (
    <ButtonWrapper
      color={theme.middleFontColor}
      hoverColor={theme.mainColorInverted}
    >
      {children}
    </ButtonWrapper>
  );
};

export const TopBar = ({
  menuOpened,
  setMenuOpened,
}: {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const isMobile = useIsMobile();
  const { theme, isDarkMode } = useThemeState();
  const { setIsContactMenuOpened } = useContactMenuOpenedState();

  return (
    <div>
      <Container
        id="top"
        style={{ color: theme.mainColorInverted }}
        isDarkMode={isDarkMode}
      >
        <LinkBox href="/">
          <ImageBox
            src="/logo.svg"
            width={isMobile ? 50 : 80}
            height={isMobile ? 50 : 80}
            alt="busshiDev"
          />
        </LinkBox>
        {/* Menu for mobile screen */}
        <MobileMenuIcon
          style={{ color: theme.mainColorInverted }}
          onClick={() => setMenuOpened(menuOpened ? false : true)}
        >
          {menuOpened ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
        </MobileMenuIcon>

        {/* Menu for laptop screen */}
        <LaptopButtons>
          <Button onClick={() => scrollIntoView("solutions")}>Solutions</Button>
          {/* <Link href={BLOG_URL}>
            <Button>About me</Button>
          </Link> */}
          <Button onClick={() => scrollIntoView("testi", "center")}>
            Testimonials
          </Button>
          <DemoButton
            onClick={() => setIsContactMenuOpened(true)}
            color={theme.background}
            background={theme.mainColorInverted}
          >
            Get a Demo
          </DemoButton>
        </LaptopButtons>
      </Container>
      {menuOpened && <Menu setMenuOpened={setMenuOpened} />}
    </div>
  );
};

const Container = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  img {
    filter: invert(${(props) => (props.isDarkMode ? 1 : 0)});
  }
`;

const LinkBox = styled(Link)`
  cursor: pointer;
`;

const ImageBox = styled(Image)`
  margin: 1rem;
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
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
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: color, background, border var(--transition-delay) ease;
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
