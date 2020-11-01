
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../utils/context/api";
import { AuthContext } from "../../../../utils/context/auth";
import Alert from "../../../Alert";

const AnnouncementCard: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);
  const token = authContext.auth?.token; 

  //fetch announcment list
  const [announcement, setAnnouncement] = useState([]);

  const getAnnouncement = () => {

    const config = {
      headers : {
        "Content-type" : "application/json",
        "Authorization" :  `Bearer ${token}`
      }
    };
 
    apiContext.axios.get('/announcement/announcements/', config)
      .then((data) => {setAnnouncement(data.data); })
      .catch((err) => {setError(err.code); });
  };
  useEffect(() => {
    getAnnouncement();
  }, []);
  
  // example data
  // const ex = [
  //   {
  //     title: "COMPETITIVE PROGRAMMING",
  //     content: "BATAS waktu",
  //   },
  //   {
  //     title: "ARKALOGICA",
  //     content: "BATAS waktu",
  //   },
  // ];

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
        #dashboard-area {
          min-height: 60vh;
        }

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
