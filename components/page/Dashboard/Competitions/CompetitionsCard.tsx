import { useContext } from "react";
import useSWR from "swr";
import {
  getCompetitions,
  LIST_COMPETITION_URL,
} from "../../../../api/competition";
import { LIST_TEAM_URL, getTeam } from "../../../../api/team";
import { ApiContext } from "../../../../utils/context/api";
import DashboardCard from "../../../../components/dashboard/DashboardCard";
import { groupTeamByCompetitionSlug } from "../../../../utils/transformer/competition";
import { Competition } from "../../../../interfaces/competition";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import { AuthContext } from "../../../../utils/context/auth";

const CompetitionsCard: React.FC = () => {
  const baseUrl = "/dashboard/competitions/";

  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const {
    data: competition,
    error: errorCompetiton,
  } = useSWR(LIST_COMPETITION_URL, () => getCompetitions(apiContext.axios));
  const { data: team, error: errorTeam } = useSWR(LIST_TEAM_URL, () =>
    getTeam(apiContext.axios)
  );

  if (errorCompetiton || errorTeam) return <Alert error="Masalah koneksi" />;
  if (!competition || !team) return <Spinner height="200px" />;

  const teamBySlug = groupTeamByCompetitionSlug(team);

  const generateCardBody = (minEntry: number, maxEntry: number): string => {
    if (minEntry === maxEntry) {
      return `Tim terdiri dari tepat ${minEntry} orang`;
    } else {
      return `Tim terdiri dari ${minEntry} sampai ${maxEntry} orang`;
    }
  };

  const generateCardText = (entry: Competition): string => {
    if (!entry.isRegistrationOpen) {
      return "Pendaftaran ditutup";
    } else {
      return teamBySlug[entry.slug]?.isParticipating
        ? "Lihat Pendaftaran"
        : "Daftar";
    }
  };

  const generateUrl = (entry: Competition): string => {
    if (teamBySlug[entry.slug]?.isParticipating) {
      return `${baseUrl}${entry.slug}`;
    } else {
      return `${baseUrl}${entry.slug}/register-tim`;
    }
  };

  if (authContext.auth && !authContext.auth.user.currentEducation) {
    return (
      <p style={{ textAlign: "center" }}>
        Harap melengkapi profil terlebih dahulu
      </p>
    );
  }

  return (
    <div className="mb-3">
      <div className="row">
        {competition.map((entry, index) => (
          <DashboardCard
            key={index}
            className="col-md-6 col-lg-4"
            title={entry.name}
            body={generateCardBody(entry.minTeamMembers, entry.maxTeamMembers)}
            buttonLink={entry.isRegistrationOpen ? generateUrl(entry) : null}
            buttonText={generateCardText(entry)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetitionsCard;
