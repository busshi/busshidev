import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useIsDarkMode } from "../../hooks/useIsDarkMode";
import { useIsMobile } from "../../hooks/useIsMobile";
import { CONTACTS, OPENSOURCES } from "../../lib/constants";
import { scrollIntoView } from "../../lib/scrollIntoView";
import { LinkItem } from "../../types/interfaces";

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
    Powered by
    <ImageBox
      onClick={() => scrollIntoView("top")}
      src="/logo.svg"
      alt="busshiDev"
      width={100}
      height={100}
    />
    © 2022
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
  background: var(--footer-light-color);

  @media (prefers-color-scheme: dark) {
    background: var(--footer-dark-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-light-color);
  color: var(--dark-background);

  @media (prefers-color-scheme: dark) {
    color: var(--secondary-dark-color);
    background: var(--footer-dark-color);
    img {
      filter: invert(1);
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
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
  color: var(--main-dark-color);
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: var(--secondary-dark-color);
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-size: 0.8rem;
  padding: 0.5rem;
  color: var(--footer-dark-color);

  transition: color 0.3s ease;
  :hover {
    color: var(--main-dark-color);
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--secondary-dark-color);
    :hover {
      color: var(--main-light-color);
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
`;

const Hr = styled.hr`
  width: 15vw;
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: gray;
`;

export default Footer;
