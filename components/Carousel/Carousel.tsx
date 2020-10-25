import React, {useState} from 'react'
import '../css/carousels.css'

const arLeft = require('../../public/img/carousel/ar-left.png');
const arRight = require('../../public/img/carousel/ar-right.png');

const Carousel = (props: { itemArr: any, position: number }) => {
    const [x, setX] = useState(0);

    const goLeft = () => {
        setX(x + 100);
        console.log(x);
        if (x === 0) {
            setX(-100*(props.itemArr.length-1));
        } else {
            setX(x + 100);
        }
    };

    const goRight = () => {
        console.log(x);
        if (x === -100*(props.itemArr.length - 1)) {
            setX(0);
        } else {
            setX(x - 100);
        }
    };

    let posR1: any = {
        left: "10px"
    }

    let posR2: any = {
        left: "40px"
    }

    if (props.position == 1) {
        posR1 = {
            right: "40px"
        }

        posR2 = {
            right: "10px"
        }
    }

    return (
        <div className="carousels">
            {
                props.itemArr.map((item: any, index: number) => {
                    return (
                        <div key={index} className="carousels-content" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })
            }

            <img id="goLeft" onClick={goLeft} src={arLeft} style={posR1}/>
            <img id="goRight" onClick={goRight} src={arRight} style={posR2}/>

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
                
                #goRight, #goLeft {
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