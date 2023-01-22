import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { CONTACTS, OPENSOURCES } from "../lib/constants";
import { scrollIntoView } from "../lib/scroll";
import { useThemeState } from "../providers/Theme.provider";
import { LinkItem } from "../types/interfaces";

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
              {!isDarkMode ? item.logoDark : item.logo}
              {!isMobile && (
                <LinkName hoverColor={theme.mainColorInverted}>
                  {item.name}
                </LinkName>
              )}
            </LinkWrapper>
          );
        })}
      </LinksBox>
    </Links>
  );
};

const Logo = () => {
  const { theme, isDarkMode } = useThemeState();
  return (
    <LogoContainer
      style={{
        background: theme.footerBackground,
        color: theme.mainColor,
      }}
      isDarkMode={isDarkMode}
    >
      <ImageBox
        onClick={() => scrollIntoView("top")}
        src="/logo.svg"
        alt="busshiDev"
        width={80}
        height={80}
      />
    </LogoContainer>
  );
};

export const Footer: React.FC = () => {
  const isMobile = useIsMobile();

  const { theme } = useThemeState();

  return (
    <footer>
      <Container
        style={{
          background: theme.footerBackground,
        }}
      >
        <Column span="OPEN SOURCE CONTRIBUTIONS" elements={OPENSOURCES} />
        {isMobile && <Hr />}
        <Column span="STAY IN TOUCH" elements={CONTACTS} />
        {isMobile && <Hr />}
      </Container>
      <Logo />
    </footer>
  );
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const LogoContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  img {
    filter: invert(${(props) => (props.isDarkMode ? 1 : 0)});
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    margin: 2rem;
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
  }
`;

const LinkName = styled.div<{ hoverColor: string }>`
  transition: color var(--transition-delay) ease;

  :hover {
    color: ${(props) => props.hoverColor};
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

const ImageBox = styled(Image)`
  cursor: pointer;
  border: solid;
  margin-bottom: 1rem;
`;

const Hr = styled.hr`
  width: 15vw;
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: gray;
`;

export default Footer;
