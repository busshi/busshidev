import styled, { keyframes } from "styled-components";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { BsGraphUp, BsTerminalFill } from "react-icons/bs";
import { SlRocket } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { COLORS } from "../../lib/constants";

export const Menu = ({
  setMenuOpened,
}: {
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const isHome = router.asPath !== "/contact";
  const [solutionsOpened, setSolutionsOpened] = useState(true);
  const [contactOpened, setContactOpened] = useState(false);

  return (
    <Container>
      <MenuItem
        id="menuSolutions"
        onClick={() => {
          setSolutionsOpened(solutionsOpened ? false : true);
          contactOpened && setContactOpened(false);
        }}
      >
        <Item>
          <div onClick={() => setContactOpened(false)}>Solutions</div>
          <div>
            {solutionsOpened ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </div>
        </Item>
        {solutionsOpened && (
          <SubMenuItems onClick={() => setContactOpened(false)}>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) {
                  scrollIntoView("design");
                } else router.push("/#design");
              }}
              hoverColor={COLORS[0].start}
            >
              <FiFigma />
              Design
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) {
                  scrollIntoView("develop");
                } else router.push("/#develop");
              }}
              hoverColor={COLORS[1].start}
            >
              <BsTerminalFill />
              Develop
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) {
                  scrollIntoView("deploy");
                } else router.push("/#deploy");
              }}
              hoverColor={COLORS[2].start}
            >
              <SlRocket />
              Deploy
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) {
                  scrollIntoView("boost");
                } else router.push("/#boost");
              }}
              hoverColor={COLORS[3].start}
            >
              <BsGraphUp />
              Boost
            </SubMenuItem>
          </SubMenuItems>
        )}
      </MenuItem>

      <MenuItem id="menuAbout" onClick={() => router.push("https://busshi.fr")}>
        <Item>About me</Item>
      </MenuItem>

      <MenuItem
        id="menuContact"
        onClick={() => {
          setContactOpened(contactOpened ? false : true);
          solutionsOpened && setSolutionsOpened(false);
        }}
      >
        <Item>
          <div onClick={() => setSolutionsOpened(false)}>Contact</div>
          <div>
            {contactOpened ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
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
              <TfiHeadphoneAlt />
              Chat with me
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) router.push("/contact");
              }}
            >
              <SiGooglemeet />
              Book a meeting
            </SubMenuItem>
            <SubMenuItem
              onClick={() => {
                setMenuOpened(false);
                if (isHome) router.push("/contact");
              }}
            >
              <HiOutlineMail />
              Send an email
            </SubMenuItem>
          </SubMenuItems>
        )}
      </MenuItem>
    </Container>
  );
};

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

  color: var(--secondary-light-font-color);
  background-color: var(--main-light-color);

  @media (prefers-color-scheme: dark) {
    color: var(--middle-font-color);
    background-color: var(--main-dark-color);
  }
`;

const MenuItem = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  width: 100vw;
`;

const Item = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  transition: all 0.5s ease;

  :hover {
    color: var(--main-dark-color);

    @media (prefers-color-scheme: dark) {
      color: var(--main-light-color);
    }
  }
`;

const SubMenuItems = styled.div`
  margin-bottom: 1rem;
  width: 80vw;
`;

const SubMenuItem = styled.div<{ hoverColor?: string }>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  transition: opacity var(--transition-delay) ease;
  gap: 1rem;
  transition: color 0.5s ease;

  :hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "var(--main-dark-color)"};

    @media (prefers-color-scheme: dark) {
      color: ${(props) =>
        props.hoverColor ? props.hoverColor : "var(--main-light-color)"};
    }
  }
`;

export default Menu;
