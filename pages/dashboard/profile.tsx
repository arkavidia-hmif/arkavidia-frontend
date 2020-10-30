import Layout from '../../components/Layout'
import DashboardWrapper from '../../components/Dashboard/DashboardWrapper'
import ProfileField from '../../components/Dashboard/Profile/ProfileField'
import ModalProfile from '../../components/Dashboard/Profile/ModalProfile'

const IndexPage: React.FC = () => (
  <Layout title="Profile | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <ProfileField />
    <ModalProfile />
  </Layout>
)

export default IndexPage