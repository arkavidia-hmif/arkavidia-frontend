import React, { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "components/FilledButton";
import { ApiContext } from "utils/context/api";
import useSWR from "swr";
import { getEvent, LIST_EVENT_URL } from "api/event";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import TalksTableRow from "components/dashboard/talks/TalksTableRow";

const ArkavtalkPage: React.FC = () => {
  const router = useRouter();

  const apiContext = useContext(ApiContext);

  const { data: event, error: errorEvent } = useSWR(LIST_EVENT_URL, () =>
    getEvent(apiContext.axios)
  );

  if (errorEvent) return <Alert error="Masalah koneksi" />;
  if (!event) return <Spinner height="200px" />;

  const generateTableRow = () => {
    return event.map((entry, idx) => {
      return (<TalksTableRow key={idx} event={entry} idx={idx} />);
    });
  };


  return (
    <>
      <div className="row">
        <div className="col-12">
          <table>
            <tr>
              <th>No</th>
              <th>Judul Talks</th>
              <th>Jenis Talks</th>
              <th>Status Pembayaran</th>
              <th>Status Kehadiran</th>
            </tr>
            {generateTableRow()}
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 d-flex justify-content-center justify-content-md-start mt-3">
          <FilledButton text="Daftar Arkavidia Talks" padding="0.75em" onClick={() => { router.push("/register"); }} />
        </div>
        <div className="col-md-4 d-flex justify-content-center mt-3">
          <FilledButton text="Konfirmasi Pembayaran" padding="0.75em" onClick={() => { router.push("/login"); }} />
        </div>
        <div className="col-md-4 d-flex justify-content-center justify-content-md-end mt-3">
          <FilledButton text="Konfirmasi Kehadiran" padding="0.75em" onClick={() => { router.push("/about"); }} />
        </div>
      </div>
      <style jsx>{`
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

export default ArkavtalkPage;
