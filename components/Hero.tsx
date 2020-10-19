import * as React from 'react'

function Hero (){
    return (
        <div className="main-container">
            <div className="bg-container">
                <div id="city-container">
                    <div id="bg-filter"></div>
                    <div className="sky-filter" id="sky-filter-1"></div>
                    <div className="sky-filter" id="sky-filter-2"></div>
                    <div className="sky-filter" id="sky-filter-3"></div>
                    <div className="sky-filter" id="sky-filter-4"></div>
                    <img src="/img/bg.png" />
                </div>
            </div>
            <style jsx>
                {`
                    #main-container{
                        max-width: 1200px;
                        height: 100vh;
                        margin: auto;
                        overflow: hidden; 
                        position: relative;
                    }
                    #bg-container{
                        position: absolute;
                        top:0;
                        left:0;
                        z-index: -1;
                      
                        width: 100%;
                        height: 100%;
                        
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }
                      
                    #city-container{
                        width: min(95vh,95vw);
                        height: min(95vh,95vw);
                        left: 600px;
                      
                        position: relative;
                    }
                      
                    #city-container img{
                        object-fit: contain;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }
                      
                    .sky-filter{
                        width: 57%;
                        height: 57%;
                      
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 2;
                        
                        opacity: 0;
                        border-radius: 50%;
                        animation-duration: 8s;
                        animation-name: sky-fade;
                        animation-iteration-count: infinite;
                    }
                      
                    #sky-filter-1{
                        animation-delay: 0s;
                        background: transparent linear-gradient(224deg, #5FE6EA 0%, #B395FFA8 30%, #FE598300 100%) 0% 0% no-repeat padding-box;
                    }
                      
                    #sky-filter-2{
                        animation-delay: 2s;
                        background: transparent linear-gradient(178deg, #451889 0%, #5FE6EA00 100%) 0% 0% no-repeat padding-box;
                    }
                      
                    #sky-filter-3{
                        animation-delay: 4s;
                        background: transparent linear-gradient(139deg, #FE5983 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box;
                    }
                      
                    #sky-filter-4{
                        animation-delay: 6s;
                        background: transparent linear-gradient(190deg, #5FE6EA 0%, #FEFEFE00 100%) 0% 0% no-repeat padding-box;
                    }
                      
                    #bg-filter{
                        width: 100%;
                        height: 70%;
                        
                        position: absolute;
                        z-index: 3;
                        
                        background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%);
                    }

                    @media (orientation:portrait) {
                        #bg-container{
                            align-items: flex-start;
                            padding-top: 150px;
                        }
                        #city-container{
                            left:0;
                        }
                        
                    }
                    @keyframes sky-fade{
                        0%{opacity: 0;}
                        25%{opacity: 1;}
                        50%{opacity: 0;}
                        100%{opacity: 0;}
                    }
                      
                `}
            </style>
        </div>
    )
}

export default Hero