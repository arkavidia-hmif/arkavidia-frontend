import { useContext } from "react";
import useSWR from "swr";
import { ApiContext } from "../../../../../utils/context/api";
import Alert from "../../../../Alert";
import Spinner from "../../../../Spinner";
import { Competition } from "../../../../../interfaces/competition";
import { TeamData } from "../../../../../interfaces/team";
import { getTeamDetail } from "../../../../../api/team";
import { Task } from "../../../../../interfaces/task";
import PhotoTask from "./PhotoTask";
import ChoiceTask from "./ChoiceTask";

type Props = {
  team: TeamData;
  competition: Competition;
  selection: number;
};

const StageTask: React.FC<Props> = ({ team, selection }) => {
  const apiContext = useContext(ApiContext);

  const { data: teamDetail, error: teamDetailError } = useSWR(
    `/competition/teams/${team.id}/`,
    () => getTeamDetail(apiContext.axios, team.id)
  );

  if (teamDetailError) return <Alert error="Masalah koneksi" />;
  if (!teamDetail) return <Spinner />;

  const widgetList: Task[] = [];
  for (const stage of teamDetail.stages) {
    for (const task of stage.tasks) {
      widgetList.push(task);
    }
  }

  const getTask = (): React.ReactNode => {
    const widget = widgetList[selection - 2];

    if (widget.widget === 'File') {
      return <PhotoTask selection={selection} team={team} />;
    }
    if (widget.widget === 'Option') {
      return <ChoiceTask selection={selection} team={team} />;
    }
  };

  return (
    <>
      <div>
        {getTask()}
      </div>
    </>
  );
};

export default StageTask;
