import * as React from 'react'

const TalksContent : React.FC = () => (
    <div id="main-container">
        <div id="bg-container">
            <div id="city-container">
                <div id="bg-filter"/>
                <img src="/img/event/talks/broadcast-tower.png" alt="city"/>
            </div>
        </div>
        <div id="content-container">
            <h1>ARKAVIDIA TALKS</h1>
            <p>
                Arkavidia Talks merupakan acara pada main event Arkavidia 7.0 berupa seminar (Public Talks) dan workshop (Advanced Talks) dimana diundangnya para praktisi dan profesional dalam industri IT. 
            </p>
        </div>
        <style jsx>{`
            #main-container {
                position: relative;
                height: 90vh;
                display: flex;
            }

            #bg-container{
                position: relative;
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
                right: 50%;
                object-fit: contain;
                height: 100%;
                width: auto;
                z-index: 1;
            }

            #bg-filter{
                width: 100%;
                height: 95%;

                position: absolute;
                left: 7%;
                
                border-radius: 50%;
                
                background:linear-gradient(127.12deg, #CDBBFF 20.51%, #FEEEEE 56.25%, rgba(255, 255, 255, 0) 83.3%);
                transform: rotate(-85.95deg);
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

        `}</style>
    </div>
)

export default TalksContent