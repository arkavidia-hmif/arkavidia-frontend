import { useContext } from "react";
import useSWR from "swr";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import { filterAndGroupPreeventTaskResponse, getRequiredAndCompletedPreeventTask } from "utils/transformer/task";
import { PreeventRegistration } from "interfaces/preevent";
import { getPreeventRegistrationDetail } from "api/preevent";

interface Props {
  registration: PreeventRegistration;
  selection: number;
  setSelection: (selection: number) => void;
}

const PreeventSidebar: React.FC<Props> = ({
  registration,
  selection,
  setSelection,
}) => {
  const apiContext = useContext(ApiContext);

  const {
    data: registrationDetail,
    error: registrationDetailError,
  } = useSWR(`/preevent/registrants/${registration.id}/`, () =>
    getPreeventRegistrationDetail(apiContext.axios, registration.id)
  );

  if (registrationDetailError) return <Alert error="Masalah koneksi" />;


  // Status
  let status = "";
  let taskResponseById = {};

  if (registrationDetail) {
    taskResponseById = filterAndGroupPreeventTaskResponse(registrationDetail);

    const [requiredTaskCount, completedTaskCount] = getRequiredAndCompletedPreeventTask(registrationDetail);
    if (requiredTaskCount === completedTaskCount) {
      status = "Data lengkap";
    } else {
      status = "Data belum lengkap";
    }
  }

  return (
    <DashboardSidebar
      title={registration.preevent.name}
      subtitle={""}
      status={status}
      taskResponse={taskResponseById}
      registrationStage={registrationDetail?.stages || []}
      selection={selection}
      setSelection={setSelection}
    />
  );
};

export default PreeventSidebar;
