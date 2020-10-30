import DashboardWrapper from '../../../components/Dashboard/DashboardWrapper'
import PreEventsCard from '../../../components/Dashboard/Pre-Events/PreEventsCard'
import Layout from '../../../components/Layout'

const IndexPage: React.FC = () => (
  <Layout title="Announcement | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <PreEventsCard />
  </Layout>
)

export default IndexPage