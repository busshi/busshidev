import type { AppProps } from "next/app";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import Metadata from "./components/Metadata";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HighlightedColorProvider>
      <Metadata />
      <Component {...pageProps} />
    </HighlightedColorProvider>
  );
}
