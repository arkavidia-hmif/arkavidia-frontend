import * as React from "react";
import BigRibbon from "./BigRibbon";
import SmallRibbon from "./SmallRibbon";

const GameJamRibbon: React.FC = () => (
  <div>
    <div className="flex-row-center">
      <div>
        <div className="margins-2">
          <SmallRibbon title="Best Presentation" caption="Rp 1.000.000" />
        </div>
        <div className="margins-2">
          <SmallRibbon title="Best Gameplay" caption="Rp 1.000.000" />
        </div>
      </div>
      <div className="margins">
        <BigRibbon image="/img/competitions/medal.png" title="Best Game" caption="Rp 1.500.000" />
      </div>
      <div>
        <div className="margins-2">
          <SmallRibbon title="Best Narrative" caption="Rp 1.000.000" />
        </div>
        <div className="margins-2">
          <SmallRibbon title="Best Originality" caption="Rp 1.000.000" />
        </div>
        <div className="margins-2">
          <SmallRibbon title="Best Student" caption="Rp 1.000.000" />
        </div>
      </div>
    </div>
    <style jsx>{`
            .flex-row-center {
                display: flex;
                flex-direction: row;
                margin-top: 2%;
                justify-content: center;
                max-width: 100%;
            }

            .margins {
                margin-inline-start: 1%;
                margin-inline-end: 2%;
                transform: translateY(-3%);
            }

            .margins-2 {
                margin-block-start: 1rem;
                margin-inline-start: 1rem;
                margin-inline-end: 1rem;
            }

            @media only screen and (max-width: 1000px) {
                .margins {
                    margin-inline-start: 1.5vw;
                    margin-inline-end: 1.5vw;
                }

                .margins-2 {
                    margin-block-start: 0.5rem;
                    margin-inline-start: 0.5rem;
                    margin-inline-end: 0.5rem;
                }
            }
          `}</style>
  </div>
);

export default GameJamRibbon;
