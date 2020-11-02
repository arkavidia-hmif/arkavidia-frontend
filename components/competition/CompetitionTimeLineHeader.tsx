import * as React from "react";

type Props = {
  title: string;
};

const CompetitionTimelineHeader: React.FC<Props> = ({ title }) => (
  <div className="header">
    <h2>{title}</h2>
    <style jsx>{`
      .header {
        text-align: center;
        margin: 5rem 0 3rem;
      }

      .header h2 {
        font-size: 3rem;
        color: #0084af;
      }

      @media (max-width: 1000px) {
        .header h2 {
          font-size: 2rem;
        }
      }
    `}</style>
  </div>
);

export default CompetitionTimelineHeader;