import useSWR from "swr";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { Event, EventRegistration } from "interfaces/event";
import { getEventRegistrationDetail } from "api/event";
import { ApiContext } from "utils/context/api";
import Spinner from "components/Spinner";
import { TALKS_REGISTRATION_STAGE, TALKS_PAYMENT_TASK_INDEX } from "utils/constants/talks-stage";

interface Props {
  event: Event,
  idx: number,
  participant?: EventRegistration,
  popupCb: (event: Event) => void
}

const TalksTableRow: React.FC<Props> = ({ event, idx, participant, popupCb }) => {
  const router = useRouter();
  const apiContext = useContext(ApiContext);

  const {
    data,
    error
  } = useSWR(() => {
    if (participant?.id) {
      return `/mainevent/registrants/${participant.id}/`;
    } else {
      return "";
    }
  }, () => {
    if (participant?.id) {
      return getEventRegistrationDetail(apiContext.axios, participant.id);
    }
  });

  const isRegistered = !!participant;

  const clickHandler = () => {
    if (isRegistered) {
      router.push(`/dashboard/arkav-talks/${participant?.id}/payment`);
    } else {
      popupCb(event);
    }
  };

  const getStatusColumn = () => {
    if (isRegistered) {
      if (!data) {
        return <Spinner size="25px" height="19px" />;
      }
      if (error) {
        return "Error";
      }

      const activeStage = data.stages.find(entry => entry.id === data.activeStageId);

      if (activeStage) {
        if (activeStage.name === TALKS_REGISTRATION_STAGE) {
          // Registration stage
          const taskId = activeStage.tasks[TALKS_PAYMENT_TASK_INDEX].id;
          const response = data.taskResponses.find(entry => entry.taskId === taskId);

          if (!response) {
            return "Belum konfirmasi pembayaran";
          } else if (response.status === "completed") {
            return "Terdaftar";
          } else if (response.status === "awaiting_validation") {
            return "Memvalidasi pembayaran";
          } else if (response.status === "rejected") {
            return "Pembayaran ditolak";
          }
        }
      }
      return "Error";
    } else {
      return "Belum terdaftar";
    }
  };

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name}</td>
      <td>{event.category}</td>
      {isRegistered && <td>{getStatusColumn()}</td>}
      <td>
        <a onClick={clickHandler}>{isRegistered ? "Pembayaran" : "Daftar"}</a>
      </td>
      <style jsx>{`
        tr {background-color: #ffffff;}
        tr:nth-child(even) {background-color: #f8f8f8;}

        tr:hover {background-color: #ddd;}

        td {
          border: 1px solid #ddd;
          padding: 0.5rem;
        }  

        a {
          color: #613FB6;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </tr>
  );
};

export default TalksTableRow;