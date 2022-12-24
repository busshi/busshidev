import type { AppProps } from "next/app";
import Script from "next/script";
import { CRIPS_WEBSITE_ID, GTAG } from "../lib/constants";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import TestimonialVisibleProvider from "../providers/TestimonialVisible";
import Layout from "./components/hoc/Layout";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <HighlightedColorProvider>
        <TestimonialVisibleProvider>
          {/* Google Tag Manager */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTAG}" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
          {/* Calendly integration */}
          <Script src="https://assets.calendly.com/assets/external/widget.js" />
          {/* Crisp.chat integration */}
          <Script
            id="crisp-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID=\`${CRIPS_WEBSITE_ID}\`;
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
            }}
          />
          ;
          <Component {...pageProps} />
        </TestimonialVisibleProvider>
      </HighlightedColorProvider>
    </Layout>
  );
}
