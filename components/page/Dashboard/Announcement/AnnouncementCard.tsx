import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { getAnnouncement } from "../../../../api/announcement";
import { AnnouncementData } from "../../../../interfaces/announcement";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";

const AnnouncementCard: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const apiContext = useContext(ApiContext);
  const [announcement, setAnnouncement] = useState<AnnouncementData>([]);

  useEffect(() => {
    getAnnouncement(apiContext.axios).then((data) => {
      setAnnouncement(data);
    }).catch((e) => {
      setError(e);
    });
  }, []);
  
  return (
    <div className="container mb-3" id='dashboard-area'>
      <Alert error={error} />
      <div className="container-fluid">
        {announcement?.map((link, index) => (
          <div key={index} className="card mt-3">
            <div className="title">{link.title}</div>
            <div className="content">{link.message}</div>
            <div className="link">
              <Link href="/">
                <a>Upload bukti</a>
              </Link>
            </div>
          </div>
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
