import * as React from 'react'
import items from '../../../utils/constants/timeline-items'

const Ribbon :React.FC = () => (
  <div id="ribbon-container">
    {items.map((item, index) => 
      <div className="ribbon" key={index} style={item.css}>
        <h1>{item.date}</h1>
        <p>{item.content}</p>
      </div>
    )}
    <style jsx>{`
            #ribbon-container {
                overflow: hidden;
                display: flex;
                flex-wrap: wrap;
            }    

            .ribbon:first-child {
                clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 0% 0%);
            }
            
            .ribbon {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                margin: 0 -6rem 1rem 0;
                padding-right: 2%;
                clip-path: polygon(75% 0%, 90% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%);
                background: red;
                width: 450px;
                text-align: center;
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
                    font-size: 1rem;
                }

                p {
                    font-size: 0.8rem;
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