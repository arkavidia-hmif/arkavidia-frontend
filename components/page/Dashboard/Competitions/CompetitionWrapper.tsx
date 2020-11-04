import { ReactNode, useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import { ApiContext } from "../../../../utils/context/api";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";
import CompetitionSidebar from "./sidebar/CompetitionSidebar";

type Props = {
  teamInfo: (team: TeamData, competition: Competition) => ReactNode;
  teamMember: (team: TeamData, competition: Competition) => ReactNode;
  photoInput: (competition: Competition, selection: number) => ReactNode;
  // choiceInput: (competition: Competition, selection: number) => ReactNode;
};

const CompetitionWrapper: React.FC<Props> = ({
  teamInfo,
  teamMember,
  photoInput,
}) => {
  const apiContext = useContext(ApiContext);

  const {
    getCompetitionBySlug,
    getTeamBySlug,
    isLoaded,
    isError,
  } = useTeamCompetition(apiContext.axios);

  const [selection, setSelection] = useState(0);

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

  const getComponent = () => {
    if (selection === 0) return teamInfo(currentTeam, currentCompetition);
    if (selection === 1) return teamMember(currentTeam, currentCompetition);
    if (selection === 2) return photoInput(currentCompetition, selection);
    // if (selection === 3) return choiceInput(currentCompetition, selection);
    // if (selection === 4) return photoInput(currentCompetition, selection);
    // if (selection === 5) return photoInput(currentCompetition, selection);
  };

  return (
    <div className="mb-3">
      <div className="row" id="main-content">
        <div className="col-lg-3 col-md-4">
          <CompetitionSidebar
            team={currentTeam}
            competition={currentCompetition}
            setSelection={setSelection}
            selection={selection}
          />
        </div>
        <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
          {getComponent()}
        </div>
      </div>
      <style jsx>{`
        #main-content::after {
          content: '';
          background: url(/img/competitions/${competition}-logo.png);
          background-repeat: no-repeat;
          background-position-y: center; 
          background-position-x: right; 
          background-size: contain;

          z-index: -1;

          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.5;
          width: min(calc(100% + 50px), 100vw);
          height: 100%;
        }  

        @media (max-width: 992px){
          #main-content::after {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CompetitionWrapper;
