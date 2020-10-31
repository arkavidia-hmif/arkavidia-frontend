import React from 'react';

type CarouselItemProps = {
  backgroundImage?: string,
  width: string,
  foregroundImage?: string,
  desc: string,
  type: 'event' | 'competition',
  url: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ backgroundImage, width, foregroundImage, desc, type, url }) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`
  };

  const competitionStyle = {
    img: {
      width: `${width}`,
      left: "30px"
    },
    infoBox: {
      right: "0px",
      padding: "0.5rem 0.5rem 0.5rem 1rem",
      marginLeft: "85px"
    },
    title: {
      color: "#623FA2",
      textAlign: "right" as const
    },
    gradient: {
      transform: `rotate(0deg)`,
      backgroundImage: `linear-gradient(90.9deg, #EBE3FF 15.28%, rgba(255, 255, 255, 0) 99.31%`
    },
    infoBtn: {
      textAlign: "right" as const
    }
  };

  const eventStyle = {
    gradient: {
      transform: `rotate(180deg)`,
      backgroundImage: `linear-gradient(90.9deg, #FFD2E1 15.28%, rgba(255, 255, 255, 0) 99.31%)`
    },
    img: {
      width: `${width}`,
      right: "30px"
    },
    infoBox: {
      left: "0px",
      padding: "0.5rem 1rem 0.5rem 0.5rem",
      marginRight: "85px"
    },
    title: {
      color: "#B41A83",
      textAlign: "left" as const
    },
    infoBtn: {
      textAlign: "left" as const
    }
  };

  const choosenStyle = type === 'event' ? eventStyle : competitionStyle;

  return (
    <div className="item-carousel" style={background}>
      <div className="gradient" style={choosenStyle.gradient}></div>
      <img className="img-ctg d-none d-md-block" src={foregroundImage} style={choosenStyle.img}></img>
      <div className="content-p" style={choosenStyle.infoBox}>
        <p className="p-desc" style={choosenStyle.title}>{desc}</p>
        <a href={url}>
          <p className="p-info" style={choosenStyle.infoBtn}>more info</p>
        </a>
      </div>

      <style jsx>
        {`        
          * {
            box-sizing: border-box;
          }

          .item-carousel {
            position: absolute;
            width: 100%;
            height: 300px;
            margin: 0;
            padding: 0;
            border-radius: 1rem;
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-color: white;
          }

          .item-carousel .img-ctg {
            z-index: 2;
            position: absolute;
            bottom: 80px;
          }

          .content-p {
            z-index: 1;
            bottom: 0;
            position: absolute;
            background-color: white;
            padding: 5px;
          }

          .item-carousel .gradient {
            position: absolute;
            width: 100%;
            height: 300px;
            z-index: 0;
          }

          p {
            font-family: 'Viga';
            text-align: right;
            margin: 0px;
            padding: 0px;
          }

          .item-carousel .p-desc {
            font-size: 2rem;
          }

          .item-carousel .p-info {
            margin-top: -5px;
            font-size: 1rem;
            font-family: Roboto;
            color: #22A8C4;
            cursor: pointer;
          }

          @media (max-width: 576px) {
            .item-carousel .p-desc {
              font-size: 1.75rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselItem;
