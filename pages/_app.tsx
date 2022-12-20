import type { AppProps } from "next/app";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HighlightedColorProvider>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-K4ERH99TW7" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <Component {...pageProps} />
    </HighlightedColorProvider>
  );
}
