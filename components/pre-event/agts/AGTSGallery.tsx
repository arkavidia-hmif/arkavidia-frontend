import * as React from 'react'

const AGTSGallery: React.FC = () => (
    <div id="gallery-container">
        <div id="image-container">
            <div className="image-box1">
                <img src="/img/pre-event/agts/agts2.png" alt="school"/>
            </div>
            <div className="image-box2">
                <img src="/img/pre-event/agts/agts1.png"  alt="speaker"/>
            </div>
        </div>
        <style jsx>{`
            #image-container {
                display: flex;
                height: 60vh;
                width: auto;
            }

            .image-box1 img {
                width: 100%;
                padding-right: 1rem;
            }

            .image-box2 img{
                width: 100%;
                padding: 0 1rem;
            }

        `}</style>
    </div>
)

export default AGTSGallery