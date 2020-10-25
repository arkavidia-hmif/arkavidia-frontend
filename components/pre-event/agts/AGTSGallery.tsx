import * as React from 'react'

const AGTSGallery: React.FC = () => (
    <div id="gallery-container">
        <div id="image-container">
            <div className="image-box1">
                <img src="/img/event/itfest/itfest1.png" alt="gdblabs"/>
            </div>
            <div className="image-box2">
                <img src="/img/event/itfest/itfest2.png" alt="moka"/>
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

        `}</style>
    </div>
)

export default AGTSGallery