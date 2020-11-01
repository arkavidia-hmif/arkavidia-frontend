import * as React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/competition/CompetitionTitle';
import Category from '../../components/competition/CompetitionCategory';
import Buttons from '../../components/competition/CompetitionButton';
import Ribbons from '../../components/competition/ribbons/RibbonsGameJam';
import Timeline from '../../components/competition/timeline/GameJamTimeline';
import FAQ from '../../components/competition/faq/GameJamFAQ';

const GameJamPage : React.FC = () => (
  <Layout>
    <div className="container">
      <div className="grid-container">
        <div className="item1"><img className="logo-lomba" src={"/img/competitions/gamedev-logo.png"}/></div>
        <div className="item3">
          <Title title="ARKAV GAME JAM" desc="Arkav Game Jam adalah kompetisi pembuatan aplikasi permainan yang merupakan bagian dari acara Arkavidia 7.0. Dalam perlombaan ini, setiap tim peserta yang beranggotakan maksimal 5 orang membuat sebuah game dalam waktu 48 jam. Dengan tema yang baru akan diketahui saat lomba akan dimulai, tantangan terbesar bagi para peserta adalah bagaimana menemukan ide dan mengimplementasikan ide tersebut dari dasar dalam waktu singkat."/>
          <div className="settings-margin-1">
            <Category category="Mahasiswa & SMA/Sederajat" fee="Free"/>
          </div>
          <div className="settings-margin-2">
            <Buttons/>
          </div> 
        </div>
      </div>
    </div>
    <div className="container-flex">
      <Ribbons/>
    </div>
    <div className="settings-margin-1">
      <Timeline/>
    </div>
    <div className="settings-margin-3">
      <FAQ/>
    </div>
    <style jsx>{`
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(11, 1fr);
        }
    
        .item1 {
            grid-column-start: 7;
            grid-column-end: 12;
            grid-row-start: 1;
            display: flex;
            align-items: center;
        }
    
        .item2 {
            grid-column-start: 1;
            grid-column-end: 2;
        }
    
        .item3 {   
            margin-bottom: 13%;
            grid-column-start: 1;
            grid-column-end: 7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 10%;
        }

        .logo-lomba {
            max-width: 130%;
            height: auto;
        }

        .container-flex {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 2%;
        }

        .settings-margin-1 {
            margin-top: 4%;
        }

        .settings-margin-2 {
            margin-top: 2%;
        }

        .settings-margin-3 {
            margin-top: 5%;
            margin-bottom: 8%;
            overflow: hidden;
        }

        @media only screen and (max-width: 1000px) {
            .grid-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .item1 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-block-start: 0em;
                margin-block-end: -2em;
            }
      
            .item2 {                
                grid-column-start: 0;
                grid-column-end: 0;
            }
        
            .item3 {
                justify-content: center;
                margin-bottom: 10%;
                margin-block-start: 0em;
            }

            .logo-lomba {
              max-width: 80%;
              height: auto;
          }
        }
      `}</style>
  </Layout>
);

export default GameJamPage;
