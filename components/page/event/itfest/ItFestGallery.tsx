import * as React from 'react';

const ItFestGallery: React.FC = () => (
  <div id="gallery-container">
    <div id="image-container">
      <div className="image-box1">
        <img src="/img/event/itfest/itfest1.png" alt="gdblabs"/>
      </div>
      <div className="image-box2">
        <img src="/img/event/itfest/itfest2.png" alt="moka"/>
      </div>
      <div className="image-box3">
        <img src="/img/event/itfest/itfest3.png" alt="merch"/>
        <img src="/img/event/itfest/itfest4.png" alt="crowd"/>
      </div>
    </div>
    <style jsx>{`
            #image-container {
              display: flex;
              width: 100%;
              padding-bottom: 3rem;
              overflow-x: scroll;
            }
            ::-webkit-scrollbar {
              width: 0px;
            }
            .image-box1 {
                width: 100%;
                height: auto;
                padding-right: 0.5rem;
            }

            .image-box2 {
                padding: 0 0.5rem;
            }

            .image-box3 {
                padding-left: 0.5rem;
            }    

            .image-box3 img:last-child {
                padding-top: 1rem;
            }

        `}</style>
  </div>
);

export default ItFestGallery;