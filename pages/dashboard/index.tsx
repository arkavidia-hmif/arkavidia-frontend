import Layout from '../../components/Layout';
import DashboardWrapper from '../../components/page/Dashboard/DashboardWrapper';
import AnnouncementCard from '../../components/page/Dashboard/Announcement/AnnouncementCard';
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Announcement | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
    <DashboardWrapper />    
    <AnnouncementCard />
  </Layout>
);

export default IndexPage;
