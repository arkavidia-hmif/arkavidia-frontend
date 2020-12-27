import { useContext } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import { getEventRegistrationDetail, submitEventTaskResponse } from "api/event";
import Alert from "components/Alert";
import StageTask from "components/dashboard/stagetask";
import Spinner from "components/Spinner";
import { Task } from "interfaces/task";
import { ApiContext } from "utils/context/api";
import { filterAndGroupEventTaskResponse } from "utils/transformer/task";


const TalksPayment: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const router = useRouter();
  const { registrationId: registrationIdQuery } = router.query;

  const registrationId = Array.isArray(registrationIdQuery) ? registrationIdQuery[0] : registrationIdQuery;

  const {
    data: registrationDetail,
    error: registrationDetailError,
    mutate: registrationDetailMutate,
  } = useSWR(`/mainevent/registrants/${registrationId}/`, () =>
    getEventRegistrationDetail(apiContext.axios, parseInt(registrationId, 10))
  );

  if (registrationDetailError) return <Alert error="Masalah koneksi" />;
  if (!registrationDetail) return <Spinner />;

  const widgetList: Array<Task> = [];
  for (const stage of registrationDetail.stages) {
    for (const task of stage.tasks) {
      widgetList.push(task);
    }
  }

  const taskResponseById = filterAndGroupEventTaskResponse(
    registrationDetail
  );

  const task = widgetList[0];

  const taskResponseFunction =
    (value: string) => submitEventTaskResponse(
      apiContext.axios,
      parseInt(registrationId, 10),
      task.id,
      value
    );


  return (
    <div className="col-md-8 offset-md-2 col-12">
      <StageTask
        mutate={registrationDetailMutate}
        selection={0}
        task={task}
        response={taskResponseById[task.id]}
        taskResponseFunction={taskResponseFunction}
      />
    </div>
  );
};

export default TalksPayment;