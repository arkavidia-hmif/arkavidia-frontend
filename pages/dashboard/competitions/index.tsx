import CompetitionsCard from '../../../components/Dashboard/Competitions/CompetitionsCard'
import DashboardWrapper from '../../../components/Dashboard/DashboardWrapper'
import Layout from '../../../components/Layout'

const IndexPage: React.FC = () => (
  <Layout title="Competitions | Arkavidia 7.0" background="white">
    <DashboardWrapper />
    <CompetitionsCard />
  </Layout>
)

export default IndexPage