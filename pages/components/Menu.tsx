import styled, { keyframes } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import { useEffect } from "react";

export const Menu = ({
  isHome,
  setMenuOpened,
}: {
  isHome: boolean;
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const isScrolling = useIsScrolling();

  useEffect(() => {
    isScrolling === "down" && setMenuOpened(false);
  }, [isScrolling, setMenuOpened]);

  return (
    <Container>
      <IoMdCloseCircleOutline
        style={{
          margin: "1rem",
          position: "absolute",
          top: "2rem",
          cursor: "pointer",
        }}
        size={40}
        onClick={() => setMenuOpened(false)}
      />
      <MenuItem
        onClick={() => {
          if (isHome) {
            scrollIntoView("solutions");
          } else router.push("/#solutions");
          setMenuOpened(false);
        }}
      >
        Solutions
      </MenuItem>
      <MenuItem>
        <Link href="https://busshi.fr">About Me</Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          if (isHome) {
            router.push("/contact");
          }
          setMenuOpened(false);
        }}
      >
        Contacts
      </MenuItem>
    </Container>
  );
};

const makeDark = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation: ${makeDark} var(--transition-delay) linear;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--light-background);

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-background);
  }
`;

const MenuItem = styled.div`
  font-size: 2rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--middle-letter-spacing);
  color: var(--secondary-dark-color);
  cursor: pointer;

  a {
    color: var(--secondary-dark-color);
  }

  transition: all var(--transition-delay) ease;
  :hover {
    opacity: 0.7;
  }
`;

export default Menu;
