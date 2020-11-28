import Link from "next/link";
import { Event, EventParticipant } from "interfaces/event";

interface Props {
  event: Event,
  idx: number,
  participant?: EventParticipant
}

const TalksTableRow: React.FC<Props> = ({ event, idx, participant }) => {
  const isRegistered = !!participant;
  const status = isRegistered ? "Terdaftar" : "Belum terdaftar";

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name}</td>
      <td>{event.category}</td>
      <td>{status}</td>
      <td><Link href={`/dashboard/arkav-talks/${event.slug}`}><a>{isRegistered ? "Lihat" : "Daftar"}</a></Link></td>
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
        }
      `}</style>
    </tr>
  );
};

export default TalksTableRow;