import styled, { keyframes } from "styled-components";
// import { IoMdContact } from "react-icons/io";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import { useEffect, useState } from "react";
// import { TbGridDots } from "react-icons/tb";
// import { SiGooglemeet } from "react-icons/si";

export const Menu = ({
  menuOpened,
  setMenuOpened,
}: {
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const isHome = router.asPath !== "/contact";
  const isScrolling = useIsScrolling();
  const [solutionsOpened, setSolutionsOpened] = useState(false);
  const [contactOpened, setContactOpened] = useState(false);

  useEffect(() => {
    isScrolling === "down" && setMenuOpened(false);
  }, [isScrolling, setMenuOpened]);

  return (
    <div>
      <Hr />
      <Container>
        <MenuItem
          onClick={() => {
            setSolutionsOpened(true);
            // if (isHome) {
            //   scrollIntoView("solutions");
            // } else router.push("/#solutions");
          }}
        >
          {/* <TbGridDots /> */}
          <div onClick={() => setContactOpened(false)}>Solutions</div>
          {solutionsOpened && (
            <SubMenuItems onClick={() => setContactOpened(false)}>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(true);
                  if (isHome) {
                    scrollIntoView("design");
                  } else router.push("/#design");
                }}
              >
                Design
              </SubMenuItem>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(true);
                  if (isHome) {
                    scrollIntoView("develop");
                  } else router.push("/#develop");
                }}
              >
                Develop
              </SubMenuItem>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(true);
                  if (isHome) {
                    scrollIntoView("deploy");
                  } else router.push("/#deploy");
                }}
              >
                Deploy
              </SubMenuItem>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(true);
                  if (isHome) {
                    scrollIntoView("boost");
                  } else router.push("/#boost");
                }}
              >
                Boost
              </SubMenuItem>
            </SubMenuItems>
          )}
        </MenuItem>
        <MenuItem
          onClick={() => {
            setContactOpened(true);
            // if (isHome) {
            //   router.push("/contact");
            // }
          }}
        >
          {/* <SiGooglemeet /> */}
          <div onClick={() => setSolutionsOpened(false)}>Contact</div>
          {contactOpened && (
            <SubMenuItems onClick={() => setSolutionsOpened(false)}>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(false);
                  if (isHome) router.push("/contact");
                }}
              >
                Chat with me
              </SubMenuItem>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(false);
                  if (isHome) router.push("/contact");
                }}
              >
                Book a meeting
              </SubMenuItem>
              <SubMenuItem
                onClick={() => {
                  setMenuOpened(false);
                  if (isHome) router.push("/contact");
                }}
              >
                Send an email
              </SubMenuItem>
            </SubMenuItems>
          )}
        </MenuItem>
        <Link href="https://busshi.fr">
          <MenuItem>
            {/* <IoMdContact /> */}
            About me
          </MenuItem>
        </Link>
      </Container>
    </div>
  );
};

const Hr = styled.hr`
  width: 100vw;
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: gray;
`;

const makeDark = keyframes`
  from {
    opacity: 0%;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 100%;
    transform: none;
  }
`;

const Container = styled.div`
  display: flex;
  // border: solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  animation: ${makeDark} 0.3s ease;
  width: 100vw;
  height: 88vh;
  margin: 2rem;
  // position: absolute;
  // top: 0;
  // right: 0;
  // z-index: 2;
  background-color: var(--main-light-color);

  @media (prefers-color-scheme: dark) {
    background-color: var(--main-dark-color);
  }
`;

const MenuItem = styled.div`
  font-size: 1.5rem;
  // font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--middle-letter-spacing);
  color: var(--secondary-dark-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;

  :last-child {
    border-bottom: none;
  }

  a {
    color: var(--secondary-dark-color);
  }
`;

const SubMenuItems = styled.div``;

const SubMenuItem = styled.div`
  font-size: 1rem;
  transition: opacity var(--transition-delay) ease;
  :hover {
    opacity: 0.7;
  }
`;

export default Menu;
