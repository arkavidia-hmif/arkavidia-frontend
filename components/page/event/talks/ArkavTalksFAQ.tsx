import * as React from "react";
import CompetitionTimelineHeader from "../../../competition/CompetitionTimeLineHeader";
import QuestionAnswer from "../../../competition/faq/QuestionAnswer";

const ArkavTalksFAQ: React.FC = () => (
  <div className="margin-bottom">
    <CompetitionTimelineHeader title="FREQUENTLY ASKED QUESTIONS" />
    <QuestionAnswer
      question="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
      answer="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
      isOpen={true}
    />
    <QuestionAnswer
      question="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
      answer="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
    />
    <style jsx>{`
      .margin-bottom {
        margin-bottom: 5rem;
      }
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
        color: #0084af;
      }

      @media only screen and (max-width: 1000px) {
        .timeline-title {
          font-size: 3.5vw;
        }
      }
    `}</style>
  </div>
);

export default ArkavTalksFAQ;
