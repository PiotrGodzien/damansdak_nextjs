import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navigation from '../components/_nav'
import Footer from '../components/_footer'
import Cta from '../components/_cta'
import LazyShow from './LazyShow'
import { Link, animateScroll as scroll } from "react-scroll";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&display=swap"  />
        </Head>
        <body>
          <Main />
          <Navigation />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument