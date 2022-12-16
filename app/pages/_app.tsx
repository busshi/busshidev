import type { AppProps } from "next/app";
import { HighlightedColorProvider } from "./providers/HighlightedColor";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HighlightedColorProvider>
      <Component {...pageProps} />
    </HighlightedColorProvider>
  );
}
