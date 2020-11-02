import * as React from "react";
import {
  DashboardContext,
  DashboardActiveType,
} from "../../utils/context/dashboard";

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDashboard = () => React.useContext(DashboardContext);

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [active, setActive] = React.useState(0);

  const contextValue: DashboardActiveType = {
    active,
    setActive,
  };

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
