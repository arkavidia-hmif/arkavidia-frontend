import React, { ReactNode, useState } from 'react'

// const arLeft = require('../../public/img/carousel/ar-left.png');
// const arRight = require('../../public/img/carousel/ar-right.png');

type CarouselProps = {
  children: ReactNode[],
  alignment: 'left' | 'right'
}

const Carousel: React.FC<CarouselProps> = ({ children, alignment }) => {
  const [position, setPosition] = useState(0);

  const goLeft = () => {
    setPosition(position + 100);
    console.log(position);
    if (position === 0) {
      setPosition(-100 * (children.length - 1));
    } else {
      setPosition(position + 100);
    }
  };

  const goRight = () => {
    console.log(position);
    if (position === -100 * (children.length - 1)) {
      setPosition(0);
    } else {
      setPosition(position - 100);
    }
  };

  const prevButtonStyle = alignment == 'right' ? { left: "10px" } : { right: "40px" };
  const nextButtonStyle = alignment == 'right' ? { left: "40px" } : { right: "10px" };

  return (
    <div className="carousels">
      {
        children.map((item: ReactNode, index: number) => {
          return (
            <div key={index} className="carousels-content" style={{ transform: `translateX(${position}%)` }}>
              {item}
            </div>
          );
        })
      }

      <img className="navigation-button" onClick={goLeft} src="/img/carousel/ar-left.png" style={prevButtonStyle} />
      <img className="navigation-button" onClick={goRight} src="/img/carousel/ar-right.png" style={nextButtonStyle} />

      <style jsx>
        {`
          .carousels {
            /* border: 1px solid blue; */
            width: 400px;
            height: 300px;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
          }
          
          .carousels-content {
            /* border: 1px solid blue; */
            min-width: 100%;
            height: 250px;
            transition: 0.5s;
          }
          
          .navigation-button {
            position: absolute;
            bottom: 0;
            z-index: 99;
            transform: translateY(-50%);
            width: 30px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Carousel;