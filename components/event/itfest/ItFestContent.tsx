import * as React from 'react'

const ItFestContent: React.FC = () => (
    <div id="main-container">
        <div id="bg-container">
            <div id="city-container">
                <div id="bg-filter"/>
                <img src="/img/event/itfest/startups.svg" alt="city"/>
            </div>
        </div>
        <div id="content-container">
            <h1>IT FEST</h1>
            <p>
                IT Fest merupakan salah satu mata acara pada Arkavidia 7 yang merupakan sebuah acara pameran IT yang diisi oleh perusahaan-perusahaan dan startup-startup di bidang teknologi informasi.
            </p>
            <div className="date-container">
                <img src="/img/date1.svg" alt="calendar"/>
                <h3>Sabtu, 27 Februari 2021</h3>
            </div>
        </div>
        <style jsx>{`
            #main-container {
                position: relative;
                height: 100vh;
                display: flex;
            }

            #bg-container{
                position: relative;
                top: 5%;
                left: 0;

                width: 100%;
                height: 70vh;
                
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            #content-container{
                position: relative;
                top: 30%;
                left: 10%; 
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
                height: 90%;

                position: absolute;
                top: 0;
                left: 7%;
                transform: translateX(-50%);
                
                border-radius: 50%;
                
                background: linear-gradient(127.12deg, #CDBBFF 20.51%, #FEEEEE 56.25%, rgba(255, 255, 255, 0) 83.3%);
                transform: rotate(19.29deg);
            }

            h1 {
                font-family: 'Viga';
                font-size: 4rem;
                font-weight: normal;
                margin : 0;
                line-height: 100%;
                background: -webkit-linear-gradient(101.29deg, #906AF7 17.7%, #FE628B 76.97%);
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

            .date-container {
                display: flex;
            }     
        `}</style>
    </div>
)

export default ItFestContent