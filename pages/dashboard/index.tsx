<<<<<<< HEAD
import Layout from '../../components/Layout'
import DashboardWrapper from '../../components/page/Dashboard/DashboardWrapper'
import AnnouncementCard from '../../components/page/Dashboard/Announcement/AnnouncementCard'
=======
import Layout from "../../components/Layout";
import DashboardWrapper from "../../components/PartialPage/Dashboard/DashboardWrapper";
import AnnouncementCard from "../../components/PartialPage/Dashboard/Announcement/AnnouncementCard";
>>>>>>> 81ffba4... add basic structure to tim status in dashboard, fix all lint

const IndexPage: React.FC = () => (
  <Layout title="Announcement | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <AnnouncementCard />
  </Layout>
);

export default IndexPage;
