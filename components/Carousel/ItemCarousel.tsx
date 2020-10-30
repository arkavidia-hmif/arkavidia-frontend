import React from 'react'

type ItemCarouselProps = {
  backgroundImage?: string,
  width: string,
  foregroundImage?: string,
  desc: string,
  type: 'event' | 'competition'
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ backgroundImage, width, foregroundImage, desc, type }) => {
  const background = {
    backgroundImage: `url(${backgroundImage})`
  }

  const competitionStyle = {
    img: {
      width: `${width}`,
      left: "30px"
    },
    posR2: {
      right: "0px"
    },
    colorP: {
      color: "#623FA2"
    },
    gradient: {
      transform: `rotate(0deg)`,
      backgroundImage: `linear-gradient(90.9deg, #EBE3FF 15.28%, rgba(255, 255, 255, 0) 99.31%`
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

    posR2: {
      left: "0px"
    },

    colorP: {
      color: "#B41A83"
    }
  };

  const choosenStyle = type == 'event' ? eventStyle : competitionStyle;


  return (
    <div className="item-carousel" style={background}>
      <div className="gradient" style={choosenStyle.gradient}></div>
      <img className="img-ctg" src={foregroundImage} style={choosenStyle.img}></img>
      <div className="content-p" style={choosenStyle.posR2}>
        <p className="p-desc" style={choosenStyle.colorP}>{desc}</p>
        <p className="p-info">more info</p>
      </div>

      <style jsx>
        {`        
          * {
            box-sizing: border-box;
          }

          .item-carousel {
            position: absolute;
            width: 400px;
            height: 280px;
            margin: 0;
            padding: 0;
            border-radius: 5px;
            /* border: 1px solid red; */
            position: relative;
            overflow: hidden;
            background-size: cover;
            background-color: white;
          }

          .item-carousel .img-ctg {
            z-index: 2;
            position: absolute;
            bottom: 50px;
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
            height: 280px;
            z-index: 0;
          }

          p {
            font-family: 'Oswald', sans-serif;
            text-align: right;
            margin: 0px;
            padding: 0px;
          }

          .item-carousel .p-desc {
            font-weight: bold;
            font-size: 26px;
          }

          .item-carousel .p-info {
            margin-top: -5px;
            font-size: 12px;
            font-family: Roboto;
            color: #22A8C4;
          }
        `}
      </style>
    </div>
  )
}

export default ItemCarousel;
