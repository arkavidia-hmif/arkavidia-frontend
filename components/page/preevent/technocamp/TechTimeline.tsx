import * as React from "react";
import TechHeader from "./TechHeader";
import Ribbon from "./Ribbon";

const TechTimeline: React.FC = () => (
  <div id="timeline-container">
    <TechHeader title="TIMELINE" />
    <br />
    <Ribbon />
    <style jsx>{`
            #timeline-container {
                margin-bottom: 10%;
            }
        `}</style>
  </div>
);

export default TechTimeline;