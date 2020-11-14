import React from "react";

export interface DashboardActiveType {
  setActive: (integer: number) => void;
  active?: number;
}

export const DashboardContext = React.createContext<DashboardActiveType>(
  {} as DashboardActiveType
);
