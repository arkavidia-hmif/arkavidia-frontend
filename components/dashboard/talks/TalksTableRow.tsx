import useSWR from "swr";
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { Event, EventRegistration } from "interfaces/event";
import { getEventRegistrationDetail } from "api/event";
import { ApiContext } from "utils/context/api";
import Spinner from "components/Spinner";
import { TALKS_REGISTRATION_STAGE, TALKS_PAYMENT_TASK_INDEX, TALKS_PUBLIC_CAT, TALKS_ADVANCED_CAT } from "utils/constants/talks-stage";

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
    if (event.category === TALKS_PUBLIC_CAT) return "";

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
    if (event.category === TALKS_ADVANCED_CAT) {
      if (isRegistered) {
        router.push(`/dashboard/arkav-talks/${participant?.id}/payment`);
      } else {
        popupCb(event);
      }
    } else if (event.category === TALKS_PUBLIC_CAT) {
      if (!isRegistered) {
        popupCb(event);
      }
    }
  };

  const getStatusColumn = () => {
    if (event.category === TALKS_ADVANCED_CAT) {
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
              return "Menunggu validasi pembayaran";
            } else if (response.status === "rejected") {
              return "Pembayaran ditolak";
            }
          }
        }
        return "Error";
      } else {
        return "Belum terdaftar";
      }
    } else if (event.category === TALKS_PUBLIC_CAT) {
      return isRegistered ? "Terdaftar" : "Belum terdaftar";
    }
  };

  const getActionLabel = () => {
    if (!isRegistered) {
      return "Daftar";
    } else {
      if (event.category === TALKS_ADVANCED_CAT) {
        return "Pembayaran";
      } else if (event.category === TALKS_PUBLIC_CAT) {
        return "Sudah terdaftar";
      }
    }
  };

  const isActionable = () => {
    return !(event.category === TALKS_PUBLIC_CAT && isRegistered);
  };

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name}</td>
      <td>{event.category}</td>
      {isRegistered && <td>{getStatusColumn()}</td>}
      <td>
        <a onClick={clickHandler}>{getActionLabel()}</a>
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
          color: ${isActionable() ? "#613FB6" : "gray"};
          font-weight: bold;
          cursor: ${isActionable() ? "pointer" : ""};
        }

        a:hover {
          text-decoration: ${isActionable() ? "" : "none"};
        }
      `}</style>
    </tr>
  );
};

export default TalksTableRow;