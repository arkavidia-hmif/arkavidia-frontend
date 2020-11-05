import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import DashboardItems from "../../utils/constants/dashboard-items";

const DashboardMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div id="menu">
      <ul>
        {DashboardItems.map((link, index) => {
          let className = 'items';
          if (link.haveChild && router.pathname.startsWith(link.route)) {
            className += ' current';
          } else if (!link.haveChild && router.pathname === link.route) {
            className += ' current';
          }

          return (
            <li
              key={index}
              className={className}
            >
              <Link href={link.route}>
                <a>{link.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div className="base-indicator"></div> */}
      <style jsx>{`
        #menu {
          overflow-y: hidden;
        }
        ::-webkit-scrollbar {
          display: none;          
        }
        
        ul {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0;
        }

        #menu:before {
          content: "";
          display: block;
          position: absolute;
          width: calc(100% - 2rem);
          bottom: 1rem;
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
        }

        li:hover {
          border-bottom: 0.5rem solid;
        }

        li.current {
          border-bottom: 0.5rem solid;
        }

        a {
          font-family: Viga;
          font-size: 1.25rem;
          color: #623fa2 !important;
          white-space: nowrap;
          text-decoration: none;
        }
        @media (max-width: 1000px) {
          li.items {
            height: 2.2rem;
            margin: 0 0.9rem;
          }
          .items a {
            font-size: 1rem;
          }        
        }
        @media (max-width: 767px) {
          ul {
            margin-bottom: 0;
          }
          #menu:before {
            bottom: 0rem
          }
          
        }
      `}</style>
    </div>
  );
};

export default DashboardMenu;
