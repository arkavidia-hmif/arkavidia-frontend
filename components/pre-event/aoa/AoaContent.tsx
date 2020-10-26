import * as React from 'react'

const AoaContent: React.FC = () => (
    <div id="main-container">
        <div id="bg-container">
            <div id="city-container">
                <div id="bg-filter"/>
                <img src="/img/pre-event/aoa/phone.png" alt="city"/>
            </div>
        </div>
        <div id="content-container">
            <h1>ARKAVIDIA</h1>
            <h1>ON AIR</h1>
            <p>
                Arkavidia on Air merupakan suatu acara berbentuk kumpulan kajian mengenai 
                isu-isu teknologi yang relevan dan berdampak kepada masyarakat. 
                Kajian dilakukan dengan bahasa yang mudah dipahami oleh orang awam dan mudah dimengerti 
                tanpa perlu banyak pengetahuan sebelum-sebelumnya mengenai isu yang dibahas.
            </p>
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
                height: 40vh;
                position: relative;
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
                width: 100%;
                height: 90%;

                position: absolute;
                top: 0;
                left: 0;
                
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
                background: linear-gradient(101.29deg, #0083AF 10.7%, #FE81DB 76.97%);
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

export default AoaContent