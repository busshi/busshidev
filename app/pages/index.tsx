import styled from "styled-components";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Metadata } from "./components/Metadata";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <App>
      <Metadata />
      <TopBar />
      <Body />
      <Footer />
    </App>
  );
}

const App = styled.div`
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

    img {
      filter: invert(1);
    }
  }
`;
