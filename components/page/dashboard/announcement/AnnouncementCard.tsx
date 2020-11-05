import { useContext } from "react";
import useSWR from "swr";
import {
  getAnnouncement,
  LIST_ANNOUNCEMENT_URL,
} from "../../../../api/announcement";
import { ApiContext } from "../../../../utils/context/api";
import Alert from "../../../Alert";
import DashboardCard from "../../../dashboard/DashboardCard";
import Spinner from "../../../Spinner";

const AnnouncementCard: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const {
    data: announcement,
    error: errorAnnouncement,
  } = useSWR(LIST_ANNOUNCEMENT_URL, () => getAnnouncement(apiContext.axios));

  if (errorAnnouncement) return <Alert error={String(errorAnnouncement)} />;
  if (!announcement) return <Spinner height="200px" />;

  if (announcement.length === 0) {
    return (
      <div className="mb-3">
        <p style={{ textAlign: 'center' }}>Belum ada pengumuman</p>
      </div>
    );
  } else {
    return (
      <div className="mb-3">
        {announcement?.map((link, index) => (
          <DashboardCard key={index} title={link.title} body={link.message} />
        ))}
      </div>
    );
  }
};

export default AnnouncementCard;
