import Link from 'next/link'
import NavItems from './NavItems'

const Navbar = () => {
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
            </nav>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
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