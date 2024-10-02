import '../styles/globals.css'
import Head from 'next/head'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
  <>
  <Head>
        {/* Add your meta tags or other Head elements here */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
  <Component {...pageProps} />
  </>
  )
}

export default App
 