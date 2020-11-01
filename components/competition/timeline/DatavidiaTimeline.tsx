import * as React from 'react';
import Polygon from './SinglePolygon';
import ChevronPolygon from './SingleChevronPolygon';

const colors = [
  `linear-gradient(90deg, #623FA2 0.11%, #4D82C2 100%)`,
  `linear-gradient(90deg, #587ABB 1.82%, #00B6F1 100%)`,
  `linear-gradient(90deg, #13AAE6 13.33%, #08DFF6 100%)`,
  `linear-gradient(90deg, #08DDF5 1.82%, #00FFFF 100%)`,
  `linear-gradient(90deg, #01FCFE 1.82%, #13ABE7 100%)`,
  `linear-gradient(90deg, #13AAE6 1.82%, #5080C1 100%)`,
  `linear-gradient(90deg, #4886C7 1.82%, #4C6EB9 100%)`,
  `linear-gradient(90deg, #6472BA 1.82%, #6342A4 100%)`
];

const DatavidiaTimeline : React.FC= () => (
  <div>
    <p className="title">TIMELINE</p>
    <div className="flex-row">
      <Polygon date="5 November 2020" desc="Pembukaan Pendaftaran" color={colors[0]}/>
      <ChevronPolygon date="18 Desember 2020" desc="Penutupan Pendaftaran" color={colors[1]}/>
      <ChevronPolygon date="23 Desember 2020" desc="Batas Pembayaran Biaya Pendaftaran" color={colors[2]}/>
      <ChevronPolygon date="25 Januari 2021" desc="Hari Pertama Babak Penyisihan" color={colors[3]}/>
      <ChevronPolygon date="1 Februari 2021" desc="Hari Terakhir Babak Penyisihan" color={colors[4]}/>
      <ChevronPolygon date="15 Februari 2021" desc="Pengumuman Finalis" color={colors[5]}/>
      <ChevronPolygon date="27-28 Februari 2021" desc="Babak Final" color={colors[6]}/>
      <ChevronPolygon date="28 Februari 2021" desc="Awarding Night" color={colors[7]}/>
    </div>
    <style jsx>{`
            .flex-row {
                display: flex;
                flex-direction: row;
                align-items: center;
                flex-wrap: wrap;
                overflow: hidden;
                transform: translateX(0.2%);
                margin-left: 15%;
                margin-right: 15%;
            }

            .title {
                text-align: center;
                font-family: Viga;
                font-style: normal;
                font-weight: normal;
                font-size: 2.5rem;
                color: #0084AF;
            }
  
            @media only screen and (max-width: 1000px) {
                .flex-row {
                    transform: translateX(0.4%);
                }
            }
          `}</style>
  </div>
);
  
export default DatavidiaTimeline;
