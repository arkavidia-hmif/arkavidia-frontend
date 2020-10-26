import * as React from 'react'
import Link from 'next/link'
import DashItems from '../../utils/constants/dash-item'
import { useRouter } from "next/dist/client/router";

const DashboardWrapper: React.FC = () => {
    const router = useRouter();

    return (
        <div className="container-fluid">
            <div id="user">
                <h2>Dashboard</h2>
                <h1>Halo, John Doe</h1>
            </div>

            <div id="menu">
                <ul>
                    {DashItems.map((link, index) => (
                    <li key={index}>
                        <Link href={link.route}><a className={router.pathname === link.route ? "current" : ""}>{link.title}</a></Link>
                        <div className="indicator mt-5"></div>
                    </li>
                    ))}
                </ul>
                <hr className="line" />
            </div>
            <style jsx>{`
                h1 {
                    font-family: Viga;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 3rem;
                    background-image: linear-gradient(#FE5982, #623FA2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                h2 {
                    font-family: Viga;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 2rem;
                    color: #431785;
                }

                ul {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    list-style-type: none;
                }

                li {
                    position: relative;
                    display: flex;
                }

                a{
                    text-decoration: none;
                    font-family: Viga;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 1.5rem;

                    color: #623FA2;
                }

                .indicator {
                    opacity: 0;
                    position: absolute;
                    width: 100%;
                    height: 0.5rem;
                    background: linear-gradient(90deg, #623FA2 0%, #F25785 100%);
                    transition: opacity 0.2s ease-in;
                    transform-origin: 1px;
                }

                a:hover + .indicator {
                    opacity: 1;
                }
        
                a.current + .indicator {
                    opacity: 1;
                }

                hr.line{
                    border: 0.25rem solid #C4C4C4;
                    border-radius: 0.5rem;
                }
            `}
            </style>
        </div>
    )
}

export default DashboardWrapper