import { useContext } from "react";
import { ApiContext } from "../../../../../utils/context/api";
import { useTeamCompetition } from "../../../../../utils/hooks/useTeamCompetition";
import Alert from "../../../../Alert";
import Spinner from "../../../../Spinner";
import { Competition } from "../../../../../interfaces/competition";
import { TeamData } from "../../../../../interfaces/team";
import PhotoTask from "./PhotoTask";
import ChoiceTask from "./ChoiceTask";
// import FileUploader from "../../../../FileUploader";
// import ChoiceInput from "../../../ChoiceInput";

type Props = {
  team: TeamData;
  competition: Competition;
  selection: number;
};

const StageTask: React.FC<Props> = ({ team, competition, selection }) => {
  const apiContext = useContext(ApiContext);
  const { isLoaded, isError } = useTeamCompetition(apiContext.axios);

  if (!competition) return null;
  if (isError) return <Alert error="Masalah koneksi" />;
  if (!isLoaded) return <Spinner height="200px" />;

  const getTask = (): React.ReactNode => {
    if (selection === 2) {
      return <PhotoTask selection={selection} team={team} />;
    }
    if (selection === 3) {
      return <ChoiceTask selection={selection} team={team} />;
    }
    return <div />;
  };

  return (
    <>
      <div className="container-fluid mb-5 mt-5 col-sm-12 col-md-8" id="main">
        <div id="content-container">{getTask()}</div>
        <div id="bg-container">
          <img src="../../../img/competitions/ctf.png" />
        </div>

        <style jsx>{`
          #main {
            display: flex;
          }

          #content-container {
            flex: 60%;
            overflow-x: hidden;
          }

          #bg-container {
            flex: 40%;
            max-width: auto;
          }

          @media (max-width: 800px) {
            #bg-container {
              display: none;
            }
            .mt-5 {
              margin-top: 1rem !important;
            }
          }

          @media (max-width: 450px) {
            #main {
              margin-left: auto;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default StageTask;
