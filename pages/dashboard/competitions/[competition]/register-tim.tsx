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
import { AuthContext } from "../../../../utils/context/auth";
import { ApiError } from "../../../../api/error";
import { TeamRegistrationStatus } from "../../../../interfaces/team";


const RegisterTim: React.FC = () => {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const {
    getCompetitionBySlug,
    getTeamBySlug,
    isLoaded,
    isError,
    teams,
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

  const isLeader = () => {
    teams?.forEach(t => {
      if (t.teamLeaderEmail === authContext.auth?.user.email) {
        return true;
      }
    });
    return false;
  };

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

    if (isLeader()) {
      setError("Kamu hanya boleh menjadi leader satu kali");
      return;
    }

    if (institution === "") {
      setError("Institusi tidak boleh kosong");
      return;
    }

    setLoading(true);

    await createTeam(apiContext.axios, { competitionId, name, institution })
      .then(() => {
        router.push(`/dashboard/competitions/${competition as string}`);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.code === TeamRegistrationStatus.NAME_TAKEN) {
            setError("Nama tim sudah ada");
            return;
          } else if (e.code === TeamRegistrationStatus.CANNOT_CREATE_ANOTHER_TEAM) {
            setError("1 orang hanya boleh menjadi ketua 1 tim");
            return;
          }
        }

        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout title="Competitions" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <h2>Buat Tim {currentCompetition.name}</h2>
            <Alert error={error} />
            <form className="mt-4" onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit();
            }}>
              <label htmlFor="name">Nama tim</label>
              <input id="name" type="text" value={name} onChange={(evt) => { setName(evt.target.value); }} />
              <label htmlFor="institution">Asal universitas/sekolah</label>
              <input id="institution" type="text" value={institution} onChange={(evt) => { setInstitution(evt.target.value); }} />
              <br />
              <br />
              <FilledButton text="SIMPAN DAN LANJUTKAN" padding="0.5rem 1.5rem" color={Theme.buttonColors.purpleButton} loading={loading} submit />
            </form>
          </div>
          <div className="d-none d-md-block col-md-4 col-lg-6">
            <img src={`/img/competitions/${competition}-logo.png`} />
          </div>
        </div>
        <style jsx>{`          
          h2 {
            font-size: 2.25rem;
            color: #05058d;
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
            font-size: 1.125rem;

            color: #696969;
          }

          img {
            max-width: 25rem;
          }

          input:focus {
            outline: none;
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </DashboardWrapper>
    </Layout>
  );
};

export default RegisterTim;
