import styled from "styled-components";
import Image from "next/image";
import { useIsMobile } from "../../hooks/useIsMobile";
import Link from "next/link";
import { scrollIntoView } from "../../lib/scrollIntoView";

export const TopBar = () => {
  const isMobile = useIsMobile();

  return (
    <Container id="top">
      <Image
        src="/logo.svg"
        width={isMobile ? 95 : 119}
        height={isMobile ? 80 : 100}
        alt="busshiDev"
      />
      {isMobile ? (
        <></>
      ) : (
        <Buttons>
          <Button onClick={() => scrollIntoView("solutions")}>Solutions</Button>
          <Link href="https://busshi.fr">
            <Button>About me</Button>
          </Link>
          <Button>Contact</Button>
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

export default TopBar;
