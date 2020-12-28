import * as React from "react";
import TalksCarousel from "./TalksCarousel";
import { TalksItems } from "utils/constants/talks-items";

const TalksTab: React.FC = () => {
  const [tabSelection, setTabSelection] = React.useState(0);

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6 offset-md-3 col-12" style={{ textAlign: "center" }}>
          <img src={TalksItems[tabSelection].hero} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <ul>
            <li
              className={tabSelection === 0 ? "current" : ""}
              onClick={() => setTabSelection(0)}>
              <h2>PUBLIC TALKS</h2>
            </li>
            <li
              className={tabSelection === 1 ? "current" : ""}
              onClick={() => setTabSelection(1)}>
              <h2>ADVANCED TALKS</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TalksCarousel
            items={TalksItems[tabSelection].items}
          />
        </div>
      </div>
      <style jsx>{`
        ul {
          position: relative;
          display: flex;
          flex-direction: row;
          padding: 0;
          justify-content: center;
        }

        li {
          height: 3rem;
          margin: 0 2rem;
          border: 0rem;

          cursor: pointer;

          // underline
          border-image-slice: 1;
          border-image-source: linear-gradient(90deg, #623fa2 0%, #f25785 100%);
          display: flex;
          
          // text
          font-family: Viga;
          font-size: 1.25rem;
          color: #623fa2 !important;
        }

        li:hover {
          border-bottom: 0.5rem solid;
        }

        li.current {
          border-bottom: 0.5rem solid;
        }
      `}</style>
    </>
  );
};

export default TalksTab;
