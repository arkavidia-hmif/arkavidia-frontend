import DateColor from "utils/constants/date-color";
import Dates from "utils/constants/dates";

const TalksCalendar: React.FC = () => {
  return (
    <div id="date-container">
      <img src="/img/date.svg" alt="calendar" />
      <div className="dates mt-3 mt-lg-0 ml-0 ml-lg-3">
        {Dates.arkavtalks.map(entry => {
          return (
            <div key={entry.title}>
              <p className="date mt-4 mt-sm-0" >{entry.title}</p>
              {entry.items.map(item => {
                return (
                  <div className="mt-3" key={item.name}>
                    <p className="about mb-1">{item.name}</p>
                    <p className="time">{item.time}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        #date-container {
          margin-top: 5%;
          display: flex;
          align-items: flex-start;
        }

        .dates {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 100%;
        }

        .dates .date {
          font-weight: 700;
          font-size: 1.2rem;
          color: ${DateColor.event};
        }

        .dates .about {
          font-weight: 600;
          color: ${DateColor.eventAbout};
        }

        .dates .date:only-child {
          padding-top: 10px;
        }

        @media (max-width: 992px) {
          #date-container {
            display: block;
          }
        }

        @media (max-width: 576px) {
          .dates {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default TalksCalendar;