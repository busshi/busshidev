import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useIsDarkMode } from "../../hooks/useIsDarkMode";
import { useIsMobile } from "../../hooks/useIsMobile";
import { LINKS, OPENSOURCES } from "../../lib/constants";
import { scrollIntoView } from "../../lib/scrollIntoView";

export const Footer: React.FC = () => {
  const isDarkMode = useIsDarkMode();
  const isMobile = useIsMobile();

  return (
    <Container>
      {isMobile ? (
        <>
          <Links>
            Open source contributions
            {OPENSOURCES.map((item) => {
              return (
                <LinkWrapper key={item.id} href={item.url}>
                  {item.logo}
                  <div>{item.name}</div>
                </LinkWrapper>
              );
            })}
          </Links>
          <Links>
            Contacts
            {LINKS.map((item) => {
              return (
                <LinkWrapper key={item.id} href={item.url}>
                  {isDarkMode ? item.logoDark : item.logo}
                  <div>{item.name}</div>
                </LinkWrapper>
              );
            })}
          </Links>
          <TextBox>
            Powered by
            <ImageBox
              onClick={() => scrollIntoView("solutions")}
              src="/logo.svg"
              alt="busshiDev"
              width={100}
              height={100}
            />
          </TextBox>
        </>
      ) : (
        <>
          <Links>
            Contacts
            {LINKS.map((item) => {
              return (
                <LinkWrapper key={item.id} href={item.url}>
                  {isDarkMode ? item.logoDark : item.logo}
                  <div>{item.name}</div>
                </LinkWrapper>
              );
            })}
          </Links>
          <TextBox>
            Powered by
            <ImageBox
              onClick={() => scrollIntoView("solutions")}
              src="/logo.svg"
              alt="busshiDev"
              width={100}
              height={100}
            />
          </TextBox>
          <Links>
            Open source contributions
            {OPENSOURCES.map((item) => {
              return (
                <LinkWrapper key={item.id} href={item.url}>
                  {item.logo}
                  <div>{item.name}</div>
                </LinkWrapper>
              );
            })}
          </Links>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--footer-light-color);

  @media (prefers-color-scheme: dark) {
    background: var(--footer-dark-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem;
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary-dark-color);

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`;

const ImageBox = styled(Image)`
  cursor: pointer;
`;

export default Footer;
