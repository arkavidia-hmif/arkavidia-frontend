import { useContext } from "react";
import useSWR from "swr";
import StageTask from "../stagetask";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { Task } from "interfaces/task";
import { ApiContext } from "utils/context/api";
import { filterAndGroupPreeventTaskResponse } from "utils/transformer/task";
import { PreeventRegistration } from "interfaces/preevent";
import { getPreeventRegistrationDetail, submitPreeventTaskResponse } from "api/preevent";

interface Props {
  registration: PreeventRegistration;
  selection: number;
}

const PreeventStageTask: React.FC<Props> = ({ registration, selection }) => {
  const apiContext = useContext(ApiContext);

  const {
    data: registrationDetail,
    error: registrationDetailError,
    mutate: registrationDetailMutate,
  } = useSWR(`/preevent/registrants/${registration.id}/`, () =>
    getPreeventRegistrationDetail(apiContext.axios, registration.id)
  );

  if (registrationDetailError) return <Alert error="Masalah koneksi" />;
  if (!registrationDetail) return <Spinner />;

  const widgetList: Task[] = [];
  for (const stage of registrationDetail.stages) {
    for (const task of stage.tasks) {
      widgetList.push(task);
    }
  }

  const taskResponseById = filterAndGroupPreeventTaskResponse(
    registrationDetail
  );

  const task = widgetList[selection];

  const taskResponseFunction =
    (value: string) => submitPreeventTaskResponse(
      apiContext.axios,
      registration.id,
      task.id,
      value
    );


  return (<StageTask
    mutate={registrationDetailMutate}
    selection={selection}
    task={task}
    response={taskResponseById[task.id]}
    taskResponseFunction={taskResponseFunction}
  />);
};

export default PreeventStageTask;