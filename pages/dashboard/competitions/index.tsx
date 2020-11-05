import CompetitionsCard from '../../../components/page/dashboard/competition/CompetitionsCard';
import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import Layout from '../../../components/Layout';
import { Theme } from '../../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Competitions" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <CompetitionsCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
