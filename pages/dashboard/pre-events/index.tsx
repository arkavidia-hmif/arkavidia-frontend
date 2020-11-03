import DashboardWrapper from '../../../components/dashboard/DashboardWrapper';
import PreEventsCard from '../../../components/page/Dashboard/preevent/PreEventsCard';
import Layout from '../../../components/Layout';
import { Theme } from '../../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper >
      <PreEventsCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
