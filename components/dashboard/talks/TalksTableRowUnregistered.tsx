import { Event } from "interfaces/event";

interface Props {
  event: Event,
  idx: number,
  registerCb: (event: Event) => void
}

const TalksTableRowUnregistered: React.FC<Props> = ({ event, idx, registerCb }) => {
  const isRegistered = false;

  const clickHandler = () => {
    registerCb(event);
  };

  const getStatusColumn = () => {
    return "Belum terdaftar";
  };

  const getActionLabel = () => {
    return "Daftar";
  };

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{event.name} - {event.shortDesc}</td>
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
          color: #613FB6;
          font-weight: bold;
          cursor: pointer
        }
      `}</style>
    </tr>
  );
};

export default TalksTableRowUnregistered;