import * as React from 'react'
import TechHeader from './TechHeader'
import Ribbon from './Ribbon'

const TechTimeline : React.FC = () => (
    <div id="timeline-container">
        <TechHeader title="TIMELINE"/>
        <Ribbon/>
        <style jsx>{`
            #timeline-container {
                height: 70vh;
            }
        `}</style>
    </div>
)

export default TechTimeline