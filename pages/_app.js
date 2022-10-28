import '../styles/base.css'
import Document, { Head, Main, NextScript } from "next/document";


function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )
}

export default MyApp