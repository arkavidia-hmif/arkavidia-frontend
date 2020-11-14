import * as React from "react";
import Axios from "axios";
import * as Sentry from "@sentry/react";
import { SWRConfig } from "swr";
import { ApiContext, ApiContextType } from "../../utils/context/api";
import { AuthContext } from "../../utils/context/auth";

interface Props {
  children: React.ReactNode;
}

const ApiProvider: React.FC<Props> = ({ children }) => {
  const authContext = React.useContext(AuthContext);

  const apiClient = Axios.create({
    baseURL: process.env.API_BASE_URL,

    withCredentials: false,

    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
  });

  apiClient.interceptors.response.use((response) => response, (error) => {
    if (error?.response?.status === 401) {
      authContext.setAuthenticated(false);
      authContext.setAuth();
    } else if (error?.response?.status !== 400) {
      Sentry.captureException(error);
    }
    throw error;
  });

  apiClient.interceptors.request.use((config) => {
    const currentEpoch = new Date().getTime() / 1000;

    if (authContext.authenticated && authContext.auth) {
      if (authContext.auth.exp > currentEpoch) {
        config.headers.common[
          "Authorization"
        ] = `Bearer ${authContext.auth.token}`;
      } else {
        authContext.setAuthenticated(false);
        authContext.setAuth();
      }
    }

    return config;
  });

  const contextValue: ApiContextType = {
    axios: apiClient,
  };

  const swrConfig = {};

  return (
    <ApiContext.Provider value={contextValue}>
      <SWRConfig value={swrConfig}>{children}</SWRConfig>
    </ApiContext.Provider>
  );
};

export default ApiProvider;
