import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { COLORS } from "../lib/constants";
import { buildSolutionsMenu } from "../lib/solutions";
import { BuildContactsMenu } from "../lib/mobileMenu";
import { useThemeState } from "../providers/Theme.provider";

export const Menu = ({
  setMenuOpened,
}: {
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();
  const [solutionsOpened, setSolutionsOpened] = useState(true);
  const [contactOpened, setContactOpened] = useState(false);
  const { isDarkMode, theme } = useThemeState();
  // Build solutions array with icon size of 16px
  const solutions = buildSolutionsMenu(16);
  const contacts = BuildContactsMenu(setMenuOpened);

  return (
    <Container
      style={{ color: theme.middleFontColor, background: theme.mainColor }}
    >
      <MenuItem
        id="menuSolutions"
        onClick={() => {
          setSolutionsOpened(solutionsOpened ? false : true);
          contactOpened && setContactOpened(false);
        }}
      >
        <Item isDarkMode={isDarkMode}>
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
                isDarkMode={isDarkMode}
              >
                {icon}
                {title.substring(0, title.length - 1)}
              </SubMenuItem>
            ))}
          </SubMenuItems>
        )}
      </MenuItem>

      {/* <MenuItem id="menuAbout" onClick={() => router.push(BLOG_URL)}>
        <Item isDarkMode={isDarkMode}>About me</Item>
      </MenuItem> */}

      <MenuItem
        id="menuTesti"
        onClick={() => {
          router.push("/#testi-title");
          setMenuOpened(false);
        }}
      >
        <Item isDarkMode={isDarkMode}>Testimonials</Item>
      </MenuItem>

      <MenuItem
        id="menuContact"
        onClick={() => {
          setContactOpened(contactOpened ? false : true);
          solutionsOpened && setSolutionsOpened(false);
        }}
      >
        <Item isDarkMode={isDarkMode}>
          <div onClick={() => setSolutionsOpened(false)}>Get a demo</div>
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
            {contacts.map(({ id, text, icon, onClick }) => (
              <SubMenuItem key={id} onClick={onClick} isDarkMode={isDarkMode}>
                {icon} {id !== "email" && text}
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

const Item = styled.div<{ isDarkMode: boolean }>`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  transition: all 0.5s ease;
  font-size: 1.3rem;
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  padding: 12px;

  :hover {
    color: ${(props) =>
      props.isDarkMode ? "var(--main-light-color)" : "var(--main-dark-color)"};
  }
`;

const SubMenuItems = styled.div`
  margin-bottom: 1rem;
  width: 80vw;
`;

const SubMenuItem = styled.div<{ isDarkMode: boolean; hoverColor?: string }>`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  transition: opacity var(--transition-delay) ease;
  gap: 1rem;
  margin: 0.6rem;
  transition: color 0.5s ease;
  font-weight: var(--middle-font-weight);
  letter-spacing: var(--letter-spacing);

  a {
    color: var(--main-dark-color);
  }

  :hover {
    color: ${(props) =>
      props.hoverColor
        ? props.hoverColor
        : props.isDarkMode
        ? "var(--main-light-color)"
        : "var(--main-dark-color)"};
  }
`;

export default Menu;
