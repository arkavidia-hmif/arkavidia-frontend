import * as React from 'react';
import BigRibbon from './RibbonBig';

interface Props {
  caption: string[]
}

const TripleRibbon: React.FC<Props> = ({ caption }) => (
  <div>
    <div className="flex-row-center">
      <div className="margins">
        <BigRibbon image="/img/competitions/secondmedal.png" title="Juara 2" caption={caption[0]} />
      </div>
      <div className="margins-center">
        <BigRibbon image="/img/competitions/firstmedal.png" title="Juara 1" caption={caption[1]} />
      </div>
      <div className="margins">
        <BigRibbon image="/img/competitions/thirdmedal.png" title="Juara 3" caption={caption[2]} />
      </div>
    </div>
    <style jsx>{`
            .flex-row-center {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
                justify-content: center;
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