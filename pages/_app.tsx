import type { AppProps, NextWebVitalsMetric } from "next/app";
import getConfig from "next/config";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useEffect } from "react";
import * as ReactGA from "react-ga";
import * as Sentry from "@sentry/react";
import { RewriteFrames } from "@sentry/integrations";
import ApiProvider from "../components/provider/ApiProvider";
import DashboardProvider from "../components/provider/DashboardProvider";
import AuthProvider from "../components/provider/AuthProvider";

let gaLoaded = false;

// Setup web vitals Google Analytics
export function reportWebVitals({
  name,
  label,
  value,
}: NextWebVitalsMetric): void {
  if (gaLoaded) {
    ReactGA.timing({
      category: label,
      variable: name,
      value: Math.round(name === "CLS" ? value * 1000 : value),
    });
  }
}

// Setup Sentry
if (process.env.SENTRY_ENABLED && typeof window !== undefined) {
  const config = getConfig();
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;

  Sentry.init({
    environment: process.env.SENTRY_ENV,
    enabled: process.env.NODE_ENV === "production",
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          if (frame.filename) {
            frame.filename = frame.filename.replace(distDir, "app:///_next");
          }
          return frame;
        },
      }),
    ],
    dsn: process.env.SENTRY_DSN,
  });
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (
      process.env.GA_ENABLED &&
      process.env.NODE_ENV === "production" &&
      !gaLoaded
    ) {
      // Dont run without valid id
      if (!process.env.GA_ID) return;
      // Dont run outside browser
      if (typeof window === undefined) return;

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
          href="https://fonts.googleapis.com/css2?family=Viga&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fe5981" />
        <meta name="msapplication-TileColor" content="#fe5981" />
        <meta name="theme-color" content="#ffffff" />
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

          h1,h2,h3,h4,h5,h6 {
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
