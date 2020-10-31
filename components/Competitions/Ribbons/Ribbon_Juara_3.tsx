import * as React from 'react';
import BigRibbon from './Ribbon_Big';

type Props = {
    caption: string[]
  }

const TripleRibbon : React.FC<Props> = ({caption}) => (
  <div>
    <div className="flex-row-center">
      <div className="margins">
        <BigRibbon image="/Images/Medal Juara 2.png" title="Juara 2" caption={caption[0]}/>
      </div>
      <div className="margins-center">
        <BigRibbon image="/Images/Medal Juara 1.png" title="Juara 1" caption={caption[1]}/>
      </div>
      <div className="margins">
        <BigRibbon image="/Images/Medal Juara 3.png" title="Juara 3" caption={caption[2]}/>
      </div>
    </div>
    <style jsx>{`
            .flex-row-center {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
            }

            .margins {
                margin-inline-start: 2.5vw;
                margin-inline-end: 2.5vw;
            }

            .margins-center {
                margin-inline-start: 0.2vw;
                margin-inline-end: 0.2vw;
                transform: translateY(-10%);
            }

            @media only screen and (max-width: 1000px) {
                .flex-row-center {
                    
                }
            }
          `}</style>
  </div>
);
  
export default TripleRibbon;