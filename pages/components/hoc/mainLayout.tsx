import { ReactElement } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Metadata from "../Metadata";
import TopBar from "../TopBar";

export const mainLayout = (page: ReactElement) => (
  <Layout>
    <Metadata />
    <TopBar />
    {page}
    <Footer />
  </Layout>
);

const Layout = styled.div`
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
