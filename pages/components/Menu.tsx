import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { BLOG_URL, COLORS } from "../../lib/constants";
import { buildSolutions } from "../../lib/solutions";
import { CONTACT_MENU } from "../../lib/menu";

export const Menu = ({
  setMenuOpened,
}: {
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const isHome = router.asPath !== "/contact";
  const [solutionsOpened, setSolutionsOpened] = useState(true);
  const [contactOpened, setContactOpened] = useState(false);

  // Build solutions array with icon size of 20px
  const solutions = buildSolutions(16);

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
            {solutions.map(({ id, title, icon }, index) => (
              <SubMenuItem
                key={id}
                onClick={() => {
                  router.push(`/#${id}`);
                  setMenuOpened(false);
                }}
                hoverColor={COLORS[index].start}
              >
                {icon}
                {title.substring(0, title.length - 1)}
              </SubMenuItem>
            ))}
          </SubMenuItems>
        )}
      </MenuItem>

      <MenuItem id="menuAbout" onClick={() => router.push(BLOG_URL)}>
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
          <SubMenuItems
            onClick={() => {
              setSolutionsOpened(false);
            }}
          >
            {CONTACT_MENU.map(({ id, text, icon }) => (
              <SubMenuItem
                key={id}
                onClick={() => {
                  isHome && router.push("/contact");
                  setMenuOpened(false);
                }}
              >
                {icon} {text}
              </SubMenuItem>
            ))}
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
  margin: 0.6rem;
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
