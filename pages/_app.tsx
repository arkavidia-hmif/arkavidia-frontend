import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          font-family: 'roboto';
          margin: 0;
        }

        .max-content {
          max-width: 1440px;
        }
      `}
      </style>
    </>
  )
}

export default MyApp