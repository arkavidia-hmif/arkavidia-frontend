import { useContext } from "react";
import useSWR from "swr";
import StageTask from "../stagetask";
import { submitTaskResponseCompetition } from "api/competition";
import { getTeamDetail } from "api/team";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { Task } from "interfaces/task";
import { TeamData } from "interfaces/team";
import { ApiContext } from "utils/context/api";
import { AuthContext } from "utils/context/auth";
import { filterAndGroupCompetitionTaskResponse } from "utils/transformer/task";

interface Props {
  team: TeamData;
  selection: number;
}

const CompetitionStageTask: React.FC<Props> = ({ team, selection }) => {
  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const {
    data: teamDetail,
    error: teamDetailError,
    mutate: teamDetailMutate,
  } = useSWR(`/competition/teams/${team.id}/`, () =>
    getTeamDetail(apiContext.axios, team.id)
  );

  if (teamDetailError) return <Alert error="Masalah koneksi" />;
  if (!teamDetail) return <Spinner />;
  const widgetList: Task[] = [];
  for (const stage of teamDetail.stages) {
    for (const task of stage.tasks) {
      widgetList.push(task);
    }
  }

  const taskResponseById = filterAndGroupCompetitionTaskResponse(
    teamDetail,
    authContext.auth?.user.email || ""
  );

  const task = widgetList[selection - 2];

  const taskResponseFunction =
    (value: string) => submitTaskResponseCompetition(
      apiContext.axios,
      task.id,
      team.id,
      value
    );


  return (<StageTask
    mutate={teamDetailMutate}
    selection={selection}
    task={task}
    response={taskResponseById[task.id]}
    taskResponseFunction={taskResponseFunction}
  />);
};

export default CompetitionStageTask;