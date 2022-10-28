import '../styles/base.css'
import Document, { Head, Main, NextScript } from "next/document";
import {ParallaxProvider} from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
      </ParallaxProvider>
  )
}

export default MyApp