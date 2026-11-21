import type { AppProps } from "next/app";
import Script from "next/script";
// import { GTAG } from "../lib/constants";
import CalendlyVisibleProvider from "../providers/CalendlyVisible.provider";
import { ChatVisibleProvider } from "../providers/ChatVisible.provider";
import { HighlightedColorProvider } from "../providers/HighlightedColor.provider";
import TestimonialVisibleProvider from "../providers/TestimonialVisible.provider";
import "./styles/app.css";
import DarkModeProvider from "../providers/Theme.provider";
import Layout from "../components/hoc/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <HighlightedColorProvider>
        {/* <ChatVisibleProvider> */}
          <CalendlyVisibleProvider>
            <Layout>
              <TestimonialVisibleProvider>
                {/* Global site tag (gtag.js) - Google Analytics */}
                {/* <Script
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
                  </Script> */}

                {/* Vercel Analytics */}
                <Analytics />
                <SpeedInsights />

                {/* Calendly integration */}
                <Script src="https://assets.calendly.com/assets/external/widget.js" />

                {/* Ideta Chabot Integration */}
                <Script src="https://storage.googleapis.com/ideta-prod.appspot.com/bots/-P6xg3YweEgCY7aBrPNp/scripts/integration-web.js?GoogleAccessId=firebase-adminsdk-4b3yf%40ideta-prod.iam.gserviceaccount.com&Expires=16447017600&Signature=TckzqmDeZ3pX9fwnntpAF6TLNnD0HeIv4DGRGpZWmIHncSk7d5jUwyhzOwgkQkhJe5d21fw8IPmTr5eM0ERamuWm4NDCsjIPAXPTRUqr06lbIXwFWFL53zA%2BdU12HVPte2UHPCfTNPW55hEnK77JXkn%2FYI56n5C2Z%2Bh%2BDdXrvqcbH70Dg%2BkV96%2FWPDvFxw1I42oKoxCXP1kDqacEjEcwlObr1djkpSMtgPiQSxo6QfvwV99hfC4NYrXEaA9TwNSvwC62wXTAug2G4adRnxfKLDWy6ATFwIlctISGRDoD1Fylo%2B9oUECW8TTll%2FvEbusXhrGv86IAAoQ8plWG5luhoA%3D%3D" type="text/javascript" async />
                <Component {...pageProps} />
              </TestimonialVisibleProvider>
            </Layout>
          </CalendlyVisibleProvider>
        {/* </ChatVisibleProvider> */}
      </HighlightedColorProvider>
    </DarkModeProvider>
  );
}
