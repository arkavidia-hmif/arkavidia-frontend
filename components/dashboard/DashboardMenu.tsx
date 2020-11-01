import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import DashboardItems from "../../utils/constants/dashboard-items";

const DashboardMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div id="menu">
      <ul>
        {DashboardItems.map((link, index) => (
          <li key={index} className="item">
            <Link href={link.route}>
              <a
                className={router.pathname === link.route ? "current" : ""}
              >
                {link.title}
              </a>
            </Link>
            <div className="indicator"></div>
          </li>
        ))}
      </ul>
      <div className="base-indicator"></div>
      <style jsx>{`
        #menu {
          overflow-x: scroll;
          overflow-y: hidden;
          position: relative;
        }

        ul {
          display: flex;
          flex-direction: row;
          padding: 0;
        }

        li {
          margin: 0 2rem;
          position: relative;
          display: flex;
        }

        a {
          font-family: Viga;
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
          bottom: -15px;
        }

        .base-indicator {
          z-index: 0;
          position: absolute;
          width: 100%;
          height: 0.5rem;
          background: #c4c4c4;
          bottom: 0;
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
            margin: 0 1rem 2rem;
          }
          #dashboard {
            font-size: 1.5rem;
          }             
        }
      `}</style>
    </div>
  );
};

export default DashboardMenu;