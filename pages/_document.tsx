import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// Applies the system color scheme to <html data-theme="..."> before the
// browser paints anything. pages/styles/app.css keys its color variables
// off that attribute, so the correct theme is used from the very first
// frame instead of always painting dark and having React correct it
// after hydration (a visible flash for light-mode visitors). Must stay a
// plain blocking <script>, not next/script — it needs to run
// synchronously during HTML parsing, before <body> is painted.
const themeScript = `(function(){try{var isDark=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",isDark?"dark":"light");}catch(e){}})();`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
