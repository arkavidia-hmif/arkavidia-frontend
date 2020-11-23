import React, { useState } from "react";
import FAQBox from "./FAQBox";
import CompetitionTimelineHeader from "components/competition/CompetitionTimeLineHeader";
import { FAQEntry } from "interfaces/faq";

interface Props {
  entries: Array<FAQEntry>
}

const FAQSection: React.FC<Props> = ({ entries: inputEntries }) => {

  const entries = inputEntries.map(entry => { return ({ ...entry, open: false }); });
  entries[0].open = true;

  const [faqs, setFaqs] = useState(entries);

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
      <CompetitionTimelineHeader title="FREQUENTLY ASKED QUESTIONS" />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQBox key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <style jsx>
        {`
          .faqs {
            width: 80%;
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

export default FAQSection;
