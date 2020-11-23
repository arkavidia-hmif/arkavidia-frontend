import * as React from "react";
import CompetitionTimelineHeader from "../CompetitionTimeLineHeader";
import EventTimeline from "components/EventTimeline";
import { GamejamTimelineItems } from "utils/constants/timeline-items";

const GameJamTimeline: React.FC = () => (
  <div>
    <div id="timeline-container">
      <CompetitionTimelineHeader title="TIMELINE" />
      <EventTimeline items={GamejamTimelineItems} />
      <style jsx>{`
        #timeline-container {
          margin-bottom: 10%;
        }
      `}</style>
    </div>
  </div>
);

export default GameJamTimeline;
