import Layout from '../../components/Layout';
import DashboardWrapper from '../../components/page/Dashboard/DashboardWrapper';
import ProfileField from '../../components/page/Dashboard/Profile/ProfileField';
import ModalProfile from '../../components/page/Dashboard/Profile/ModalProfile';
<<<<<<< HEAD

const IndexPage: React.FC = () => (
  <Layout title="Profile | Arkavidia 7.0" background="white">
=======
import { Theme } from '../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Profile | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
    <DashboardWrapper />
    <ProfileField />
    <ModalProfile />
  </Layout>
);

<<<<<<< HEAD
export default IndexPage;
=======
export default IndexPage;
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
