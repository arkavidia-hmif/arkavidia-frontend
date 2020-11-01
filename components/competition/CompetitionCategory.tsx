import * as React from 'react';

type Props = {
    category: string,
    fee: string
  }

const Category : React.FC<Props> = ({category, fee}) => (
  <div>
    <div className="flex-row-category">
      <p className="category"><strong>Kategori</strong></p>
      <p className="category-text"><span className="category-bubble">{category}</span></p>
    </div>
    <div className="flex-row-category">
      <p className="category"><strong>Biaya Pendaftaran</strong></p>
      <p className="category-text"><span className="category-bubble">{fee}</span></p>
    </div>
    <style jsx>{`
            .flex-row-category {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
  
            .category {
                font-family: 'Roboto';
                font-weight: bold;
                font-size: 1.3rem;
                text-align: center;
                color: #000000;
                margin-block-start: 0em;
                margin-block-end: 0em;
            }

            .category-text {
                font-size: 1.5rem;
                text-align: left;
                margin-block-start: 0.5vw;
                margin-block-end: 0.5vw;
                min-width: 58%;
                margin-left: 2%;
            }

            .category-bubble {
                background: #906AF7;
                border-radius: 2vw;
                min-width: 110%;
                font-family: Roboto;
                font-size: 1.3rem;
                color: #FFFFFF;

                padding: 1%;
                padding-left: 3%;
                padding-right: 3%;
                margin-block-start: 0em;
                margin-block-end: 0;
            }
  
            @media only screen and (max-width: 1000px) {
                .flex-row-category {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .category {
                    font-size: 1.2rem;
                    margin-block-start: 1em;
                    margin-block-end: 0.5em;
                }

                .category-text {
                    font-size: 1.2rem;
                    width: 100%;
                    margin-block-start: 0.5vw;
                    margin-block-end: 0.5vw;
                    text-align: center;
                    margin-left: 0;
                }
            
                .category-bubble {
                    border-radius: 0.8rem;
                    min-width: 130%;
                    font-family: Roboto;
                    font-size: 1.2rem;
                    margin-left: 1%;
                    padding: 1.2%;
                    margin-block-end: 3vw;
                }
            }
          `}</style>
  </div>
);
  
export default Category;
