import DashboardWrapper from '../../components/dashboard/DashboardWrapper';
import Layout from '../../components/Layout';
import AnnouncementCard from '../../components/page/Dashboard/Announcement/AnnouncementCard';
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Announcement | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <AnnouncementCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
