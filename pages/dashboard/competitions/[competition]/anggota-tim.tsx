import { useState } from "react";
import DashboardWrapper from "../../../../components/page/Dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/page/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";
import { Theme } from "../../../../styles/theme";

const AnggotaTim: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <Layout title="Anggota Tim | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
      <DashboardWrapper />
      <div className="container">
        <div className="row container">
          <div className="col-sm-10 col-md-4 mt-5">
            {active}
            <SubmissionProgress setActive={setActive} />
          </div>
          <div
            className="container-fluid mb-5 mt-5 col-sm-12 col-md-8"
            id="main"
          >
            <div id="content-container">
              <div id="heading">Arkalogica - Anggota Tim</div>
              <div id="subtitle">Jumlah peserta tim untuk [nama lomba] maksimal adalah [n] orang</div>
              <div className="mt-5" id="team">
                <div className="member">
                  <img src="../../../img/competitions/member.png" />
                  <div className="name mt-3 ml-3">Nama Anggota 1</div>
                </div>
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
            font-size: 1.55rem;
            color: #05058d;
          }

          #subtitle{
            font-family: Roboto;
            color: #646464;
            font-size: 1rem;
          }

          .member{
            display: flex;
          }

          .name{
            font-family: Roboto;
            color: #646464;
            font-size: 1.125rem;
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

            .name{
              font-size: 1rem;
            }
  
            #subtitle{
              font-size: 0.875rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default AnggotaTim;