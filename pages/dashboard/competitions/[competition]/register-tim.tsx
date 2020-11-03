import { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { ApiContext } from "../../../../utils/context/api";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import Layout from "../../../../components/Layout";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";
import { createTeam } from "../../../../api/team";
import Alert from "../../../../components/Alert";
import Spinner from "../../../../components/Spinner";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";


const RegisterTim: React.FC = () => {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  if (currentTeam) {
    router.push(`/dashboard/competitions/${competition as string}`);
  }

  const competitionId = currentCompetition?.id;

  const handleSubmit = async () => {
    setError(null);

    if (name === "") {
      setError("Nama tim tidak boleh kosong");
      return;
    }

    if (name.length < 3) {
      setError("Nama tim minimal 3 karakter");
      return;
    }

    // kurang kalau leader gabisa leader lagi
    // for (teams as teams) {
    //   if (AuthContext.)
    // }

    if (institution === "") {
      setError("Institusi tidak boleh kosong");
      return;
    }

    setLoading(true);
    
    await createTeam (apiContext.axios, {competitionId, name, institution})
      .then(() => {
        router.push(`/dashboard/competitions/${competition as string}`);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout title="Competitions | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>

        <div className="container" id='dashboard-area'>
          <div className="container-fluid mb-5 mt-5" id="main">
            <div id="content-container">
              <Alert error={error} />
              <div id="heading">Buat Tim {currentCompetition.name} </div>
              <form className="mt-4" onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit();
              }}>
                <label htmlFor="name">Nama tim</label>
                <input id="name" type="text" value={name} onChange={(evt) => { setName(evt.target.value); }}/>
                <label htmlFor="institution">Asal universitas/sekolah</label>
                <input id="institution" type="text" value={institution} onChange={(evt) => { setInstitution(evt.target.value); }}/>
                <br />
                <br />
                <FilledButton text="SIMPAN DAN LANJUTKAN" padding="0.5rem 1.5rem" color={Theme.buttonColors.purpleButton} loading={loading}/>
              </form>
            </div>
            <div id="bg-container">
              <img src={`../../../img/competitions/${competition}-logo.png`} />
            </div>
          </div>
          <style jsx>{`
          #dashboard-area {
            min-height: 60vh;
          }
          
          #main {
            display: flex;
            margin-left: 4rem;
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

          form {
            height: auto;
            width: 90%;
            display: block;
          }

          input {
            width: 100%;
            border: none;
            padding: 0.5rem 0 0.5rem 0;
            border-bottom: 0.15rem solid black;
            box-sizing: border-box;
            background: none;
            margin: 0.5rem 0 1rem 0;
          }

          label {
            font-family: Roboto;
            font-size: 1.125rem;

            color: #696969;
          }

          img {
            max-width: 25rem;
          }

          input:focus {
            outline: none;
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

            label {
              font-size: 1rem;
            }
          }
        `}</style>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

export default RegisterTim;
