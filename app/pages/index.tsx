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
  color: black;
  background: #f5f5f5;
  font-family: ui-rounded;
  min-width: 100%;
  min-height: 100vh;

  @media (prefers-color-scheme: dark) {
    color: #f5f5f5;
    background: black;

    img {
      filter: invert(1);
    }
  }
`;
