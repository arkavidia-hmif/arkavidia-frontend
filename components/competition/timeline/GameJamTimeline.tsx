import * as React from 'react';
import CompetitionTimelineHeader from '../CompetitionTimeLineHeader';
import items from '../../../utils/constants/competition-gamedev-timeline-items';
import Ribbon from '../ribbons/Ribbon';

const DatavidiaTimeline : React.FC= () => (
  <div>
    <div id="timeline-container">
      <CompetitionTimelineHeader title="TIMELINE" />      
      <Ribbon items={items}/>
      <style jsx>{`
            #timeline-container {
                margin-bottom: 10%;
            }
        `}</style>
    </div>
  </div>
);
  
export default DatavidiaTimeline;