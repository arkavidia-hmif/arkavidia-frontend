import * as React from 'react'
import Buttons from './Buttons'
import Pricing from './Pricing'

const TechContent : React.FC = () => (
    <div id="main-container">
        <div id="bg-container">
            <div id="city-container">
                <div id="bg-filter"/>
                <img src="/img/pre-event/agts/school.png" alt="city"/>
            </div>
        </div>
        <div id="content-container">
            <h1>TECHNOCAMP</h1>
            <p>
                Technocamp adalah kegiatan selama dua hari yang mencakup dasar teori, 
                hands on, dan seminar IT untuk anak SMA/sederajat yang tertarik pada dunia pemrograman.
            </p>
            <Pricing/>
            <Buttons/>
        </div>
        <style jsx>{`
            #main-container {
                position: relative;
                height: 100vh;
                display: flex;
            }

            #bg-container{
                position: relative;
                top: 10%;
                left: 0;

                width: 100%;
                height: 60vh;
                
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin: 3rem 3rem 3rem 0;
            }

            #content-container{
                position: relative;
                height: 40vh;
                top: 25%;
            }

            #city-container{
                height: 100%;
            }

            #city-container img {
                position: relative;
                top: 5%;
                object-fit: contain;
                height: 100%;
                width: auto;
                z-index: 1;
            }

            #bg-filter{
                width: 90%;
                height: 100%;

                position: absolute;
                top: 0;
                left: 7%;
                
                border-radius: 50%;
                
                background: linear-gradient(86.05deg, rgba(0, 255, 255, 0.33) 2.59%, rgba(254, 238, 238, 0.54) 51.06%, rgba(255, 255, 255, 0) 93.84%);
                transform: rotate(54deg);
            }

            h1 {
                font-family: 'Viga';
                font-size: 4rem;
                font-weight: normal;
                margin : 0;
                line-height: 100%;
                background: -webkit-linear-gradient(101.29deg,#FE81DB 17.7%,  #0083AF 76.97%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            h3 {
                margin: 0;
                font-weight: 700;
                padding: 0 0 1rem 2rem;
                color:#0E2A47;
            }

            p {
                font-size: 1.2rem;
            } 
        `}</style>
    </div>
)

export default TechContent