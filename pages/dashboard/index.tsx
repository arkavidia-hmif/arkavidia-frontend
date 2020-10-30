import Layout from '../../components/Layout'
import DashboardWrapper from '../../components/Dashboard/DashboardWrapper'
import AnnouncementCard from '../../components/Dashboard/Announcement/AnnouncementCard'

const IndexPage: React.FC = () => (
  <Layout title="Announcement | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <AnnouncementCard />
  </Layout>
)

export default IndexPage