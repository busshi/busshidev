import styled, { keyframes } from "styled-components";
import { IoMdContact } from "react-icons/io";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import { Dispatch, SetStateAction, useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";

export const Menu = ({
  isHome,
  setMenuOpened,
  setReferenceElement,
}: {
  isHome: boolean;
  setMenuOpened: (value: boolean) => void;
  setReferenceElement: Dispatch<SetStateAction<HTMLDivElement | null>>;
}) => {
  const router = useRouter();
  const isScrolling = useIsScrolling();

  useEffect(() => {
    isScrolling === "down" && setMenuOpened(false);
  }, [isScrolling, setMenuOpened]);

  return (
    <Container ref={setReferenceElement}>
      <MenuItem
        onClick={() => {
          setMenuOpened(false);
          if (isHome) {
            router.push("/contact");
          }
        }}
      >
        <SiGooglemeet />
      </MenuItem>
      <Link href="https://busshi.fr">
        <MenuItem>
          <IoMdContact />
        </MenuItem>
      </Link>
      <MenuItem
        onClick={() => {
          setMenuOpened(false);
          if (isHome) {
            scrollIntoView("solutions");
          } else router.push("/#solutions");
        }}
      >
        <TbGridDots />
      </MenuItem>
    </Container>
  );
};

const makeDark = keyframes`
  from {
    opacity: 0%;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 100%;
    transform: none;
  }
`;

const Container = styled.div`
  display: flex;
  // border: solid;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  animation: ${makeDark} 0.3s ease;
  // width: 100vw;
  // height: 100vh;
  // position: absolute;
  // top: 0;
  // right: 0;
  z-index: 2;
  background-color: var(--main-light-color);

  @media (prefers-color-scheme: dark) {
    background-color: var(--main-dark-color);
  }
`;

const MenuItem = styled.div`
  font-size: 2rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--middle-letter-spacing);
  color: var(--secondary-dark-color);
  cursor: pointer;
  display: flex;
  align-items: center;

  a {
    color: var(--secondary-dark-color);
  }

  transition: all var(--transition-delay) ease;
  :hover {
    opacity: 0.7;
  }
`;

export default Menu;
