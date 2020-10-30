import * as React from "react";
import Link from "next/link";
import DashItems from "../../../utils/constants/dash-item";
import { useRouter } from "next/dist/client/router";
import ColorfulHeader from "../../ColorfulHeader";
import { Theme } from "../../../styles/theme";

const DashboardWrapper: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="container-fluid">
        <div id="dashboard">Dashboard</div>
        <div id="user">
          <ColorfulHeader
            color={Theme.headerColors.plpi}
            headingLevel={6}
            size="3rem"
          >
            Halo, John Doe
          </ColorfulHeader>
        </div>

        <div id="menu">
          <ul>
            {DashItems.map((link, index) => (
              <li key={index} className="item">
                <Link href={link.route}>
                  <a
                    className={router.pathname === link.route ? "current" : ""}
                  >
                    {link.title}
                  </a>
                </Link>
                <div className="indicator mt-5"></div>
              </li>
            ))}
          </ul>
          <hr className="line" />
        </div>
        <style jsx>
          {`
            #dashboard {
              font-family: Viga;
              font-style: normal;
              font-weight: normal;
              font-size: 2rem;
              color: #431785;
            }

            ul {
              display: flex;
              flex-direction: row;
              list-style-type: none;
              padding: 0;
            }

            li {
              margin: 0 2rem;
              position: relative;
              display: flex;
            }

            a {
              text-decoration: none;
              font-family: Viga;
              font-style: normal;
              font-weight: normal;
              font-size: 1.5rem;

              color: #623fa2;
            }

            .indicator {
              opacity: 0;
              position: absolute;
              width: 125%;
              height: 0.5rem;
              background: linear-gradient(90deg, #623fa2 0%, #f25785 100%);
              transition: opacity 0.2s ease-in;
              transform-origin: 1px;
            }

            a:hover + .indicator {
              opacity: 1;
            }

            a.current + .indicator {
              opacity: 1;
            }

            hr.line {
              border: 0.25rem solid #c4c4c4;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default DashboardWrapper;
