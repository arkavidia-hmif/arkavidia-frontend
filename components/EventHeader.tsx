import * as React from 'react'
import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    image: string,
    imageAlt: string,
    title: string,
    paragraph: string,
    bg?: string
}

const EventHeader: React.FC<Props> = ({ children, image, imageAlt, title, paragraph, bg}) => (
    <div id="main-container">
        <div id="logo-container">
            <img src={image} alt={imageAlt}/>
        </div>
        <div id="content-container">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {children}
        </div>
        <style jsx>{`
            #main-container {
                display: flex;
                margin-bottom: 10%;
            }

            #content-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 50%;
            }

            #logo-container {
                width: 50%;
                margin-right: 5%;
            }
            
            #logo-container img {
                width: 100%;
            }

            h1 {
                font-family: 'Viga';
                font-size: 4rem;
                font-weight: normal;
                margin : 0;
                line-height: 100%;
                background: ${bg};
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent
            }

            h3 {
                font-weight: 700;
                padding-left: 13px;
                color: #623FA2;
            }

            p {
                font-size: 1.2rem;
            }     
        `}</style>
    </div>
)

export default EventHeader