import StageTaskStyle from "./StageTask.module.css";
import { TaskResponse } from "interfaces/task";
import { getResponseStatus } from "utils/transformer/task";

interface Props {
  response?: TaskResponse
}

const StatusBox: React.FC<Props> = ({ response }) => {
  return (
    <div id="status" className="mt-4">
      <div className={StageTaskStyle.title}>Status</div>
      <div className={StageTaskStyle.text}>{getResponseStatus(response)}</div>
    </div>
  );
};

export default StatusBox;