import Link from 'next/link'
import Items from './Items'

const BurgerMenu = ({open}: any) => (
    <div>
        <div className="burger-menu">
            {Items.map((link, index) => (
                <Link key={index} href={link.path}><a>{link.text}</a></Link>
            ))}
        </div>

        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
            .burger-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background:  #FE789A;
                height: auto;
                width: 100%;
                text-align: center;
                padding: 2rem;
                position: relative;
                top: 100px;
                right: 10px;
                transition: transform 0.3s ease-in-out;
            }

            a {
                font-family: Viga;
                font-size: 24px;
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
        `}</style>
        <style jsx>{`
            .burger-menu {
                transform: ${ ({open}) ? 'translateY(0)': 'translateY(-120%)' };
            }
        `}</style>
    </div>
)

export default BurgerMenu