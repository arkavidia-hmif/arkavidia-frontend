import DashboardWrapper from '../../../components/page/Dashboard/DashboardWrapper'
import EventsCard from '../../../components/page/Dashboard/Events/EventsCard'
import Layout from '../../../components/Layout'

const IndexPage: React.FC = () => (
  <Layout title="Events | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <EventsCard />
  </Layout>
)

export default IndexPage