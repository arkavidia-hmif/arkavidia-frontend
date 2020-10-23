import items from "../../utils/constants/nav-item"
import Link from 'next/link'
import FilledButton from "../FilledButton";

const NavDesktop = () => {
    return (
        <div className="items">
            <ul className="mr-3">
                {items.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}><a>{link.text}</a></Link>
                        <div className="indicator"></div>
                    </li>
                ))}
            </ul>
            <FilledButton text="LOGIN" padding="0.75em 1.5em" />

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