import * as React from 'react'

const Gallery: React.FC = () => (
    <div id="gallery-container">
        <div id="image-container">
            <div className="image-box1">
                <img src="/img/events/itfest/itfest1.svg" alt="gdblabs"/>
            </div>
            <div className="image-box2">
                <img src="/img/events/itfest/itfest2.svg" alt="moka"/>
            </div>
            <div className="image-box3">
                <img src="/img/events/itfest/itfest3.svg" alt="merch"/>
                <img src="/img/events/itfest/itfest4.svg" alt="crowd"/>
            </div>
        </div>
        <style jsx>{`
            #image-container {
                display: flex;
                height: 80vh;
                width: auto;
            }

            .image-box1 {
                width: 100%;
                height: auto;
                padding-right: 1rem;
            }

            .image-box2 {
                padding: 0 1rem;
            }

            .image-box3 {
                padding-left: 1rem;
            }    

            .image-box3 img:last-child {
                padding-top: 1rem;
            }

        `}</style>
    </div>
)

export default Gallery