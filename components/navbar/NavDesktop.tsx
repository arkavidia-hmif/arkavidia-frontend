import Link from 'next/link';
import { useContext, useState } from 'react';
import { useRouter } from "next/dist/client/router";
import FilledButton from "../FilledButton";
import items from "../../utils/constants/nav-items";
import { AuthContext } from '../../utils/context/auth';
import { Dimen } from '../../styles/dimen';
import SubMenu from './SubMenu';

const NavDesktop: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const hoverState = items.map((entry) => {
    if (entry.submenu) {
      return useState(false);
    } else {
      return [];
    }
  });

  return (
    <div className="items">
      <ul className="mr-3">
        {items.map((link, index) => {
          if (link.protected && !authContext.authenticated) {
            return;
          }

          if (link.submenu) {
            const curentHover = hoverState[index];
            const setHover = curentHover[1];
            const hover = curentHover[0];
            return (
              <li key={index} className="mt-3">
                <a
                  style={{ cursor: 'pointer' }}
                  className={router.pathname.startsWith(link.path) ? "current" : ""}
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {link.text}
                </a>
                <div className="indicator"></div>
                <SubMenu items={link.submenu} hover={hover} setHover={setHover} />
              </li>
            );
          } else {
            return (
              <li key={index} className="mt-3">
                <Link href={link.path}><a className={router.pathname === link.path ? "current" : ""}>{link.text}</a></Link>
                <div className="indicator"></div>
              </li>
            );
          }
        })}
      </ul>
      {authContext.authenticated ?
        <FilledButton text="LOGOUT" padding="0.75em 1.5em" onClick={() => {
          router.push('/');
          authContext.setAuthenticated(false);
          authContext.setAuth();
        }} />
        : <FilledButton text="LOGIN" padding="0.75em 1.5em" onClick={() => { router.push('/login'); }} />
      }

      <style jsx>{`
          ul {
            display: flex;
            list-style: none;
            height: 100%;
          }

          a {
            color: #623FA2;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5rem;
            text-decoration: none;
          }

          li {
            margin: 0 1rem;
            position: relative;
          }

          .items {
            margin-left: auto;
            display: flex;
            align-items: center;
            padding: 0 20px;
          }

          .indicator {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 8px;
            background: linear-gradient(90deg, #00FFFF 0%, #623FA2 100%);
            transition: opacity 0.1s ease-in;
            transform-origin: 1px;
          }

          a:hover + .indicator {
            opacity: 1;
          }

          a.current + .indicator {
            opacity: 1;
          }

          @media (max-width: ${Dimen.navbarBreakpoint}) {
            .items {
              display: none;
            }
          }
      `}</style>
    </div>
  );
};


export default NavDesktop;