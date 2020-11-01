import CompetitionsCard from '../../../components/page/Dashboard/Competitions/CompetitionsCard';
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import Layout from '../../../components/Layout';
import { Theme } from '../../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Competitions | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <CompetitionsCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
