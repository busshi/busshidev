import Link from "next/link";
import styled from "styled-components";
import { CONTACTS } from "../lib/constants";
import { scrollIntoView } from "../lib/scroll";
import { useThemeState } from "../providers/Theme.provider";
import { LinkItem } from "../types/interfaces";
import Logo from "./svg/Logo";
import { useIsMobile } from "@busshi/react-hooks";
import { useTranslation } from "../hooks/useTranslation";

export const Column = ({
  span,
  elements,
}: {
  span: string;
  elements: LinkItem[];
}) => {
  const isMobile = useIsMobile();
  const { theme, isDarkMode } = useThemeState();

  return (
    <Links>
      <Span style={{ color: theme.middleFontColor }}>{span}</Span>
      <LinksBox>
        {elements.map((item) => {
          return (
            <LinkWrapper
              key={item.id}
              href={item.url}
              style={{ color: theme.middleFontColor }}
            >
              {isDarkMode ? item.logoDark : item.logo}
              {!isMobile ? (
                <LinkName $hoverColor={theme.mainColorInverted}>
                  {item.name}
                </LinkName>
              ) : (
                <div style={{ color: theme.background }}>.</div>
              )}
            </LinkWrapper>
          );
        })}
      </LinksBox>
    </Links>
  );
};

const NavColumn = ({
  span,
  links,
}: {
  span: string;
  links: { label: string; href: string }[];
}) => {
  const { theme } = useThemeState();

  return (
    <Links>
      <Span style={{ color: theme.middleFontColor }}>{span}</Span>
      <LinksBox>
        {links.map((link) => (
          <NavLinkWrapper
            key={link.href}
            href={link.href}
            style={{ color: theme.middleFontColor }}
            $hoverColor={theme.mainColorInverted}
          >
            {link.label}
          </NavLinkWrapper>
        ))}
      </LinksBox>
    </Links>
  );
};

const LogoWrapper = () => {
  const { theme } = useThemeState();
  return (
    <LogoContainer
      style={{
        background: theme.footerBackground,
        color: theme.mainColor,
      }}
      onClick={() => scrollIntoView("top")}
    >
      <Logo size={64} />
    </LogoContainer>
  );
};

export const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const { theme } = useThemeState();
  const t = useTranslation();
  const year = new Date().getFullYear();
  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.testimonials, href: "/#testi-title" },
    { label: t.nav.faq, href: "/#faq" },
  ];

  return (
    <footer>
      <Container
        style={{
          background: theme.footerBackground,
        }}
      >
        <NavColumn span={t.footer.navTitle} links={navLinks} />
        {isMobile && <Hr />}
        <Column span={t.footer.stayInTouch} elements={CONTACTS} />
        {isMobile && <Hr />}
      </Container>
      <BottomBar
        style={{
          background: theme.footerBackground,
          color: theme.middleFontColor,
        }}
      >
        <LogoWrapper />
        <BottomText>
          <span>
            © {year} BusshiDev. {t.footer.rights}
          </span>
          <LegalLinks>
            <LegalLink
              href="/mentions-legales"
              $hoverColor={theme.mainColorInverted}
            >
              {t.footer.legalNotice}
            </LegalLink>
            <span>·</span>
            <LegalLink href="/cgu" $hoverColor={theme.mainColorInverted}>
              {t.footer.terms}
            </LegalLink>
          </LegalLinks>
        </BottomText>
      </BottomBar>
    </footer>
  );
};

const Container = styled.div`
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem 2.5rem 2rem;
  font-size: 0.75rem;
`;

const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const LegalLink = styled(Link)<{ $hoverColor: string }>`
  display: inline-block;
  color: inherit;
  cursor: pointer;
  padding: 0.4rem 0.3rem;
  margin: -0.4rem -0.3rem;
  transition: color var(--transition-delay) ease;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    margin: 2rem 0 1rem 0;
    align-items: center;
  }
`;

const Span = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--middle-letter-spacing);
  margin-bottom: 0.5rem;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.8rem;
  padding: 0.5rem;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const NavLinkWrapper = styled(Link)<{ $hoverColor: string }>`
  display: flex;
  align-items: center;
  height: 25px;
  font-size: 0.8rem;
  padding: 0.5rem;
  transition: color var(--transition-delay) ease;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;

const LinkName = styled.div<{ $hoverColor: string }>`
  transition: color var(--transition-delay) ease;

  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;

const LinksBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Hr = styled.hr`
  width: 15vw;
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: gray;
`;

export default Footer;
