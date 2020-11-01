import { useState } from "react";
import DashboardWrapper from "../../../../components/page/Dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/page/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";

const Prasyarat: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
<<<<<<< HEAD
    <Layout title="Prasyarat | Arkavidia 7.0" background="white">
=======
    <Layout title="Prasyarat | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
      <DashboardWrapper />
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-3 mt-5">
<<<<<<< HEAD
            <SubmissionProgress setActive={setActive} active={active}/>
=======
            <SubmissionProgress setActive={setActive}/>
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
          </div>
          <div
            className="container-fluid mb-5 mt-5 col-sm-12 col-md-9"
            id="main"
          >
            <div id="content-container">
              <div id="heading">Persyaratan Pendaftaran - (syarat)</div>
              {active}
              <div id="ketentuan" className="mt-3">
                <div className="title">Ketentuan:</div>
                <div className="subtitle">
                  <ol>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ol>
                </div>
              </div>
              <div id="upload" className="mt-3">
                <div className="title">Upload:</div>
                <div id="upload-field" className="mt-3">
                  <FilledButton text="Pilih file" color={Theme.buttonColors.purpleButton} padding="0.5rem 2rem"/>
                  <div className="subtitle ml-3 mt-1">Fotosaya.jpg</div>
                </div>
              </div>
              <div id="status" className="mt-4">
                <div className="title">Status</div>
                <div className="subtitle">Belum diverivikasi</div>
              </div>
              <div id="simpan" className="mt-5">
                <FilledButton text="Simpan" color={Theme.buttonColors.purpleButton} padding="0.5rem 2rem"/>
              </div>
            </div>
            <div id="bg-container">
              <img src="../../../img/competitions/ctf.png" />
            </div>
          </div>
        </div>
        <style jsx>{`
          #main {
            display: flex;
          }

          #content-container {
            flex: 60%;
          }

          #bg-container {
            flex: 40%;
            max-width: auto;
          }

          #heading {
            font-family: Viga;
            font-size: 1.50rem;
            color: #05058d;
          }

          .title{
            font-family: Roboto;
            font-weight: bold;
            color: #646464;
            font-size: 1.125rem;
          }

          .subtitle{
            font-family: Roboto;
            color: #646464;
            font-size: 1rem;
          }

          .subtitle ol{
            padding: 0.5rem 1.125rem;
          }

          #upload-field{
            display: flex;
          }

          @media (max-width: 800px) {
            #bg-container {
              display: none;
            }
          }

          @media (max-width: 450px) {
            #main {
              margin-left: auto;
            }

            #heading {
              font-size: 1.25rem;
            }

            .title {
              font-size: 1rem;
            }
  
            .subtitle{
              font-size: 0.9375rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Prasyarat;