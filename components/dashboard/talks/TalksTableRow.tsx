import { Event } from "interfaces/event";

interface Props {
  event: Event,
  idx: number
}

const TalksTableRow: React.FC<Props> = ({ event, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name}</td>
      <td>{event.category}</td>
      <td>Terkonfirmasi</td>
      <td>Belum Terkonfirmasi</td>
      <style jsx>{`
        tr {background-color: #ffffff;}
        tr:nth-child(even) {background-color: #f8f8f8;}

        tr:hover {background-color: #ddd;}

        td {
          border: 1px solid #ddd;
          padding: 0.5rem;
        }  
      `}</style>
    </tr>
  );
};

export default TalksTableRow;