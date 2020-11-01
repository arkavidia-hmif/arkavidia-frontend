import Layout from '../../components/Layout';
import DashboardWrapper from '../../components/dashboard/DashboardWrapper';
import ProfileField from '../../components/page/Dashboard/Profile/ProfileField';
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Profile | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
    <DashboardWrapper />
    <ProfileField />
  </Layout>
);

export default IndexPage;
