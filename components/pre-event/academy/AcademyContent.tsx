import * as React from 'react'

const AcademyContent: React.FC = () => (
    <div id="main-container">
        <div id="bg-container">
            <div id="city-container">
                <div id="bg-filter"/>
                <img src="/img/pre-event/academy/academy1.png" alt="city"/>
            </div>
        </div>
        <div id="content-container">
            <h1>ARKAVIDIA<br/>ACADEMY</h1>
            <p>
                Arkavidia Academy adalah rangkaian acara pre-event dari Arkavidia yang bertujuan 
                untuk meningkatkan kemampuan dalam bidang informatika. 
                Dalam pelaksanaannya, Arkavidia Academy bekerjasama dengan perusahaan 
                atau startup ternama Indonesia yang bergerak dalam bidang teknologi.
            </p>
            <div className="date-container">
                <img src="/img/date1.svg" alt="calendar"/>
                <div className="dates">
                    <h3>Sabtu, 30 Januari 2021</h3>
                    <h3>Sabtu, 6 Februari 2021</h3>
                    <h3>Sabtu, 13 Februari 2021</h3>
                    <h3>Sabtu, 20 Februari 2021</h3>
                </div>
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
                top: 10%;

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
                background: -webkit-linear-gradient(101.29deg, #0083AF 100%, #FE81DB 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent
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

            .date-container {
                display: flex;
                align-items: flex-start;
            }     

        `}</style>
    </div>
)

export default AcademyContent