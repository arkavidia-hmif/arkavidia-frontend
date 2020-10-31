import { AxiosInstance } from "axios";
import React from "react";

export type ApiContextType = {
  axios: AxiosInstance
}

export const ApiContext = React.createContext<ApiContextType>({} as ApiContextType);