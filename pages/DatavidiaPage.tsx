import * as React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Competitions/Title_Competitions';
import Category from '../components/Competitions/Category_Competitions';
import Buttons from '../components/Competitions/Button_Competitions';
import Ribbons from '../components/Competitions/Ribbons/Ribbon_Juara_3';
import Timeline from '../components/Competitions/Timeline/DatavidiaTimeline';

const DatavidiaPage : React.FC = () => (
  <Layout>
    <div className="container">
      <div className="grid-container">
        <div className="item1"><img className="logo-lomba" src={"/Images/Logo Datavidia.png"}/></div>
        <div className="item3">
          <Title title="DATAVIDIA" desc="Data science merupakan bidang yang sedang mendapatkan sorotan belakangan ini karena kecanggihan dan keluasan aplikasinya. Data Arkavidia merupakan kompetisi untuk menilai kepiawaian peserta serta bertujuan untuk meningkatkan kompetensi peserta di bidang ini."/>
          <div className="settings-margin-1">
            <Category category="Mahasiswa & SMA/Sederajat" fee="Rp. 60.000,-"/>
          </div>
          <div className="settings-margin-2">
            <Buttons/>
          </div> 
        </div>
      </div>
    </div>
    <div className="container-flex">
      <Ribbons caption={["Rp 3.000.000","Rp 5.000.000","Rp 2.000.000"]}/>
    </div>
    <div className="settings-margin-3">
      <Timeline/>
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
        }
    
        .item2 {
            grid-column-start: 1;
            grid-column-end: 1;
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
            max-width: 120%;
            height: auto;
        }

        .container-flex {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 2%
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

export default DatavidiaPage;
