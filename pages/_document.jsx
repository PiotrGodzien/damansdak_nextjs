import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../gtag";
import Navigation from "../components/_nav";
import Footer from "../components/_footer";
import Cta from "../components/_cta";
import LazyShow from "./LazyShow";
import { Link, animateScroll as scroll } from "react-scroll";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&family=Lato:wght@300;400&display=swap"
          />
          <meta
            name="google-site-verification"
            content="xXCEWAfdBPhefjp9dCqR96QizmSoh3V6Fub2yNrX-fA"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
