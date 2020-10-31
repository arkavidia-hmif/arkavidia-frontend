import Link from 'next/link';
import { Dimen } from '../../styles/dimen';
import { useState } from 'react';
import menuItem from '../../utils/constants/nav-items';
import BurgerSubMenu from './BurgerSubMenu';

type Props = {
  open: boolean
}

const BurgerMenu: React.FC<Props> = ({ open }) => {
  const toggleState = menuItem.map((entry) => {
    if (entry.submenu) {
      return useState(false);
    } else {
      return [];
    }
  });

  return (
    <div>
      <div className="burger-menu">
        {menuItem.map((link, index) => {
          if (link.submenu) {
            const toggle = toggleState[index][0];
            const setToggle = toggleState[index][1];

            const arrowClass = "arrow " + (toggle ? "up" : "down");
            console.log(arrowClass);

            return (
              <>
                <a onClick={() => setToggle(!toggle)}>{link.text} <i className={arrowClass}></i></a>
                <BurgerSubMenu items={link.submenu} toggle={toggle} />
              </>
            );
          } else {
            return (
              <>
                <Link key={index} href={link.path}><a>{link.text}</a></Link>
              </>
            );
          }
        })}
        <Link href="/"><a>Login</a></Link>
      </div>

      <style jsx>{`
        i.arrow {
          border: solid white;
          border-width: 0 4px 4px 0;
          display: inline-block;
          padding: 4px ;

          transition: transform 0.2s;
        }

        .arrow.up {
          transform: rotate(-135deg);
        }

        .arrow.down {
          transform: rotate(45deg);
        }
        
        .burger-menu {
          display: none;
          flex-direction: column;
          justify-content: center;
          background:  #FE789A;
          height: auto;
          width: 100%;
          text-align: center;
          padding: 1rem 0;
          position: absolute;
          top: ${Dimen.navbarMobileHeight};
          transition: transform 0.3s ease-in-out;
          z-index: -10;
        }

        a {
          font-family: Viga;
          font-size: 1rem;
          text-transform: uppercase;
          padding: 1rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          color: white;
          text-decoration: none;
          transition: color 0.3s linear;
        }

        @media (max-width: 1300px) {
          .burger-menu {
            display: flex;
          }
        }
      `}</style>
      <style jsx>{`
          .burger-menu {
            transform: ${open ? 'translateY(0)' : 'translateY(-200%)'};
          }
      `}</style>
    </div>
  );
};

export default BurgerMenu;