import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useIsDarkMode } from "../hooks/useIsDarkMode";
import { useIsMobile } from "../hooks/useIsMobile";
import { CONTACTS, OPENSOURCES } from "../lib/constants";
import { scrollIntoView } from "../lib/scroll";
import { LinkItem } from "../types/interfaces";

export const Column = ({
  span,
  elements,
}: {
  span: string;
  elements: LinkItem[];
}) => {
  const isDarkMode = useIsDarkMode();
  const isMobile = useIsMobile();

  return (
    <Links>
      <Span>{span}</Span>
      <LinksBox>
        {elements.map((item) => {
          return (
            <LinkWrapper key={item.id} href={item.url}>
              {isDarkMode ? item.logoDark : item.logo}
              {!isMobile && item.name}
            </LinkWrapper>
          );
        })}
      </LinksBox>
    </Links>
  );
};

const Logo = () => (
  <LogoContainer>
    <ImageBox
      onClick={() => scrollIntoView("top")}
      src="/logo.svg"
      alt="busshiDev"
      width={80}
      height={80}
    />
  </LogoContainer>
);

export const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <footer>
      <Container>
        <Column span="OPEN SOURCE CONTRIBUTIONS" elements={OPENSOURCES} />
        {isMobile && <Hr />}
        <Column span="CONTACTS" elements={CONTACTS} />
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
  background: var(--footer-light-background);

  @media (prefers-color-scheme: dark) {
    background: var(--footer-dark-background);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--footer-light-background);

  @media (prefers-color-scheme: dark) {
    background: var(--footer-dark-background);
    img {
      filter: invert(1);
    }
  }
  @media (max-width: 768px) {
    padding: 2rem;
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
  color: var(--middle-font-color);
  margin-bottom: 0.5rem;
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-size: 0.8rem;
  padding: 0.5rem;
  color: var(--middle-font-color);

  transition: color 0.3s ease;
  :hover {
    color: var(--main-light-font-color);
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      color: var(--main-dark-font-color);
    }
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