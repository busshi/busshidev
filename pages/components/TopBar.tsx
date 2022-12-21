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
  const isHome = router.asPath === "/";

  return (
    <Container id="top">
      <LinkBox href="/">
        <Image
          src="/logo.svg"
          width={isMobile ? 95 : 119}
          height={isMobile ? 80 : 100}
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
  height: 10vh;

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const Button = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
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

const LinkBox = styled(Link)`
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export default TopBar;
