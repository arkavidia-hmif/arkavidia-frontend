import { AxiosInstance } from "axios";
import React from "react";

export interface ApiContextType {
  axios: AxiosInstance
}

export const ApiContext = React.createContext<ApiContextType>({} as ApiContextType);