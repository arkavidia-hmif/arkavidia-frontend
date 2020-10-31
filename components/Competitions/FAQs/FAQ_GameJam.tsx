import * as React from 'react';
import Question from './FAQ_Question';
import Answer from './FAQ_Answer';

const FAQ_GameJam : React.FC = () => (
  <div>
    <p className="timeline-title">FREQUENTLY ASKED QUESTIONS</p>
    <Question question="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"/>
    <Answer answer="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"/>
    <Question question="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"/>
    <style jsx>{`
            .flex-column-centered {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            .timeline-title {
                font-family: Viga;
                font-style: normal;
                font-weight: normal;
                font-size: 2.8rem;
                text-align: center;
                color: #0084AF;
            }

            @media only screen and (max-width: 1000px) {
                .timeline-title {
                    font-size: 3.5vw;
                }
            }
          `}</style>
  </div>
);
  
export default FAQ_GameJam;