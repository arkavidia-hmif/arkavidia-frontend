import items from "./Items"
import Link from 'next/link'
import { useState } from 'react'

const NavDesktop = () => {
    const [hover, setHover] = useState(-1);

    return (
        <div className="items">
            <ul>
                {items.map((link, index) => (
                    <li key={index}
                        onMouseEnter = { () => setHover(index)}
                        onMouseLeave = { () => setHover(-1)}
                        style = {{ color: hover === index ? '#FE789A' :  '#623FA2' }}
                    >
                        <Link href={link.path}><a>{link.text}</a></Link>
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
                .login a {
                    color: #FFFFFF;
                }
                .items {
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
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