import * as React from 'react';
import FilledButton from '../../FilledButton';
import {Theme} from '../../../styles/theme';

const Buttons : React.FC = () => (
  <div id="buttons-container">
    <div className="button">
      <FilledButton text="Download Guidebook" padding="0.75em 1.5em" color={Theme.buttonColors.blueButton}/>
    </div>
    <div className="button">
      <FilledButton text="Daftar Sekarang" padding="0.75em 1.5em" color={Theme.buttonColors.darkPinkButton}/>
    </div>
    <style jsx>{`
            #buttons-container {
                display: flex;
            }

            .button:first-child {
                margin-right: 2rem;
            }

            @media (max-width: 1000px) {
                #buttons-container {
                    justify-content: center;
                }
            }
        `}</style>    
  </div>
);

export default Buttons;