import CompetitionsCard from '../../../components/page/Dashboard/Competitions/CompetitionsCard';
import DashboardWrapper from '../../../components/page/Dashboard/DashboardWrapper';
import Layout from '../../../components/Layout';

const IndexPage: React.FC = () => (
  <Layout title="Competitions | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <CompetitionsCard />
  </Layout>
);

export default IndexPage;