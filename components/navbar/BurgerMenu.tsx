import Link from 'next/link';
import { Dimen } from '../../styles/dimen';
import { useState } from 'react';
import menuItem from '../../utils/constants/nav-items';
import BurgerSubMenu from './BurgerSubMenu';
import event from '../../utils/constants/event';
import preevent from '../../utils/constants/preevent';

type Props = {
  open: boolean
}

const BurgerMenu: React.FC<Props> = ({ open }) => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  const eventProps = {
    toggle: toggle,
    setToggle: setToggle
  };

  const preeventProps = {
    toggle: toggle1,
    setToggle: setToggle1
  };

  return (
    <div>
      <div className="burger-menu">
        {menuItem.map((link, index) => {
          if (link.text === 'EVENTS')
            return (
              <>
                <Link key={index} href={link.path}><a onClick={() => setToggle(!toggle)}>{link.text}</a></Link>
                <BurgerSubMenu items={event} {...eventProps}/>
              </>
            );
          else if (link.text === 'PRE-EVENTS')
            return (
              <>
                <Link key={index} href={link.path}><a onClick={() => setToggle1(!toggle1)}>{link.text}</a></Link>
                <BurgerSubMenu items={preevent} {...preeventProps}/>
              </>
            );
          return (
            <>
              <Link key={index} href={link.path}><a>{link.text}</a></Link>
            </>
          );
        })}
        <Link href="/"><a>Login</a></Link>
      </div>

      <style jsx>{`
          .burger-menu {
            display: none;
            flex-direction: column;
            justify-content: center;
            background:  #FE789A;
            height: auto;
            width: 100%;
            text-align: center;
            padding: 1rem;
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

          a:hover {
            color: pink;
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