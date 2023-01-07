import Script from "next/script";
import { useState } from "react";
import styled from "styled-components";
import { CRIPS_WEBSITE_ID } from "../../lib/constants";
import { useChatVisibleState } from "../../providers/ChatVisible.provider";
import { useThemeState } from "../../providers/Theme.provider";
import Footer from "../Footer";
import Metadata from "../Metadata";
import TopBar from "../TopBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isChatVisible } = useChatVisibleState();
  const { theme, isDarkMode } = useThemeState();

  return (
    <Html
      isDarkMode={isDarkMode}
      style={{ color: theme.fontColor, background: theme.background }}
    >
      <Metadata />
      <TopBar menuOpened={isMenuOpened} setMenuOpened={setIsMenuOpened} />
      <Wrapper menuOpened={isMenuOpened}>
        {children}
        <Footer />
      </Wrapper>

      {/* Crisp.chat integration */}
      {isChatVisible && (
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
      )}
    </Html>
  );
};

const Html = styled.div<{ isDarkMode: boolean }>`
  min-width: 100%;
  min-height: 100vh;

  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  transition: color, background var(--theme-transition-delay) ease;
`;

const Wrapper = styled.div<{ menuOpened: boolean }>`
  display: ${(props) => (props.menuOpened ? "none" : "block")};
`;

export default Layout;
