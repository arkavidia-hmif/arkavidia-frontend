import DashboardWrapper from '../../../components/Dashboard/DashboardWrapper'
import EventsCard from '../../../components/Dashboard/Events/EventsCard'
import Layout from '../../../components/Layout'

const IndexPage: React.FC = () => (
  <Layout title="Events | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <EventsCard />
  </Layout>
)

export default IndexPage