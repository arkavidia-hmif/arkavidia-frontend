import * as React from 'react'

const TalksGallery: React.FC = () => (
    <div id="image-container">
        <div className="image-box1">
            <div className="image-subbox">
                <img src="/img/event/talks/talks1.png" alt="class"/>
                <img src="/img/event/talks/talks2.png" alt="talks"/>
            </div>
            <div className="image-subbox">
                <img src="/img/event/talks/talks3.png" alt="certificate"/>
                <img src="/img/event/talks/talks4.png" alt="listening"/>
            </div>
        </div>
        <div className="image-box2">
            <img src="/img/event/talks/talks5.png" alt="speaker"/>
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
            }

            .image-box2 {
                padding: 0 1rem;
            }

            .image-subbox {
                display: flex;
                padding-bottom: 1rem;
            }

            .image-subbox img:first-child{
                padding-right: 1rem;
            }

        `}</style>
    </div>
)

export default TalksGallery