import * as React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/competition/CompetitionTitle';
import Category from '../../components/competition/CompetitionCategory';
import Buttons from '../../components/competition/CompetitionButton';
import Ribbons from '../../components/competition/ribbons/RibbonJuara';
import Timeline from '../../components/competition/timeline/GeneralTimeline';

const CTFPage : React.FC = () => (
  <Layout>
    <div className="container">
      <div className="grid-container">
        <div className="item1"><img className="logo-lomba" src={"/img/competitions/ctf-logo.png"}/></div>
        <div className="item2"></div>
        <div className="item3">
          <Title title="CAPTURE THE FLAG" desc="Capture the Flag adalah cabang lomba di bidang keamanan siber. Pada lomba ini, setiap peserta saling bersaing sebagai tim untuk mengumpulkan poin sebanyak mungkin dengan memecahkan persoalan yang diberikan. Dalam kurun waktu yang terbatas, setiap tim harus menggunakan kakas-kakas dan pengetahuan yang mereka miliki untuk mencari, mengakali, dan mengeksploitasi celah-celah keamanan untuk mendapatkan poin dalam bentuk flag tersembunyi dalam setiap soal."/>
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
          grid-row-start: 2; 
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
          margin-top: 15%;
      }

      .logo-lomba {
          width: 140%;
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
              width: 80%;
              height: auto;
          }
      }
      `}</style>
  </Layout>
);

export default CTFPage;
