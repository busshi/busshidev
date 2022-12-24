import type { AppProps } from "next/app";
import Script from "next/script";
import { GTAG } from "../lib/constants";
import { ChatVisibleProvider } from "../providers/ChatVisible";
import { HighlightedColorProvider } from "../providers/HighlightedColor";
import TestimonialVisibleProvider from "../providers/TestimonialVisible";
import Layout from "./components/hoc/Layout";
import "./styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChatVisibleProvider>
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

            <Component {...pageProps} />
          </TestimonialVisibleProvider>
        </HighlightedColorProvider>
      </Layout>
    </ChatVisibleProvider>
  );
}
