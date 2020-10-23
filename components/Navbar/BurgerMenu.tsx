import Link from 'next/link'
import menuItem from '../../utils/constants/nav-item'

const BurgerMenu = ({ open }: any) => (
    <div>
        <div className="burger-menu">
            {menuItem.map((link, index) => (
                <Link key={index} href={link.path}><a>{link.text}</a></Link>
            ))}
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
                padding: 2rem;
                position: relative;
                top: 100px;
                transition: transform 0.3s ease-in-out;
            }

            a {
                font-family: Viga;
                font-size: 20px;
                text-transform: uppercase;
                padding: 2rem 0;
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
                transform: ${open ? 'translateX(0)' : 'translateX(200%)'};
            }
        `}</style>
    </div>
)

export default BurgerMenu