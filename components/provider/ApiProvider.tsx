import * as React from 'react';
import Axios from 'axios';
import { ApiContext, ApiContextType } from '../../utils/context/api';
import { AuthContext } from '../../utils/context/auth';
import { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode
}

const ApiProvider: React.FC<Props> = ({ children }) => {
  const authContext = React.useContext(AuthContext);

  const apiClient = Axios.create({
    baseURL: process.env.API_BASE_URL,

    withCredentials: false,

    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
  });

  apiClient.interceptors.request.use((config) => {
    const currentEpoch = new Date().getTime() / 1000;
    console.log(currentEpoch);

    if (authContext.authenticated && authContext.auth) {
      if (authContext.auth.exp > currentEpoch) {
        config.headers.common['Authorization'] = `Bearer ${authContext.auth.token}`;
      } else {
        authContext.setAuthenticated(false);
        authContext.setAuth();
      }
    }

    return config;
  });

  const contextValue: ApiContextType = {
    axios: apiClient
  };

  const swrConfig = {};

  return (
    <ApiContext.Provider value={contextValue}>
      <SWRConfig value={swrConfig}>
        {children}
      </SWRConfig>
    </ApiContext.Provider>
  );
};

export default ApiProvider;