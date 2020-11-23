import * as React from "react";
import TechHeader from "./TechHeader";
import { TechnocampTimelineItems } from "utils/constants/timeline-items";
import EventTimeline from "components/EventTimeline";

const TechTimeline: React.FC = () => (
  <div id="timeline-container">
    <TechHeader title="TIMELINE" />
    <br />
    <EventTimeline items={TechnocampTimelineItems} />
    <style jsx>{`
        #timeline-container {
          margin-bottom: 10%;
        }
    `}</style>
  </div>
);

export default TechTimeline;