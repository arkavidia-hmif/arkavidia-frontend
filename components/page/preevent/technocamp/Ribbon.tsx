import * as React from "react";
import items from "../../../../utils/constants/timeline-items";

const Ribbon: React.FC = () => (
  <div id="ribbon-container">
    {items.map((item, index) =>
      <div className="ribbon" key={index} style={item.css}>
        <div className="text">
          <p className="ribbon-date mb-1 mt-2"><b>{item.date}</b></p>
          <p className="mb-2">{item.content}</p>
        </div>
      </div>
    )}
    <style jsx>{`
            #ribbon-container {
                overflow: hidden;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            .ribbon-date {
              font-size: 1.4rem;
            }

            .ribbon:first-child {
                clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 0% 0%);                
            }
            
            .text {
                display: flex;
                width: 65%;
                padding: .5rem 0;
                flex-direction: column;
                justify-content: center;
            }

            .ribbon {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              height: 6rem;
              margin: 0 -5.5rem 1rem 0;
              clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%);
              width: 370px;
            }

            p {
                font-size: 1.1rem;
                color: #FFFFFF;
            }

            @media (max-width: 1100px) {
                .ribbon {
                  height: 5rem;
                }
                .ribbon-date {
                  font-size: 1.2rem;
                }
                p {
                    font-size: .9rem;
                }
            }

            @media (max-width: 700px) {
              #ribbon-container {
                justify-content: flex-start;
              }
                .ribbon {
                    width: 310px;
                    height: 4rem;
                }
                .ribbon-date {
                  font-size: 1rem;
                }
                p {
                  font-size: .8rem;
              }
            }
            @media (max-width: 700px) {             
                .ribbon {
                    width: 340px;
                }
                .ribbon-date {
                  font-size: 1.15rem;
                }
                p {
                  font-size: .95  rem;
              }
            }
        `}</style>
  </div>
);

export default Ribbon;