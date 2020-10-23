import items from "./Items"
import Link from 'next/link'

const NavDesktop = () => {
    return (
        <div className="items">
            <ul>
                {items.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}><a>{link.text}</a></Link>
                        <div className="indicator"></div>
                    </li>
                ))}
            </ul>
            <div className="login">
                <Link href="/"><a>LOGIN</a></Link>    
            </div>  

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
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

                .login:hover {
                    background: #FFFFFF;
                    transition: all 0.3s linear;
                    transform-origin: 1px;
                }

                .login a {
                    color: #FFFFFF;
                }

                .login a:hover {
                    color: #FE789A;
                    transition: all 0.3s linear;
                    transform-origin: 1px;
                }

                .items {
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                }

                .indicator {
                    display: none;
                    width: 100%;
                    height: 7px;
                    background: linear-gradient(90deg, #00FFFF 0%, #623FA2 100%);
                    transition: all 0.3s linear;
                    transform-origin: 1px;
                }

                a:hover + .indicator {
                    display: block;
                }

                @media (max-width: 1300px) {
                    .items {
                        display: none;
                    }
                }
            `}</style> 
        </div>
    )
}


export default NavDesktop;