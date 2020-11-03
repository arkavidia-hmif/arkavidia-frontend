import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/page/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";
import { ApiContext } from "../../../../utils/context/api";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";
import Alert from "../../../../components/Alert";
import Spinner from "../../../../components/Spinner";

const Prasyarat: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const {
    getCompetitionBySlug,
    getTeamBySlug,
    isLoaded,
    isError,
  } = useTeamCompetition(apiContext.axios);

  const router = useRouter();
  const { competition } = router.query;
  if (!competition) return null;

  if (isError) return <Alert error="Masalah koneksi" />;
  if (!isLoaded) return <Spinner height="200px" />;

  const currentTeam = getTeamBySlug(competition as string);
  const currentCompetition = getCompetitionBySlug(competition as string);

  if (!currentCompetition) {
    return <Alert error="Invalid slug." />;
  }

  if (!currentTeam) {
    router.push(`/dashboard/competitions/${competition}/register-tim`);
    return <Spinner height="200px" />;
  }

  return (
    <Layout title="Prasyarat" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <div className="container" id="dashboard-area">
          <div className="row container">
            <div className="col-sm-10 col-md-4 mt-5">
              <SubmissionProgress
                selection={0}
                setSelection={(val) => { val + 1; }}
                team={currentTeam}
                competition={currentCompetition}
              />
            </div>
            <div
              className="container-fluid mb-5 mt-5 col-sm-12 col-md-8"
              id="main"
            >
              <div id="content-container">
                <div id="heading">Persyaratan Pendaftaran - (syarat)</div>
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
                    <FilledButton
                      text="Pilih file"
                      color={Theme.buttonColors.purpleButton}
                      padding="0.5rem 2rem"
                    />
                    <div className="subtitle ml-3 mt-1">Fotosaya.jpg</div>
                  </div>
                </div>
                <div id="status" className="mt-4">
                  <div className="title">Status</div>
                  <div className="subtitle">Belum diverivikasi</div>
                </div>
                <div id="simpan" className="mt-5">
                  <FilledButton
                    text="Simpan"
                    color={Theme.buttonColors.purpleButton}
                    padding="0.5rem 2rem"
                  />
                </div>
              </div>
              <div id="bg-container">
                <img src="../../../img/competitions/ctf.png" />
              </div>
            </div>
          </div>
          <style jsx>{`
            #dashboard-area {
              min-height: 60vh;
            }

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
              font-size: 1.5rem;
              color: #05058d;
            }

            .title {
              font-family: Roboto;
              font-weight: bold;
              color: #646464;
              font-size: 1.125rem;
            }

            .subtitle {
              font-family: Roboto;
              color: #646464;
              font-size: 1rem;
            }

            .subtitle ol {
              padding: 0.5rem 1.125rem;
            }

            #upload-field {
              display: flex;
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

              .title {
                font-size: 1rem;
              }

              .subtitle {
                font-size: 0.9375rem;
              }
            }
          `}</style>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

export default Prasyarat;
