import { useContext } from "react";
import useSWR from "swr";
import {
  getPreevent,
  LIST_PREEVENT_URL,
} from "../../../../api/preevent";
import { ApiContext } from "../../../../utils/context/api";
import DashboardCard from "../../../../components/dashboard/DashboardCard";
import { Preevent } from "../../../../interfaces/preevent";
import Alert from "../../../Alert";
import Spinner from "../../../Spinner";

const PreEventsCard: React.FC = () => {

  const baseUrl = "/dashboard/pre-events/";

  const apiContext = useContext(ApiContext);

  const {
    data: preevent,
    error: errorPreevent,
  } = useSWR(LIST_PREEVENT_URL, () => getPreevent(apiContext.axios));

  if (errorPreevent) return <Alert error="Masalah koneksi" />;
  if (!preevent) return <Spinner height="200px" />;

  const generateCardBody = (subtitle: string): string => {
    return subtitle;
  };

  const generateCardText = (entry: Preevent): string => {
    if (!entry.isRegistrationOpen) {
      return "Pendaftaran ditutup";
    } else {
      return "Daftar";
    }
  };
  
  return (
    <div className="container mb-3" id='dashboard-area'>
      <div className="row container-fluid">
        {preevent.map((entry, index) => (
          <DashboardCard
            key={index}
            className="col-md-6 col-lg-4"
            title={entry.name}
            body={generateCardBody(entry.subtitle)}
            buttonLink={
              entry.isRegistrationOpen ? `${baseUrl}${entry.slug}` : null
            }
            buttonText={generateCardText(entry)}
          />
        ))}
      </div>
      <style jsx>{`
        #dashboard-area {
          min-height: 60vh;
        }
        
        .card {
          padding: 0.625rem;
          border: 1px solid #431785;
          max-width: 320px;
          max-height: auto;
          border-radius: 10px;
          background-color: white;
        }

        .title{
          font-family: Viga;
          font-size: 1.25rem;

          color: #05058D;
        }

        .content{
          font-family: Roboto;
          font-size: 1.125rem;

          color: #646464;
        }

        .link{
          display: flex;
          justify-content: flex-end;
          font-family: Roboto;
          font-size: 1.125rem;
          font-weight: bold;

          color: #623FA2;
        }

        a{
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

export default PreEventsCard;
