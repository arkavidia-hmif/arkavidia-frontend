import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useEffect } from "react";
import * as ReactGA from 'react-ga';
import ApiProvider from "../components/provider/ApiProvider";
import DashboardProvider from "../components/provider/DashboardProvider";
import AuthProvider from "../components/provider/AuthProvider";

let gaLoaded = false;

export function reportWebVitals({ name, label, value }: NextWebVitalsMetric): void {
  if (gaLoaded) {
    ReactGA.timing({
      category: label,
      variable: name,
      value
    });
  }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  useEffect(() => {
    if (process.env.GA_ID && process.env.NODE_ENV === 'production' && typeof window !== undefined && !gaLoaded) {
      ReactGA.initialize(process.env.GA_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
      gaLoaded = true;
    }
  }, []);

  if (gaLoaded) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Viga"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.png" />
      </Head>
      <AuthProvider>
        <ApiProvider>
          <DashboardProvider>
            <Component {...pageProps} />
          </DashboardProvider>
        </ApiProvider>
      </AuthProvider>
      <style global jsx>
        {`
          body {
            font-family: "roboto";
            margin: 0;
            line-height: 1.2;
          }

          h1 {
            font-family: "Viga";
            font-weight: 300;
          }

          h2 {
            font-family: "Viga";
            font-weight: 300;
          }

          h3 {
            font-family: "Viga";
            font-weight: 300;
          }

          h4 {
            font-family: "Viga";
            font-weight: 300;
          }

          h5 {
            font-family: "Viga";
            font-weight: 300;
          }

          h6 {
            font-family: "Viga";
            font-weight: 300;
          }

          .max-content {
            max-width: 1440px;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
