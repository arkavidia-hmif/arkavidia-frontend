import DashboardWrapper from '../../components/dashboard/DashboardWrapper';
import Layout from '../../components/Layout';
import AnnouncementCard from '../../components/page/dashboard/announcement/AnnouncementCard';
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Announcement" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <AnnouncementCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
