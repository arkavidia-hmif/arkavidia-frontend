import * as React from "react";

interface Props {
  title: string;
  headerSize?: string;
}

const CompetitionTimelineHeader: React.FC<Props> = ({ title, headerSize = "3rem" }) => (
  <div className="header">
    <h2>{title}</h2>
    <style jsx>{`
      .header {
        text-align: center;
        margin: 5rem 0 1.5rem;
      }

      .header h2 {
        font-size:  ${headerSize};
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
