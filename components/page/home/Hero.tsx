import * as React from "react";

const Hero: React.FC = () => {
  return (
    <div id="main-container" className="row">
      <div id="bg-container">
        <div id="city-container">
          <div id="bg-filter" />
          <div className="sky-filter" id="sky-filter-1"></div>
          <div className="sky-filter" id="sky-filter-2"></div>
          <div className="sky-filter" id="sky-filter-3"></div>
          <div className="sky-filter" id="sky-filter-4"></div>
          <img src="/img/bg-white.png" />
        </div>
      </div>
      <div id="content-container">
        <h1>ESTABLISHING DIGITAL</h1>
        <h1>INDEPENDENCE</h1>
        <p id="date">26-28 February 2021</p>
      </div>
      <style jsx>
        {`
          #main-container {
            position: relative;
            height: 85vh;
            overflow: hidden;
            padding-top: 3rem;
          }

          #content-container {
            position: relative;
            z-index: 4;
          }

          h1 {
            font-family: "Viga";
            font-size: 4rem;
            font-weight: normal;
            margin: 1rem 0 0;

            line-height: 100%;
            color: #431785;
          }

          #date {
            font-family: "Viga";
            font-size: 1.5rem;
            font-weight: normal;
            margin: 0;

            color: #094963;
          }

          #bg-container {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 80vh;

            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          #city-container {
            height: 100%;
            position: relative;
          }

          #city-container img {
            object-fit: contain;
            height: 100%;
            width: auto;
            z-index: 1;
          }

          .sky-filter {
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

          #sky-filter-1 {
            animation-delay: 0s;
            background: transparent
              linear-gradient(224deg, #5fe6ea 0%, #b395ffa8 30%, #fe598300 100%)
              0% 0% no-repeat padding-box;
          }

          #sky-filter-2 {
            animation-delay: 2s;
            background: transparent
              linear-gradient(178deg, #451889 0%, #5fe6ea00 100%) 0% 0%
              no-repeat padding-box;
          }

          #sky-filter-3 {
            animation-delay: 4s;
            background: transparent
              linear-gradient(139deg, #fe5983 0%, #ffffff00 100%) 0% 0%
              no-repeat padding-box;
          }

          #sky-filter-4 {
            animation-delay: 6s;
            background: transparent
              linear-gradient(190deg, #5fe6ea 0%, #fefefe00 100%) 0% 0%
              no-repeat padding-box;
          }

          #bg-filter {
            width: 57%;
            height: 57%;

            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;

            border-radius: 50%;

            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }

          @media (orientation: portrait) {
            #content-container {
              text-align: center;

              margin-top: 1.5rem;

              padding: 0;

              width: 100%;
            }

            #bg-container {
              align-items: flex-start;
              justify-content: center;
              padding-top: 5rem;
            }
            #main-container {
              padding-top: 1rem;
            }
          }

          @media (max-width: 768px) {
            #main-container {
              height: 70vh;
            }

            #bg-container {
              height: 70vh;
            }
          }

          @media (max-width: 475px) {
            #main-container {
              height: 50vh;
            }

            #bg-container {
              height: 50vh;
            }

            h1 {
              font-size: 2.5rem;
              margin-top: 0;
            }

            #date {
              font-size: 1.25rem;
            }
          }

          @keyframes sky-fade {
            0% {
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
