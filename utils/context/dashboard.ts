import React from "react";

export type DashboardActiveType = {
    setActive: (integer: number) => void;
    active?: number;
  };

export const DashboardContext = React.createContext<DashboardActiveType>({} as DashboardActiveType);