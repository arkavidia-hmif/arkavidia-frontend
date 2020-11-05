import Layout from '../../components/Layout';
import DashboardWrapper from '../../components/dashboard/DashboardWrapper';
import ProfileField from '../../components/page/dashboard/profile/ProfileField';
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Profile" background={Theme.bgColors.whtogr}>
    <DashboardWrapper >
      <ProfileField />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
