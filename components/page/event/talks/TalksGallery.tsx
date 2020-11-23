import * as React from "react";

const TalksGallery: React.FC = () => (
  <div id="image-container">
    <div className="image-box1">
      <div className="image-subbox">
        <img src="/img/event/talks/talks1.png" alt="class" />
        <img src="/img/event/talks/talks2.png" alt="talks" />
      </div>
      <div className="image-subbox">
        <img src="/img/event/talks/talks3.png" alt="certificate" />
        <img src="/img/event/talks/talks4.png" alt="listening" />
      </div>
    </div>
    <div className="image-box2">
      <img src="/img/event/talks/talks5.png" alt="speaker" />
    </div>
    <style jsx>{`
      #image-container {
        display: flex;
        width: 100%;
        overflow-x: scroll;
      }
      ::-webkit-scrollbar {
        width: 0px;
      }
      .image-box2 {
        padding: 0 1rem;
      }

      .image-subbox {
        display: flex;
        padding-bottom: 1rem;
        width: 100%;
      }

      .image-subbox img:first-child {
        padding-right: 1rem;
      }
    `}</style>
  </div>
);

export default TalksGallery;
