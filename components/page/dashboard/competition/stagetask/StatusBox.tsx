import { TaskResponse } from "../../../../../interfaces/task";
import { getResponseStatus } from "../../../../../utils/transformer/task";

type Props = {
  response?: TaskResponse
}

const StatusBox: React.FC<Props> = ({ response }) => {
  return (
    <div id="status" className="mt-4">
      <div className="title">Status</div>
      <div className="subtitle">{getResponseStatus(response)}</div>
      <style jsx>{`
        .title {
            font-weight: bold;
            color: #646464;
            font-size: 1.125rem;
          }

        .subtitle {
          color: #646464;
          font-size: 1rem;
          padding: 0.5rem 0;
        }  

        @media (max-width: 450px) {
          .title {
            font-size: 1rem;
          }

          .subtitle {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StatusBox;