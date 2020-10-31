import * as React from 'react';

type Props = {
    answer: string
  }

const Answer : React.FC<Props> = ({answer}) => (
  <div>
    <div className="answer-container">
      <p className="faq-answer">{answer}</p>
    </div>
    <style jsx>{`
            .answer-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .faq-answer {
                margin-block-start: 0;
                color: black;
                background-color: white;
                text-align: left;
                padding: 1%;
                font-size: 1.7vw;
                border-radius: 10px;
                padding-left: 3%;
                width: 80%;
            }
  
            @media only screen and (max-width: 1000px) {
                .faq-answer {
                    font-size: 1.9vw;
                    border-radius: 3px;
                    width: 80%;
                }
            }
          `}</style>
  </div>
);
  
export default Answer;