import { useRouter } from "next/dist/client/router";
import { ReactNode, useContext } from "react";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { ApiContext } from "../../../../utils/context/api";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import SubmissionProgress from "./SubmissionProgress";

type Props = {
  children: (team: TeamData, competition: Competition) => ReactNode;
}

const CompetitionWrapper: React.FC<Props> = ({ children }) => {
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
    return <Alert error="Tautan invalid" />;
  }

  if (!currentTeam) {
    router.push(`/dashboard/competitions/${competition}/register-tim`);
    return <Spinner height="200px" />;
  }

  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-md-3">
          <SubmissionProgress team={currentTeam} competition={currentCompetition} />
        </div>
        <div className="col-md-9">
          {children(currentTeam, currentCompetition)}
        </div>
      </div>
    </div>
  );
};

export default CompetitionWrapper;