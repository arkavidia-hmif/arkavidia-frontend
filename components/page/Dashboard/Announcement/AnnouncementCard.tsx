import { useContext} from "react";
import useSWR from "swr";
import { getAnnouncement, LIST_ANNOUNCEMENT_URL } from "../../../../api/announcement";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";
import DashboardCard from "../../../dashboard/DashboardCard";

const AnnouncementCard: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const {
    data : announcement,
    error : errorAnnouncement,
  } = useSWR(LIST_ANNOUNCEMENT_URL, () => getAnnouncement(apiContext.axios));

  return (
    <div className="container mb-3" id='dashboard-area'>
      <Alert error={errorAnnouncement} />
      <div className="container-fluid">
        {announcement?.map((link, index) => (
          <DashboardCard
            key={index}
            className=""
            title={link.title}
            body={link.message}
            buttonLink={"/"}
            buttonText={"Upload bukti"}
          />
        ))}
      </div>
      <style jsx>{`
        .card {
          padding: 0.625rem;
          border: 1px solid #431785;
          max-width: auto;
          max-height: auto;
          border-radius: 10px;
          background-color: white;
        }

        .title {
          font-family: Viga;
          font-size: 1.25rem;

          color: #05058d;
        }

        .content {
          font-family: Roboto;
          font-size: 1.125rem;

          color: #646464;
        }

        .link {
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;

          color: #623fa2;
        }

        a {
          color: #623fa2;
          text-decoration: none;
        }

        @media (max-width: 450px) {
          .title {
            font-size: 1.125rem;
          }
          .content {
            font-size: 1rem;
          }
          .link {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementCard;
