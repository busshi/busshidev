import styled, { keyframes } from "styled-components";
// import { IoMdContact } from "react-icons/io";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import Link from "next/link";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import { useEffect, useState } from "react";
// import { TbGridDots } from "react-icons/tb";
// import { SiGooglemeet } from "react-icons/si";
import { IoIosArrowDropdown } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { BsGraphUp, BsTerminalFill } from "react-icons/bs";
import { SlRocket } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

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
  const [solutionsOpened, setSolutionsOpened] = useState(true);
  const [contactOpened, setContactOpened] = useState(false);

  useEffect(() => {
    isScrolling === "down" && setMenuOpened(false);
  }, [isScrolling, setMenuOpened]);

  return (
    <Container>
      <MenuItem
        onClick={() => {
          setSolutionsOpened(solutionsOpened ? false : true);
          contactOpened && setContactOpened(false);
          // if (isHome) {
          //   scrollIntoView("solutions");
          // } else router.push("/#solutions");
        }}
      >
        <Item>
          <div onClick={() => setContactOpened(false)}>Solutions</div>
          <div>
            <IoIosArrowDropdown />
          </div>
        </Item>
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
              <div>
                <FiFigma />
              </div>
              <div>Design</div>
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(true);
                if (isHome) {
                  scrollIntoView("develop");
                } else router.push("/#develop");
              }}
            >
              <div>
                <BsTerminalFill />
              </div>
              <div>Develop</div>
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(true);
                if (isHome) {
                  scrollIntoView("deploy");
                } else router.push("/#deploy");
              }}
            >
              <div>
                <SlRocket />
              </div>
              <div>Deploy</div>
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(true);
                if (isHome) {
                  scrollIntoView("boost");
                } else router.push("/#boost");
              }}
            >
              <div>
                <BsGraphUp />
              </div>
              <div>Boost</div>
            </SubMenuItem>
          </SubMenuItems>
        )}
      </MenuItem>
      <MenuItem
        onClick={() => {
          setContactOpened(contactOpened ? false : true);
          solutionsOpened && setSolutionsOpened(false);
          // if (isHome) {
          //   router.push("/contact");
          // }
        }}
      >
        {/* <SiGooglemeet /> */}
        <Item>
          <div onClick={() => setSolutionsOpened(false)}>Contact</div>
          <div>
            <IoIosArrowDropdown />
          </div>
        </Item>
        {contactOpened && (
          <SubMenuItems onClick={() => setSolutionsOpened(false)}>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) router.push("/contact");
              }}
            >
              <div>
                <TfiHeadphoneAlt />
              </div>
              <div>Chat with me</div>
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) router.push("/contact");
              }}
            >
              <div>
                <SiGooglemeet />
              </div>
              <div>Book a meeting</div>
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) router.push("/contact");
              }}
            >
              <div>
                <HiOutlineMail />
              </div>
              <div>Send an email</div>
            </SubMenuItem>
          </SubMenuItems>
        )}
      </MenuItem>
      <MenuItem onClick={() => router.push("https://busshi.fr")}>
        {/* <IoMdContact /> */}
        <Item>About me</Item>
      </MenuItem>
    </Container>
  );
};

const Item = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

const animate = keyframes`
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  animation: ${animate} 0.3s ease;
  width: 100vw;
  height: 88vh;
  background-color: var(--main-light-color);

  @media (prefers-color-scheme: dark) {
    background-color: var(--main-dark-color);
  }
`;

const MenuItem = styled.div`
  font-size: 1rem;
  // font-weight: var(--font-weight);
  line-height: 1.5;
  // letter-spacing: 0rem;
  color: var(--secondary-dark-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  width: 100vw;

  a {
    color: var(--secondary-dark-color);
  }
`;

const SubMenuItems = styled.div`
  margin-bottom: 1rem;
  width: 80vw;
`;

const SubMenuItem = styled.div`
  display: flex;
  align-items: center;
  // justify-content: flex-start;
  font-size: 1rem;
  transition: opacity var(--transition-delay) ease;
  gap: 1rem;
  :hover {
    opacity: 0.7;
  }
`;

export default Menu;
