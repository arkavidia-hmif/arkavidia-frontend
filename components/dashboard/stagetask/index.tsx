import FileTask from "./FileTask";
import ChoiceTask from "./ChoiceTask";
import TextTask from "./TextTask";
import MultiTextFieldTask from "./MultiTextFieldTask";
import DescriptionTask from "./DescriptionTask";
import { Task, TaskResponse } from "interfaces/task";

interface Props {
  task: Task;
  response: TaskResponse;
  mutate: () => void;
  taskResponseFunction: (value: string) => Promise<TaskResponse>
  selection: number;
  editable: boolean;
}

const StageTask: React.FC<Props> = ({
  task,
  response,
  mutate,
  taskResponseFunction,
  selection,
  editable
}) => {
  const getTask = (): React.ReactNode => {

    if (task.widget === "File") {
      return (
        <FileTask
          selection={selection}
          task={task}
          submitFunction={taskResponseFunction}
          mutate={mutate}
          response={response}
          editable={editable}
        />
      );
    }
    if (task.widget === "Option") {
      return (
        <ChoiceTask
          selection={selection}
          submitFunction={taskResponseFunction}
          task={task}
          mutate={mutate}
          response={response}
          editable={editable}
        />
      );
    }
    if (task.widget === "TextArea") {
      return (
        <TextTask
          selection={selection}
          submitFunction={taskResponseFunction}
          task={task}
          mutate={mutate}
          response={response}
          editable={editable}
        />
      );
    }
    if (task.widget === "MultiTextField") {
      return (
        <MultiTextFieldTask
          selection={selection}
          task={task}
          mutate={mutate}
          submitFunction={taskResponseFunction}
          response={response}
          editable={editable}
        />
      );
    }
    if (task.widget === "Description") {
      return (
        <DescriptionTask
          selection={selection}
          task={task}
          mutate={mutate}
          submitFunction={taskResponseFunction}
          response={response}
          editable={editable}
        />
      );
    }
  };

  return getTask();
};

export default StageTask;
