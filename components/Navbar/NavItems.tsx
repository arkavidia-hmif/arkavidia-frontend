import items from "./Items"
import Link from 'next/link'

const NavItems = () => (
    <div className="items">
        <ul>
            {Object.entries(items).map(([name, link]) => (
                <li key={`item--${name}`}><Link href={link}><a>{name}</a></Link></li>
            ))}
        </ul>
        <div className="login">
            <Link href="/"><a>LOGIN</a></Link>    
        </div>  

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
                font-size: 24px;
                padding: 0 15px;
                text-decoration: none;
            }
            .login {
                margin-left: 20px;
                padding: 10px;
                background: #FE789A;
                border-radius: 15px;
            }
            .login a {
                color: #FFFFFF;
            }
            .items {
                display: flex;
                align-items: center;
                padding: 0 20px;
            }
        `}</style> 
    </div>
)

export default NavItems;