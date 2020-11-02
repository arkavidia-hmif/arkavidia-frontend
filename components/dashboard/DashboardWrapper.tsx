import { ReactNode, useContext } from "react";
import ColorfulHeader from "../ColorfulHeader";
import { Theme } from "../../styles/theme";
import { AuthContext } from "../../utils/context/auth";
import DashboardMenu from "./DashboardMenu";

type Props = {
  children: ReactNode;
};

const DashboardWrapper: React.FC<Props> = ({ children }) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dashboard</h1>
          <ColorfulHeader
            color={Theme.headerColors.plpi}
            headingLevel={6}
            size="2rem"
          >
            Halo, {authContext.auth?.user.fullName || "Selamat Datang"}
          </ColorfulHeader>
          <br />
          <br />
          <DashboardMenu />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12">{children}</div>
      </div>

      <style jsx>
        {`
          .container {
            margin-top: 6rem;
            padding-bottom: 6rem;
          }

          h1 {
            font-size: 2rem;
            color: #431785;
          }

          @media(max-width: 1000px) {
            .container {
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DashboardWrapper;
