import type { AppProps } from "next/app";
import Script from "next/script";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HighlightedColorProvider>
      {/* Google Tag Manager */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-K4ERH99TW7" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      {/* Calendly integration */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      <Component {...pageProps} />
    </HighlightedColorProvider>
  );
}
