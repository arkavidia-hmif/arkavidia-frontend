import { createContext } from "react";

export interface DashboardActiveType {
  setActive: (integer: number) => void;
  active?: number;
}

export const DashboardContext = createContext<DashboardActiveType>(
  {} as DashboardActiveType
);
