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
            size="2rem"
          >
            Halo, John Doe
          </ColorfulHeader>
        </div>

        <div id="menu" className="mt-3">
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
                <div className="indicator-2 mt-5"></div>
              </li>
            ))}
          </ul>
          <br />
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
              font-size: 1.25rem;
              color: #623fa2 !important;
              white-space: nowrap;
            }

            .indicator {
              z-index: 1;
              opacity: 0;
              position: absolute;
              width: 100%;
              height: 0.5rem;
              background: linear-gradient(90deg, #623fa2 0%, #f25785 100%);
              transition: opacity 0.2s ease-in;
              transform-origin: 1px;
            }

            .indicator-2 {
              margin-left: -30px;
              z-index: 0;
              position: absolute;
              width: 425%;
              height: 0.5rem;
              background: #c4c4c4;
            }

            a:hover + .indicator {
              opacity: 1;
            }

            a.current + .indicator {
              opacity: 1;
            }

            @media (max-width: 767px) {
              ul {
                overflow: auto;
              }
            }

            @media (max-width: 450px) {
              li{
                margin: 0 1rem;
              }
              #dashboard {
                font-size: 1.5rem;
              }             
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default DashboardWrapper;
