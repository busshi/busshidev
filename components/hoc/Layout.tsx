import Script from "next/script";
import { useState } from "react";
import styled from "styled-components";
import { CRIPS_WEBSITE_ID } from "../../lib/constants";
import { useChatVisibleState } from "../../providers/ChatVisible.provider";
import { openChat } from "../../lib/chat";
import { useThemeState } from "../../providers/Theme.provider";
import Footer from "../Footer";
import Metadata from "../Metadata";
import TopBar from "../TopBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isChatVisible, isOpenRequested, clearOpenRequest } =
    useChatVisibleState();
  const { theme } = useThemeState();

  return (
    <App style={{ color: theme.fontColor, background: theme.background }}>
      <Metadata />
      <TopBar isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <Wrapper $isMenuOpened={isMenuOpened}>
        {children}
        <Footer />
      </Wrapper>

      {/* Ideta chatbot: only loaded once visible (inactivity delay or click) */}
      {isChatVisible && (
        <Script
          src="https://storage.googleapis.com/ideta-prod.appspot.com/bots/-P6xg3YweEgCY7aBrPNp/scripts/integration-web.js?GoogleAccessId=firebase-adminsdk-4b3yf%40ideta-prod.iam.gserviceaccount.com&Expires=16447017600&Signature=TckzqmDeZ3pX9fwnntpAF6TLNnD0HeIv4DGRGpZWmIHncSk7d5jUwyhzOwgkQkhJe5d21fw8IPmTr5eM0ERamuWm4NDCsjIPAXPTRUqr06lbIXwFWFL53zA%2BdU12HVPte2UHPCfTNPW55hEnK77JXkn%2FYI56n5C2Z%2Bh%2BDdXrvqcbH70Dg%2BkV96%2FWPDvFxw1I42oKoxCXP1kDqacEjEcwlObr1djkpSMtgPiQSxo6QfvwV99hfC4NYrXEaA9TwNSvwC62wXTAug2G4adRnxfKLDWy6ATFwIlctISGRDoD1Fylo%2B9oUECW8TTll%2FvEbusXhrGv86IAAoQ8plWG5luhoA%3D%3D"
          strategy="afterInteractive"
          onLoad={() => {
            if (!isOpenRequested) return;
            openChat();
            clearOpenRequest();
          }}
        />
      )}

      {/* Crisp.chat integration (replaced by Ideta)
      {isChatVisible && (
        <>
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
          {/* <Test/> * /}
        </>
      )}
      */}
    </App>
  );
};

const App = styled.div`
  min-width: 100%;
  min-height: 100vh;

  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  transition: color, background var(--theme-transition-delay) ease;
`;

const Wrapper = styled.div<{ $isMenuOpened: boolean }>`
  display: ${(props) => (props.$isMenuOpened ? "none" : "block")};
`;

// const Test = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(89, 103, 114, 0.2);
//   backdrop-filter: blur(5px);
// `;

export default Layout;
