import React from "react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "components/FilledButton";

const ArkavtalkPage: React.FC = () => {
  const router = useRouter();

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
            <tr>
              <td>1</td>
              <td>Talks 1</td>
              <td>Advanced</td>
              <td>Terkonfirmasi</td>
              <td>Belum Terkonfirmasi</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Talks 2</td>
              <td>Public</td>
              <td>-</td>
              <td>Terkonfirmasi</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Talks 3</td>
              <td>Advanced</td>
              <td>Terkonfirmasi</td>
              <td>Belum Terkonfirmasi</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Talks 4</td>
              <td>Public</td>
              <td>-</td>
              <td>Terkonfirmasi</td>
            </tr>
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

        td {
          border: 1px solid #ddd;
        }

        td {
          padding: 0.5rem;
        }

        th {
          padding: 0.75rem 0.5rem;
        }
        
        tr {background-color: #ffffff;}
        tr:nth-child(even) {background-color: #f8f8f8;}
        
        tr:hover {background-color: #ddd;}
        
        th {
          background-color: #FE789A;
          color: white;
        }
      `}</style>
    </>
  );
};

export default ArkavtalkPage;
