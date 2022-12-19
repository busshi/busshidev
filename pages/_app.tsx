import type { AppProps } from "next/app";
import Script from "next/script";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HighlightedColorProvider>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-K4ERH99TW7');
      `}
      </Script>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-K4ERH99TW7" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
      <Component {...pageProps} />
    </HighlightedColorProvider>
  );
}
