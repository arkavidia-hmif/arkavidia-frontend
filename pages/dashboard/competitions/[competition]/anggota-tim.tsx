import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { ApiContext } from "../../../../utils/context/api";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import SubmissionProgress from "../../../../components/page/Dashboard/Competitions/SubmissionProgress";
import Layout from "../../../../components/Layout";
import { Theme } from "../../../../styles/theme";
import Alert from "../../../../components/Alert";
import Spinner from "../../../../components/Spinner";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";

const AnggotaTim: React.FC = () => {
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
    <Layout title="Anggota Tim" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <div className="container">
          <div className="row container">
            <div className="col-sm-10 col-md-4 mt-5">
              <SubmissionProgress
                team={currentTeam}
                competition={currentCompetition}
              />
            </div>
            <div
              className="container-fluid mb-5 mt-5 col-sm-12 col-md-8"
              id="main"
            >

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

            #subtitle {
              font-family: Roboto;
              color: #646464;
              font-size: 1rem;
            }

            .member {
              display: flex;
            }

            .name {
              font-family: Roboto;
              color: #646464;
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

              .name {
                font-size: 1rem;
              }

              #subtitle {
                font-size: 0.875rem;
              }
            }
          `}</style>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

export default AnggotaTim;
