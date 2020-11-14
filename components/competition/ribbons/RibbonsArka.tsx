import * as React from 'react';
import WinnerRibbon from './WinnerRibbon';
import SmallRibbon from './SmallRibbon';

const ArkaRibbon: React.FC = () => (
  <div className='container'>
    <WinnerRibbon caption={["Rp 2.000.000", "Rp 3.000.000", "Rp 1.000.000"]} />
    <div className="flex-row-center">
      <div className="margins">
        <SmallRibbon title="Juara 4" caption="Rp 500.000" />
      </div>
      <div className="margins">
        <SmallRibbon title="Juara 5" caption="Rp 500.000" />
      </div>
    </div>
    <style jsx>{`          
    .container {
      margin-bottom: 4rem;
    }  
    .flex-row-center {
        display: flex;
        flex-direction: row;
        margin-top: 2%;
        justify-content: center;
    }

    .margins {
        margin-inline-start: 1vw;
        margin-inline-end: 1vw;
    }

    @media only screen and (max-width: 1000px) {
        .margins {
            margin-inline-start: 1.5vw;
            margin-inline-end: 1.5vw;
        }
    }
  `}</style>
  </div>
);

export default ArkaRibbon;
