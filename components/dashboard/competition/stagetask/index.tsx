import { useContext } from "react";
import useSWR from "swr";
import FileTask from "./FileTask";
import ChoiceTask from "./ChoiceTask";
import TextTask from "./TextTask";
import MultiTextFieldTask from "./MultiTextFieldTask";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { TeamData } from "interfaces/team";
import { getTeamDetail } from "api/team";
import { Task } from "interfaces/task";
import { filterAndGroupTaskResponse } from "utils/transformer/task";
import { AuthContext } from "utils/context/auth";

interface Props {
  team: TeamData;
  selection: number;
}

const StageTask: React.FC<Props> = ({ team, selection }) => {
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

  const taskResponseById = filterAndGroupTaskResponse(
    teamDetail,
    authContext.auth?.user.email || ""
  );

  const getTask = (): React.ReactNode => {
    const task = widgetList[selection - 2];

    if (task.widget === "File") {
      return (
        <FileTask
          selection={selection}
          task={task}
          team={team}
          mutate={teamDetailMutate}
          response={taskResponseById[task.id]}
        />
      );
    }
    if (task.widget === "Option") {
      return (
        <ChoiceTask
          selection={selection}
          team={team}
          task={task}
          mutate={teamDetailMutate}
          response={taskResponseById[task.id]}
        />
      );
    }
    if (task.widget === "TextArea") {
      return (
        <TextTask
          selection={selection}
          team={team}
          task={task}
          mutate={teamDetailMutate}
          response={taskResponseById[task.id]}
        />
      );
    }
    if (task.widget === "MultiTextField") {
      return (
        <MultiTextFieldTask
          selection={selection}
          team={team}
          task={task}
          mutate={teamDetailMutate}
          response={taskResponseById[task.id]}
        />
      );
    }
  };

  return (
    <>
      <div>{getTask()}</div>
    </>
  );
};

export default StageTask;
