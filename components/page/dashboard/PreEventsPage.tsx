import { useContext } from "react";
import useSWR from "swr";
import {
  getPreevent,
  LIST_PREEVENT_URL,
} from "api/preevent";
import { ApiContext } from "utils/context/api";
import DashboardCard from "components/dashboard/DashboardCard";
import { Preevent } from "interfaces/preevent";
import Alert from "components/Alert";
import Spinner from "components/Spinner";

const PreEventsPage: React.FC = () => {

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
    <div className="mb-3">
      <div className="row">
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
    </div>
  );
};

export default PreEventsPage;
