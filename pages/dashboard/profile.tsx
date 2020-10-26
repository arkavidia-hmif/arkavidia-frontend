import Layout from '../../components/Layout';
import DashboardWrapper from '../../components/page/Dashboard/DashboardWrapper';
import ProfileField from '../../components/page/Dashboard/Profile/ProfileField';
import ModalProfile from '../../components/page/Dashboard/Profile/ModalProfile';

const IndexPage: React.FC = () => (
  <Layout title="Profile | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <ProfileField />
    <ModalProfile />
  </Layout>
);

export default IndexPage;
