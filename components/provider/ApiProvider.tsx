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

  if (authContext.authenticated && authContext.auth) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${authContext.auth.token}`;
  } else {
    apiClient.defaults.headers.common['Authorization'] = null;
  }

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