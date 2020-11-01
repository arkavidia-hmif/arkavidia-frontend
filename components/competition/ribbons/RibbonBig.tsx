import * as React from 'react';

type Props = {
    image: string,
    title: string,
    caption: string
  }

const BigRibbon : React.FC<Props> = ({image, title, caption}) => (
  <div>
    <div className="background-ribbon">
      <img src={image} className="ribbon"/>
      <p className="juara-text">{title}</p>
      <p className="hadiah-text">{caption}</p>
    </div>
    <style jsx>{`
            .background-ribbon {
                width: 16rem;
                height: "auto";
                background: rgba(219, 205, 255, 0.72);
                border-radius: 5%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                padding: 5%;
                margin-right: 2%;
            }

            .ribbon {
                width: 8rem;
                height: "auto";
                opacity: 0.8;
            }

            .juara-text {
                font-family: Roboto;
                font-size: 2rem;
                text-align: center;       
                color: #000000;
                margin-block-start: 0em;
                margin-block-end: 0em;
            }

            .hadiah-text {       
                font-family: 'Roboto';
                font-size: 2rem;
                text-align: center;
                font-weight: bold;
                color: #431785;
                margin-block-start: 0em;
                margin-block-end: 0em;
                margin-inline-start: 0.25em;
                margin-inline-end: 0.25em;
            }
  
            @media only screen and (max-width: 1000px) {
                .background-ribbon {
                    width: 10rem;
                    height: 11rem;
                    border-radius: 10px;
                    padding: 4%;
                    margin-right: 2%;
                }
                
                .ribbon {
                    width: 6rem;
                }

                .juara-text {
                    font-size: 1.3rem;
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                }

                .hadiah-text {
                    font-size: 1.3rem;
                    color: #431785;
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                    margin-inline-start: 0.5em;
                    margin-inline-end: 0.5em;
                }
            }
          `}</style>
  </div>
);
  
export default BigRibbon;