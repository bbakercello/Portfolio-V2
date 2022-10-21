import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  return <Component className=''{...pageProps} />
}

export default MyApp