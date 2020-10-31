import * as React from 'react'

const AGTSGallery: React.FC = () => (
  <div id="gallery-container">
    <div id="image-container">
      <div className="image-box1">
        <img src="/img/preevent/agts/agts2.png" alt="school" />
      </div>
      <div className="image-box2">
        <img src="/img/preevent/agts/agts1.png" alt="speaker" />
      </div>
    </div>
    <style jsx>{`
            #image-container {
                display: flex;
                margin-bottom: 10%;
            }

            .image-box1 img {
                width: 100%;
                padding-right: 1rem;
            }

            .image-box2 img{
                width: 100%;
                padding: 0 1rem;
            }

            @media (max-width: 1000px) {
                .image-box1 {
                    margin-right: 5%;
                }
                
                .image-box1 img {
                    padding: 0;
                }

                .image-box2 img {
                    padding: 0;
                }
            }

        `}</style>
  </div>
)

export default AGTSGallery