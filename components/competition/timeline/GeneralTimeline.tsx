import * as React from "react";
import CompetitionTimelineHeader from "../CompetitionTimeLineHeader";
import EventTimeline from "components/EventTimeline";
import { CompetitionTimelineItems } from "utils/constants/timeline-items";

const GeneralTimeline: React.FC = () => (
  <div>
    <div id="timeline-container">
      <CompetitionTimelineHeader title="TIMELINE" />
      <EventTimeline items={CompetitionTimelineItems} />
      <style jsx>{`
          #timeline-container {
              margin-bottom: 10%;
          }
      `}</style>
    </div>
  </div>
);

export default GeneralTimeline;
