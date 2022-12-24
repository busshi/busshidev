import { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Metadata from "../Metadata";
import TopBar from "../TopBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Html>
      <Metadata />
      <TopBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      {!menuOpened && (
        <>
          {children}
          <Footer />
        </>
      )}
    </Html>
  );
};

const Html = styled.div`
  min-width: 100%;
  min-height: 100vh;
  color: var(--main-light-font-color);
  background: var(--main-light-color);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  @media (prefers-color-scheme: dark) {
    color: var(--main-dark-font-color);
    background: var(--main-dark-color);
  }
`;

export default Layout;
