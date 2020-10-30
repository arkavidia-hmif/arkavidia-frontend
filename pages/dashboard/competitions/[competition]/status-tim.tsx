import { useState } from "react";
import DashboardWrapper from "../../../../components/PartialPage/Dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/PartialPage/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";

const StatusTim: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <Layout title="Competitions | Arkavidia 7.0" background="white">
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
              <div id="heading">Arkalogica - Informasi Tim</div>
              Arya sambung
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
            font-size: 2.25rem;
            color: #05058d;
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

            label {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
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
