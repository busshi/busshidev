import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../../hooks/useIsMobile";
import Link from "next/link";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import { SITE_URL } from "../../lib/constants";

export const TopBar = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const isHome = router.asPath !== "/contact";

  return (
    <Container id="top">
      <LinkBox href="/">
        <ImageBox
          src="/logo.png"
          width={isMobile ? 50 : 80}
          height={isMobile ? 50 : 80}
          alt="busshiDev"
        />
      </LinkBox>
      {isMobile ? (
        <></>
      ) : (
        <Buttons>
          {isHome ? (
            <Button onClick={() => scrollIntoView("solutions")}>
              Solutions
            </Button>
          ) : (
            <Link href={`${SITE_URL}/#solutions`}>
              <Button>Solutions</Button>
            </Link>
          )}
          <Link href="https://busshi.fr">
            <Button>About me</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </Buttons>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    padding-top: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`;

const LinkBox = styled(Link)`
  cursor: pointer;
`;

const ImageBox = styled(Image)`
  margin: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const Button = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: var(--secondary-dark-color);
  transition: color var(--transition-delay) ease;
  :hover {
    color: var(--main-dark-color);
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      color: var(--secondary-light-color);
    }
  }
`;

export default TopBar;
