import * as React from "react";

interface date {
  date: string,
  time: string
}

type Props = {
  color?: string;
  dates?: string[];
  datesDetail?: date[]
  colorAbout?: string;
};

const DateContainerExp: React.FC<Props> = ({ dates, color, colorAbout, datesDetail }) => (
  <div id="date-container">
    <img src="/img/date.svg" alt="calendar" />
    <div className="dates">
      {colorAbout ? (
        datesDetail?.map((date, index) => (
          <div key={index}>
            <p className="date">{date.date}</p>
            <p className="about">{date.time}</p>
          </div>
        ))
      ) : (
        dates?.map((date, index) => (
          <p className="date" key={index}>{date}</p>
        ))
      )}
    </div>
    <style jsx>{`
      #date-container {
        margin-top: 5%;
        display: flex;
        align-items: flex-start;
      }

      .dates {
        margin-left: 5%;
      }

      .dates .date {
        font-weight: 700;
        font-size: 1.2rem;
        color: ${color};
        margin: 0;
      }

      .dates .about {
        font-weight: 600;
        font-size: 1rem;
        color: ${colorAbout};
        margin-bottom: 5%;

      }

      .dates .date:only-child {
        padding-top: 10px;
      }

      @media (max-width: 1000px) {
        #date-container {
          display: block;
        }

        .dates {
          margin-left: 0;
          margin-top: 5%;
        }

        .dates .date:only-child {
          padding-top: 0;
        }
      }
    `}</style>
  </div>
);

export default DateContainerExp;
