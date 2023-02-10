import type { AppProps } from "next/app";
import Script from "next/script";
import { GTAG } from "../lib/constants";
import CalendlyVisibleProvider from "../providers/CalendlyVisible.provider";
import { ChatVisibleProvider } from "../providers/ChatVisible.provider";
import { HighlightedColorProvider } from "../providers/HighlightedColor.provider";
import TestimonialVisibleProvider from "../providers/TestimonialVisible.provider";
import "./styles/app.css";
import DarkModeProvider from "../providers/Theme.provider";
import Layout from "../components/hoc/Layout";
import ContactMenuProvider from "../providers/ContactMenu.provider";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <HighlightedColorProvider>
        <ContactMenuProvider>
          <ChatVisibleProvider>
            <CalendlyVisibleProvider>
              <Layout>
                <TestimonialVisibleProvider>
                  {/* Global site tag (gtag.js) - Google Analytics */}
                  <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
                    strategy="afterInteractive"
                  />
                  <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTAG}');
                   `}
                  </Script>

                  {/* Vercel Analytics */}
                  <Analytics />

                  {/* Calendly integration */}
                  <Script src="https://assets.calendly.com/assets/external/widget.js" />
                  <Component {...pageProps} />
                </TestimonialVisibleProvider>
              </Layout>
            </CalendlyVisibleProvider>
          </ChatVisibleProvider>
        </ContactMenuProvider>
      </HighlightedColorProvider>
    </DarkModeProvider>
  );
}
