import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { AuthContext, AuthContextType } from '../utils/context/auth';
import { useEffect, useState } from 'react';
import { AuthData } from '../interfaces/auth';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/dist/client/router';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [auth, setAuth] = useState<AuthData>();

  const authenticatedKey = process.env['LOCAL_STORAGE_AUTHENTICATED'] || 'authenticated_dev';
  const authKey = process.env['LOCAL_STORAGE_AUTH'] || 'auth_dev';

  useEffect(() => {
    setAuthenticated(localStorage.getItem(authenticatedKey) === 'true');
    const savedAuth = localStorage.getItem(authKey);
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
  }, []);

  const setAndSaveAuthenticated = (newValue: boolean) => {
    setAuthenticated(newValue);
    localStorage.setItem(authenticatedKey, newValue ? 'true' : 'false');
  };

  const setAndSaveAuth = (newValue: AuthData) => {
    setAuth(newValue);
    localStorage.setItem(authKey, JSON.stringify(newValue));
  };

  const authContext: AuthContextType = {
    authenticated,
    auth,
    setAuthenticated: setAndSaveAuthenticated,
    setAuth: setAndSaveAuth
  };

  if (typeof window !== "undefined") {
    const router = useRouter();

    if (router.pathname.startsWith('/dashboard') && !authenticated) {
      router.replace(`/login?continue=${router.pathname}`);
    }
  }

  const swrConfig = {};

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <AuthContext.Provider value={authContext}>
        <SWRConfig value={swrConfig}>
          <Component {...pageProps} />
        </SWRConfig>
      </AuthContext.Provider>
      <style global jsx>{`
        body {
          font-family: 'roboto';
          margin: 0;
          line-height: 1.2;
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