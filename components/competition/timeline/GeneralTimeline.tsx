import * as React from 'react';
import CompetitionTimelineHeader from '../CompetitionTimeLineHeader';
import Ribbon from '../ribbons/Ribbon';
import items from '../../../utils/constants/competition-general-timeline-items';

const GeneralTimeline : React.FC= () => (
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
    {/* <p className="title">TIMELINE</p>
    <div className="flex-row">
      <Polygon date="5 November 2020" desc="Pembukaan Pendaftaran" color={colors[0]}/>
      <ChevronPolygon date="18 Desember 2020" desc="Penutupan Pendaftaran" color={colors[1]}/>
      <ChevronPolygon date="23 Desember 2020" desc="Batas Pembayaran Biaya Pendaftaran" color={colors[2]}/>
      <ChevronPolygon date="30 Januari 2021" desc="Warmup" color={colors[3]}/>
      <ChevronPolygon date="31 Januari 2021" desc="Babak Penyisihan" color={colors[4]}/>
      <ChevronPolygon date="15 Februari 2021" desc="Pengumuman Finalis" color={colors[5]}/>
      <ChevronPolygon date="28 Februari 2021" desc="Babak Final & Awarding Night" color={colors[6]}/>
    </div>
    <style jsx>{`
        .flex-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            overflow: hidden;
            transform: translateX(0.2%);
            margin: auto;
            margin-left: 15%;
            margin-right: 15%;
        }

        .text {
            font-size: 2vw;
            color: white;
        }

        .text-caption {
            font-size: 1.8vw;
            color: white;
        }

        .title {
            text-align: center;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            font-size: 3vw;
            color: #0084AF;
        }

        @media only screen and (max-width: 1000px) {
            .flex-row {
                transform: translateX(0.4%);
            }
            .polygon {
                padding: 3%;
            }

            .text {
                font-size: 2.8vw;
            }

            .text-caption {
                font-size: 2.4vw;
            }
        }
    `}</style> */}
  </div>
);
  
export default GeneralTimeline;
