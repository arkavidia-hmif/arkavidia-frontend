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
          </li>
        ))}
      </ul>
      <div className="base-indicator"></div>
      <style jsx>{`
        #menu {
          overflow-y: hidden;
          margin-bottom: 1rem;
        }

        ul {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0;
          margin-bottom: 0.5rem;
        }

        #menu:before {
          content: '';
          display: block;
          position: absolute;
          width: calc(100% - 2rem);
          bottom: 1.5rem;
          left: 1rem;
          border-bottom: 0.5rem solid #c4c4c4;
        }

        li {
          height: 3rem;
          
          margin: 0 2rem;

          border-bottom: 0rem solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(90deg, #623fa2 0%, #f25785 100%);
          
          position: relative;
          display: flex;
          z-index: 1;
        }
        
        li:hover {
          border-bottom: 0.5rem solid;
        }

        a {
          font-family: Viga;
          font-size: 1.25rem;
          color: #623fa2 !important;
          white-space: nowrap;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default DashboardMenu;