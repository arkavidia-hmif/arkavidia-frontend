import React from "react";
import { AuthData } from "../../interfaces/index";

export type AuthContextType = {
  authenticated: boolean,
  auth?: AuthData,
  setAuthenticated: (newValue: boolean) => void
  setAuth: (newValue: AuthData) => void
}

export const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);