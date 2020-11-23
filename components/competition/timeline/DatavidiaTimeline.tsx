import * as React from "react";
import CompetitionTimelineHeader from "../CompetitionTimeLineHeader";
import EventTimeline from "components/EventTimeline";
import { DatavidiaTimelineItems } from "utils/constants/timeline-items";

const DatavidiaTimeline: React.FC = () => (
  <div>
    <div id="timeline-container">
      <CompetitionTimelineHeader title="TIMELINE" />
      <EventTimeline items={DatavidiaTimelineItems} />
      <style jsx>{`
            #timeline-container {
                margin-bottom: 10%;
            }
        `}</style>
    </div>
  </div>
);

export default DatavidiaTimeline;
