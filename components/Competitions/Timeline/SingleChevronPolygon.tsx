import * as React from 'react';

type Props = {
    date: string,
    desc: string,
    color: string
  }

const SingleChevronPolygon : React.FC<Props> = ({ date, desc, color }) => (
  <div>
    <div className="polygon">
      <p className="text">{date}</p>
      <p className="text-caption">{desc}</p>
    </div>
    <style jsx>{`
            .polygon {
                background: ${color};
                clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
                padding: 3%;
                padding-bottom: 3%;
                width: 25rem;
                height: 8rem;
                margin-inline-start: -3rem;
                margin-inline-end: -3rem;
                margin-block-end: 0.5vw;
            }

            .text {
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                padding-left: 25%;
                font-family: Roboto;
                margin-block-end: 0.2vw;
                margin-block-start: 1.0vw;
            }

            .text-caption {
                font-size: 1.3rem;
                color: white;
                padding-left: 25%;
                padding-right: 8%;
                font-family: Roboto;
                margin-block-start: 0.8vw;
            }
  
            @media only screen and (max-width: 1000px) {
                .polygon {
                    width: 16.4rem;
                    height: 10vw;
                    padding: 3%;
                    margin-inline-start: -1.7rem;
                    margin-inline-end: -2rem;
                }

                .text {
                    font-size: 0.8rem;
                    margin-block-start: 1.65vw;
                    margin-block-start: 0.9vw;
                }

                .text-caption {
                    font-size: 0.8rem;
                    margin-block-start: 0.4vw;
                }
            }
          `}</style>
  </div>
);
  
export default SingleChevronPolygon;
