import { useContext } from "react";
import useSWR from "swr";
import { getEvent, LIST_EVENT_URL } from "api/event";
import { ApiContext } from "utils/context/api";
import DashboardCard from "components/dashboard/DashboardCard";
import { Event } from "interfaces/event";
import Alert from "components/Alert";
import Spinner from "components/Spinner";

const EventsPage: React.FC = () => {
  const baseUrl = "/dashboard/events/";

  const apiContext = useContext(ApiContext);

  const { data: event, error: errorEvent } = useSWR(LIST_EVENT_URL, () =>
    getEvent(apiContext.axios)
  );

  if (errorEvent) return <Alert error="Masalah koneksi" />;
  if (!event) return <Spinner height="200px" />;

  const generateCardBody = (shortDesc: string): string => {
    return shortDesc;
  };

  const generateCardText = (entry: Event): string => {
    if (!entry.isRegistrationOpen) {
      return "Pendaftaran ditutup";
    } else {
      return "Daftar";
    }
  };

  return (
    <div className="mb-3">
      <div className="row">
        {event.map((entry, index) => (
          <DashboardCard
            key={index}
            className="col-md-6 col-lg-4"
            title={entry.name}
            body={generateCardBody(entry.shortDesc)}
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

export default EventsPage;
