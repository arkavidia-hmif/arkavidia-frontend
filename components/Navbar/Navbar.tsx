import Link from 'next/link'
import { useState } from 'react'
import NavDesktop from './NavDesktop'
import Burger from './Burger'
import BurgerMenu from './BurgerMenu'
import { Dimen } from '../../styles/dimen'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const burgerProps = {
        open: open,
        setOpen: setOpen
    }

    return (
        <header>
            <nav className="container-fluid max-content">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia" />
                        </a>
                    </Link>
                </div>
                <div className="spacer"></div>
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
                }
                nav {
                    display: flex;
                    width: 100%;
                    height: ${Dimen.navbarHeight};
                    align-items: center;
                }

                .logo {
                    padding-left: 30px;
                    max-width: 300px;
                }

                .logo img {
                    height: auto;
                    max-width: 100%;
                }

                @media (max-width: 1300px) {
                    .logo {
                        padding-left: 30px;
                    }
                    .spacer {
                        flex-grow: 0.9!important;
                    }
                }

                @media (max-width: 500px) {
                    .logo {
                        padding-left: 10px;
                        max-width: 200px;
                    }
                }

                @media (max-width: 300px) {
                    .logo {
                        max-width: 175px;
                    }
                }
            `}</style>
        </header>
    )
}

export default Navbar