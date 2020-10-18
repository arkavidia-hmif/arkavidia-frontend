import Link from 'next/link'
import { useState } from 'react'
import NavItems from './NavItems'
import Burger from './Burger'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const burgerProps = {
        open: open,
        setOpen: setOpen
    }

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="/img/logo-horizontal.svg" alt="Logo Arkavidia"/>
                        </a>
                    </Link>
                </div>
                <div className="spacer"></div>
                <NavItems/>
                <Burger {...burgerProps}/>
            </nav>
            <BurgerMenu {...burgerProps}/>

            <style jsx>{`
                nav {
                    position: fixed;
                    display: flex;
                    padding-top: 10px;
                    width: 100%;
                    line-height: 32px;
                    align-items: center;
                }
                .logo {
                    padding-left: 60px;
                    max-width: 300px;
                    min-width: 200px;

                }
                .logo img {
                    height: auto;
                    max-width: 100%;
                }
                .spacer {
                    flex-grow: 0.7!important;
                }
            `}</style>
        </header>
    )
}

export default Navbar