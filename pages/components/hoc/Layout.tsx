import styled from "styled-components";
import Footer from "../Footer";
import Metadata from "../Metadata";
import TopBar from "../TopBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <Html>
    <Metadata />
    <TopBar />
    {children}
    <Footer />
  </Html>
);

const Html = styled.div`
  min-width: 100%;
  min-height: 100vh;
  color: var(--main-dark-color);
  background: var(--main-light-color);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  @media (prefers-color-scheme: dark) {
    color: var(--secondary-dark-color);
    background: var(--main-dark-color);
  }
`;

export default Layout;
