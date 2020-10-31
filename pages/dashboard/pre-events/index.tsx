import DashboardWrapper from '../../../components/page/Dashboard/DashboardWrapper';
import PreEventsCard from '../../../components/page/Dashboard/Pre-Events/PreEventsCard';
import Layout from '../../../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <PreEventsCard />
  </Layout>
);

export default IndexPage;