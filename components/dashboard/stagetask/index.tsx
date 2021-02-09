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
  submitFunction: (value: string) => Promise<TaskResponse>;
  selection: number;
  editable: boolean;
}

const StageTask: React.FC<Props> = (props) => {
  const getTask = (): React.ReactNode => {

    switch (props.task.widget) {
      case "File":
        return (<FileTask {...props} />);
      case "Option":
        return (<ChoiceTask {...props} />);
      case "TextArea":
        return (<TextTask {...props} />);
      case "MultiTextField":
        return (<MultiTextFieldTask {...props} />);
      case "Description":
        return (<DescriptionTask {...props} />);
    }
  };

  return (<>{getTask()}</>);
};

export default StageTask;
