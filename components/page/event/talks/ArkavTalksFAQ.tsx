import React, { useState } from "react";
import CompetitionTimelineHeader from "../../../competition/CompetitionTimeLineHeader";
import Talks from "../../../../utils/constants/arkavTalksFAQ";
import AnswerTalksFAQ from "./AnswerTalksFAQ";

const ArkavFAQ: React.FC = () => {
  const [faqs, setFaqs] = useState(Talks.faq);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div className="App">
      <CompetitionTimelineHeader title="FREQUENTLY ASKED QUESTIONS" headerSize="2rem"/>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <AnswerTalksFAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <style jsx>
        {`
          .faqs {
            width: 65%;
            max-width: 768px;
            margin: 0 auto;
            padding: 1rem;
          }
          
          @media only screen and (max-width: 1000px) {
            .faqs {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ArkavFAQ;
