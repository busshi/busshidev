import styled, { keyframes } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { scrollIntoView } from "../../lib/scroll";
import { useRouter } from "next/router";

export const Menu = ({
  isHome,
  setMenuOpened,
}: {
  isHome: boolean;
  setMenuOpened: (value: boolean) => void;
}) => {
  const router = useRouter();

  return (
    <Container>
      <IoMdCloseCircleOutline
        style={{ margin: "1rem" }}
        size={40}
        onClick={() => setMenuOpened(false)}
      />
      <MenuItem
        onClick={() => {
          if (isHome) {
            scrollIntoView("solutions");
            setMenuOpened(false);
          } else router.push("/#solutions");
        }}
      >
        Solutions
      </MenuItem>
      <MenuItem>About Me</MenuItem>
      <MenuItem>Contacts</MenuItem>
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

const MenuItem = styled.div``;
