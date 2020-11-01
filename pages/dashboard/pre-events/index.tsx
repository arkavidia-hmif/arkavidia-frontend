import DashboardWrapper from '../../../components/page/Dashboard/DashboardWrapper';
import PreEventsCard from '../../../components/page/Dashboard/Pre-Events/PreEventsCard';
import Layout from '../../../components/Layout';
<<<<<<< HEAD

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events | Arkavidia 7.0" background="white">
=======
import { Theme } from '../../../styles/theme';

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events | Arkavidia 7.0" background={Theme.bgColors.whtogr}>
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
    <DashboardWrapper />
    <PreEventsCard />
  </Layout>
);

<<<<<<< HEAD
export default IndexPage;
=======
export default IndexPage;
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
