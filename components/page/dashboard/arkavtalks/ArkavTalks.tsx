import React from "react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "../../../FilledButton";

const ArkavTalks: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="container-table">
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
      <div className="container-btn">
        <FilledButton text="Daftar Arkavidia Talks" padding="0.75em 1.5em" onClick={() => { router.push("/register"); }} />
        <FilledButton text="Konfirmasi Pembayaran" padding="0.75em 1.5em" onClick={() => { router.push("/login"); }} />
        <FilledButton text="Konfirmasi Kehadiran" padding="0.75em 1.5em" onClick={() => { router.push("/about"); }} />
      </div>
      <style jsx>{`
        .container-table {
          overflow-x: auto;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
        }

        tr th {
          text-align: center;
        }

        td, th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        tr:nth-child(even){background-color: #f2f2f2;}
        
        tr:hover {background-color: #ddd;}
        
        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #431785;
          color: white;
        }

        .container-btn {
          margin-top: 1rem;
          display: flex;
          width: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        @media only screen and (max-width: 1000px) {
					.container-btn {
						flex-direction: column;
            height: 30vh;
          }
				}
      `}</style>
    </div>
  );
};

export default ArkavTalks;
