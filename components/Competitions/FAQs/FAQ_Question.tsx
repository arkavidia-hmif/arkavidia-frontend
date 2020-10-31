import * as React from 'react';

type Props = {
    question: string
  }

const Question : React.FC<Props> = ({question}) => (
  <div>
    <div style={{display: "flex", justifyContent: "center"}}>
      <div className="question-container">
        <p className="faq-question-container">{question}</p>
        <img src={"/Images/Vector Arrow.png"} className="vector-arrow"/>
      </div>
    </div>
    <style jsx>{`
            .question-container {
                width: 60%;
                background-color: #431785;
                border-radius: 10px;
                padding: 1%;
                padding-left: 3%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding-right: 2%;
                margin-inline-start: 0;
                margin-inline-end: 0;
            }

            .faq-question-container {
                color: white;
                font-size: 1.5rem;
                margin-block-start: 0;
                margin-block-end: 0;
            }

            .vector-arrow {
                max-width: 100%;
                height: auto;
            }
  
            @media only screen and (max-width: 1000px) {
                .question-container {
                    width: 70%;
                    border-radius: 5px;
                }

                .faq-question-container {
                    font-size: 0.8rem;
                }
                
                .vector-arrow {
                    width: 2%;
                }
            }
          `}</style>
  </div>
);
  
export default Question;