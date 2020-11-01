import DashboardWrapper from '../../../components/page/Dashboard/DashboardWrapper';
import EventsCard from '../../../components/page/Dashboard/Events/EventsCard';
import Layout from '../../../components/Layout';
import { Theme } from '../../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Events | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
    <DashboardWrapper />
    <EventsCard />
  </Layout>
);

export default IndexPage;
