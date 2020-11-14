import * as React from "react";

const Pricing : React.FC = () => (
  <div id="pricing">
    <div className="wrapper">
      <div className="text">
        <p>Kategori</p>
      </div>
      <div className="coloredText">
        <p>SMA/Sederajat</p>
      </div>
    </div>
    <div className="wrapper">
      <div className="text">
        <p>Biaya Komitmen</p>
      </div>
      <div className="coloredText">
        <p>Rp50.000,-</p>
      </div>
    </div>
    <style jsx>{`
            p {
                margin: 0;
            }

            #pricing {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
            }

            .wrapper {
                margin: 1rem 0;
                display: flex;
                align-items: center
            }

            .text {
                padding-right: 1rem;
                font-weight: 700;
            }

            .coloredText {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFFF;
                background: #0084B0;
                border-radius: 15px;
                padding: 0.3rem 0.5rem;
            }

            @media (max-width: 1000px) {
                .wrapper {
                    flex-direction: column;
                }

                .coloredText {
                    margin-top: 2%;
                }
            }
        `}</style>
  </div>
);

export default Pricing;