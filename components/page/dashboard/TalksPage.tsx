import React, { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import FilledButton from "components/FilledButton";
import { ApiContext } from "utils/context/api";
import { getEvent, getEventParticipant, LIST_EVENT_PARTICIPANT_URL, LIST_EVENT_URL } from "api/event";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import TalksTableRow from "components/dashboard/talks/TalksTableRow";
import { groupParticipantByEventSlug } from "utils/transformer/event";
import { Event } from "interfaces/event";
import TalksRegisterModal from "components/dashboard/talks/TalksRegisterModal";

const TalksPage: React.FC = () => {
  const router = useRouter();

  const apiContext = useContext(ApiContext);

  const { data: event, error: errorEvent } = useSWR(LIST_EVENT_URL, () =>
    getEvent(apiContext.axios)
  );
  const {
    data: participant,
    error: errorParticipant,
    mutate: mutateParticipant
  } = useSWR(LIST_EVENT_PARTICIPANT_URL, () =>
    getEventParticipant(apiContext.axios)
  );

  const [modalData, setModalData] = useState<null | Event>(null);

  if (errorEvent || errorParticipant) return <Alert error="Masalah koneksi" />;
  if (!event || !participant) return <Spinner height="200px" />;

  const participantBySlug = groupParticipantByEventSlug(participant);

  const triggerPopup = (event: Event) => {
    setModalData(event);
  };

  const generateTableRow = (registered: boolean) => {

    const filteredEvent = event.filter(entry => {
      if (registered) {
        return participantBySlug[entry.slug];
      } else {
        return !(participantBySlug[entry.slug]);
      }
    });

    return filteredEvent.map((entry, idx) => {
      return (<TalksTableRow
        key={idx}
        event={entry}
        idx={idx}
        popupCb={triggerPopup}
        participant={participantBySlug[entry.slug]} />);
    });
  };

  return (
    <>
      <div id="heading">Terdaftar</div>
      <div className="row mt-3 mb-5">
        <div className="col-12" id="table-container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Talks</th>
                <th>Jenis Talks</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {generateTableRow(true)}
            </tbody>
          </table>
        </div>
      </div>

      <div id="heading">Belum Terdaftar</div>

      <div className="row mt-3">
        <div className="col-12" id="table-container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Talks</th>
                <th>Jenis Talks</th>
                <th>Pendaftaran</th>
              </tr>
            </thead>
            <tbody>
              {generateTableRow(false)}
            </tbody>
          </table>
        </div>
      </div>

      <TalksRegisterModal
        event={modalData}
        mutate={mutateParticipant}
        closeCb={() => setModalData(null)} />
      <style jsx>{`
        #heading {
          font-family: Viga;
          font-size: 1.5rem;
          color: #05058d;
        }

        #table-container {
          overflow-x: auto;
        }
        
        table {
          width: 100%;
          text-align: center;
        }

        table th:first-of-type {
          border-top-left-radius: 1rem;
        }

        table tr:first-of-type th:last-of-type {
          border-top-right-radius: 1rem;
        }

        th {
          padding: 0.75rem 0.5rem;
          background-color: #FE789A;
          color: white;
        }
      `}</style>
    </>
  );
};

export default TalksPage;
