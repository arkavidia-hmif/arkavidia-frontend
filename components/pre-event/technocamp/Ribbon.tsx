import * as React from 'react'
import items from '../../../utils/constants/timeline-items'

const Ribbon :React.FC = () => (
  <div id="ribbon-container">
    {items.map((item, index) => 
      <div className="ribbon" key={index} style={item.css}>
        <div className="text">
          <h1>{item.date}</h1>
          <p>{item.content}</p>
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

            .ribbon:first-child {
                clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 0% 0%);
            }
            
            .text {
                display: flex;
                width: 50%;
                flex-direction: column;
                justify-content: center;
            }

            .ribbon {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 0 -6rem 1rem 0;
                clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%);
                width: 430px;
            }

            h1 {
                font-size: 1.5rem;
                color: #FFFFFF;
            }

            p {
                font-size: 1rem;
                color: #FFFFFF;
            }

            @media (max-width: 1000px) {
                .ribbon {
                    margin-right: -4rem;
                    width: 350px;
                }
                h1 {
                    font-size: 1.2rem;
                }

                p {
                    font-size: 1rem;
                }
            }

            @media (max-width: 700px) {
                .ribbon {
                    margin-right: -3rem;
                    width: 250px;
                }
            }
        `}</style>
  </div>
)

export default Ribbon