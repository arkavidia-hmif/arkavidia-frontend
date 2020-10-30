import React from 'react'

const ItemCarousel = (props: { styles: string, width: string, src: string, desc: string, position: number }) => {
  const background = {
    backgroundImage: `url(${props.styles})`
  }

  let img: any = {
    width: `${props.width}`,
    left: "30px"
  }

  let posR2: any = {
    right: "0px"
  }

  let colorP: any = {
    color: "#623FA2"
  }

  let gradient: any = {
    transform: `rotate(0deg)`,
    backgroundImage: `linear-gradient(90.9deg, #EBE3FF 15.28%, rgba(255, 255, 255, 0) 99.31%`
  }

  if (props.position == 1) {
    gradient = {
      transform: `rotate(180deg)`,
      backgroundImage: `linear-gradient(90.9deg, #FFD2E1 15.28%, rgba(255, 255, 255, 0) 99.31%)`
    }

    img = {
      width: `${props.width}`,
      right: "30px"
    }

    posR2 = {
      left: "0px"
    }

    colorP = {
      color: "#B41A83"
    }
  }

  return (
    <div className="item-carousel" style={background}>
      <div className="gradient" style={gradient}></div>
      <img className="img-ctg" src={props.src} style={img}></img>
      <div className="content-p" style={posR2}>
        <p className="p-desc" style={colorP}>{props.desc}</p>
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
