import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavDesktop from './NavDesktop'
import Burger from './Burger'
import BurgerMenu from './BurgerMenu'
import { Dimen } from '../../styles/dimen'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const burgerProps = {
    open: open,
    setOpen: setOpen
  }

  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    console.log(window.pageYOffset)
    if (onTop != (window.pageYOffset == 0)) {
      setOnTop(window.pageYOffset == 0);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  return (
    <header className={onTop ? '' : 'shadow'}>
      <nav className="container-fluid max-content">
        <div className="logo pl-md-3">
          <Link href="/">
            <a>
              <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
            </a>
          </Link>
        </div>
        <div id="spacer" />
        <NavDesktop />
        <Burger {...burgerProps} />
      </nav>
      <BurgerMenu {...burgerProps} />

      <style jsx>{`
          header {
            padding: 0.05;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
            z-index: 20;
            background: #FFFF;

            transition: box-shadow .3s cubic-bezier(.4,0,.2,1);
          }
          header.shadow{
            box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
          }

          nav {
            background: #FFFF;
            display: flex;
            width: 100%;
            height: ${Dimen.navbarHeight};
            align-items: center;
          }

          .logo {
            max-width: 300px;
          }

          .logo img {
            height: 60px;
          }

          @media (max-width: 1300px) {
            #spacer {
                flex-grow: 1!important;
            }
            .logo img {
              height: 30px;
            }
            nav {
              height: ${Dimen.navbarMobileHeight}
            }
          }
      `}</style>
    </header>
  )
}

export default Navbar