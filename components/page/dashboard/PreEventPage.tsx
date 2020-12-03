import { useContext } from "react";
import useSWR from "swr";
import {
  getPreevent,
  getPreeventRegistration,
  LIST_PREEVENT_REGISTRATION_URL,
  LIST_PREEVENT_URL,
} from "api/preevent";
import { ApiContext } from "utils/context/api";
import DashboardCard from "components/dashboard/DashboardCard";
import { Preevent } from "interfaces/preevent";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { groupRegistrationByPreeventSlug } from "utils/transformer/preevent";

const PreEventPage: React.FC = () => {
  const baseUrl = "/dashboard/pre-events/";

  const apiContext = useContext(ApiContext);

  const {
    data: preevent,
    error: errorPreevent,
  } = useSWR(LIST_PREEVENT_URL, () => getPreevent(apiContext.axios));
  const { data: registration, error: errorRegistration } = useSWR(LIST_PREEVENT_REGISTRATION_URL, () => getPreeventRegistration(apiContext.axios));


  if (errorPreevent || errorRegistration) return <Alert error="Masalah koneksi" />;
  if (!(preevent && registration)) return <Spinner height="200px" />;

  const groupedRegistration = groupRegistrationByPreeventSlug(registration);

  const generateCardBody = (subtitle: string): string => {
    return subtitle;
  };

  const generateCardText = (entry: Preevent): string => {
    if (!entry.isRegistrationOpen) {
      return "Pendaftaran ditutup";
    } else {
      if (groupedRegistration[entry.slug] && groupedRegistration[entry.slug].isParticipating) {
        return "Lihat pendaftaran";
      } else {
        return "Daftar";
      }
    }
  };

  const generateUrl = (entry: Preevent): string => {
    if (groupedRegistration[entry.slug] && groupedRegistration[entry.slug].isParticipating) {
      return `${baseUrl}${entry.slug}`;
    } else {
      return `${baseUrl}${entry.slug}/register`;
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
              entry.isRegistrationOpen ? generateUrl(entry) : null
            }
            buttonText={generateCardText(entry)}
          />
        ))}
      </div>
    </div>
  );
};

export default PreEventPage;
