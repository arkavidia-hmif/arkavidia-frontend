import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/page/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";

const StatusTim: React.FC = () => {
  return (
    <Layout title="Informasi Tim" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>

        <div className="container">
          <div className="row container">
            <div className="col-sm-10 col-md-4 mt-5">
              <SubmissionProgress />
            </div>
            <div
              className="container-fluid mb-5 mt-5 col-sm-12 col-md-8"
              id="main"
            >
              <div id="content-container">
                <div id="heading">Arkalogica - Informasi Tim</div>
                <div className="mt-4">
                  <div className="title">Nama Tim</div>
                  <div className="subtitle">Lorem ipsum</div>
                </div>
                <div className="mt-4">
                  <div className="title">Asal Sekolah/Universitas</div>
                  <div className="subtitle">SMA 1 Bandung</div>
                </div>
                <div className="mt-5" id="button">
                  <div className="mr-5"><FilledButton text="Hapus Tim" color={Theme.buttonColors.purpleButton} padding="0.5rem 1.5rem" /></div>
                  <div><FilledButton text="Edit Tim" color={Theme.buttonColors.purpleButton} padding="0.5rem 1.5rem" /></div>
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

          #button{
            display: flex;
          }

          .title{
            font-family: Roboto;
            color: #646464;
            font-weight: bold;
            font-size: 1.125rem;
          }

          .subtitle{
            font-family: Roboto;
            color: #646464;
            font-weight: normal;
            font-size: 1.125rem;
          }

          @media (max-width: 800px) {
            #bg-container {
              display: none;
            }
            .mt-5 {
              margin-top: 0rem !important;
            }
          }

          @media (max-width: 450px) {
            #main {
              margin-left: auto;
            }

            #heading {
              font-size: 1.25rem;
            }

            .title{
              font-size: 1rem;
            }
  
            .subtitle{
              font-size: 1rem;
            }
          }
        `}</style>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

// <Layout title="Competitions | Arkavidia 7.0" background="white">
//   <DashboardWrapper />
//   <div className="container">
//     <div id="content-container" className="row">

//       <div className="col-md-9 col-sm-12">
//         Arsa
//         <div id="bg-container">
//           <img src="../../../img/competitions/ctf.png" />
//         </div>
//       </div>
//     </div>
//     <style jsx>{``}</style>
//   </div>
// </Layout>
export default StatusTim;
