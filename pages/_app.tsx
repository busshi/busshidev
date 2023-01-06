import type { AppProps } from "next/app";
import Script from "next/script";
import { GTAG } from "../lib/constants";
import CalendlyVisibleProvider from "../providers/CalendlyVisible.provider";
import { ChatVisibleProvider } from "../providers/ChatVisible.provider";
import { HighlightedColorProvider } from "../providers/HighlightedColor.provider";
import TestimonialVisibleProvider from "../providers/TestimonialVisible.provider";
import Layout from "../components/hoc/Layout";
import "./styles/app.css";
import DarkModeProvider from "../providers/Theme.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <ChatVisibleProvider>
        <CalendlyVisibleProvider>
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
        </CalendlyVisibleProvider>
      </ChatVisibleProvider>
    </DarkModeProvider>
  );
}
