import * as React from "react";

interface Props {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const QuestionAnswer: React.FC<Props> = ({
  question,
  answer,
  isOpen = false,
}) => {
  const [open, setOpen] = React.useState<boolean>(isOpen);
  return (
    <div className="margin-bottom">
      <div className="wrapper" onClick={() => setOpen((a) => !a)}>
        <div className="question-container">
          <p className="faq-question-container">{question}</p>
          <img
            src={"/img/competitions/arrow-faq.png"}
            className={!open ? "vector-arrow top" : "vector-arrow bottom"}
          />
        </div>
      </div>
      <div className={open ? "show-children" : "hide-children"}>
        <div className="answer-container">
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
      <style jsx>{`
        .show-children {            
          transition: all 0.5s ease-in-out;
        }
        .hide-children {
          opacity: 0;
          display: none;
          transition: all 0.5s ease-in-out;
        }
        .margin-bottom {
          margin-bottom: 1rem;
          position: relative;
        }
        .wrapper {
          display: flex;
          cursor: pointer;
          justify-content: center;
        }
        .vector-arrow.top {
          transform: rotate(-180deg);
        }
        .question-container {
          width: 80%;
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
          background-color: #431785;
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
            transition: all .2s ease-in-out;
            width: 2rem;
            margin: .3rem;
        }
        .faq-answer {
          margin-block-start: 0;
          color: black;
          background-color: white;
          text-align: left;
          padding: 1%;
          font-size: 1.5rem;
          border-radius: 10px;
          padding-left: 3%;
          width: 80%;
        }
        .answer-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media only screen and (max-width: 1000px) {
          .question-container {
              width: 90%;
              border-radius: 5px;
          }

          .faq-question-container {
            padding-bottom: .5rem;
            padding-top: .5rem;
            font-size: 1.3rem;
          }
          .faq-answer {
            font-size: 1.1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-radius: 3px;
            width: 90%;
        }
        @media only screen and (max-width: 500px) {
          .faq-question-container {
            padding-bottom: .5rem;
            padding-top: .5rem;
            font-size: .9rem;
          }
          .faq-answer {
            font-size: .85rem;
            padding-top: .6rem;
            padding-bottom: .6rem;
            border-radius: 3px;
            width: 90%;
          }
          .vector-arrow {
            width: 1.2rem;
            margin: .2rem;
          } 
        }           
      `}</style>
    </div>
  );
};

export default QuestionAnswer;
