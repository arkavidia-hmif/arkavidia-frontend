import * as React from 'react';

const Button : React.FC = () => (
  <div>
    <div className="flex-row-center">
      <button className="guidebook-button"><p className="tulisan-button">Download guidebook</p></button>
      <button className="daftar-sekarang-button"><p className="tulisan-button">Daftar Sekarang</p></button>
    </div>
    <style jsx>{`
            .flex-row-center {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
            }

            .guidebook-button {
                background: #5FE6EA;
                border-radius: 10px;
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 2.5em;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                padding-left: 2%;
                padding-right: 2%;
                text-align: center;
                border-color: transparent;
            }
  
            .daftar-sekarang-button {
                background: #623FA2;
                border-radius: 10px;
                display: flex;
                align-items: center;
                font-size: 2.5em;
                color: #FFFFFF;
                margin-left: 2%;
                padding: 0.8%;
                padding-left: 2%;
                padding-right: 2%;
                text-align: center;
                border-color: transparent;
            }

            .tulisan-button {
                margin-block-start: 0.2em;
                margin-block-end: 0.2em;
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 0.5em;
                color: #FFFFFF;
                text-align: center;
            }
  
            @media only screen and (max-width: 1000px) {
                .flex-row-center {
                    margin-top: 2%;
                    justify-content: center;
                }

                .guidebook-button {
                    border-radius: 10px;
                    font-size: 2rem;
                    min-width: 30%
                    padding-left: 1%;
                    padding-right: 2%;
                    margin-block-start: 1vw;
                    text-align: center;
                    
                }
            
                .daftar-sekarang-button {
                    border-radius: 10px;
                    min-width: 30%
                    margin-left: 2%;
                    padding: 0.8%;
                    padding-left: 1%;
                    padding-right: 2%;
                    margin-block-start: 1vw;
                    text-align: center;
                }

                .tulisan-button {
                    font-size: 1.2rem;
                    text-align: center;
                    margin-inline-start: 1.2vw;
                }
            }
          `}</style>
  </div>
);
  
export default Button;