import * as React from 'react';
import CompetitionTimelineHeader from '../CompetitionTimeLineHeader';
import Ribbon from '../ribbons/Ribbon';
import items from 'utils/constants/competition-general-timeline-items';

const GeneralTimeline: React.FC = () => (
  <div>
    <div id="timeline-container">
      <CompetitionTimelineHeader title="TIMELINE" />
      <Ribbon items={items} />
      <style jsx>{`
          #timeline-container {
              margin-bottom: 10%;
          }
      `}</style>
    </div>
  </div>
);

export default GeneralTimeline;
