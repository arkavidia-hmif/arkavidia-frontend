import Link from 'next/link'
import Layout from '../../components/Layout'
import DashboardWrapper from '../../components/Dashboard/DashboardWrapper'

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="container">
      <DashboardWrapper />
      <br />
      Profile
      <p>
        <Link href="/about">
          <a>About {process.env.NODE_ENV}</a>
        </Link>
        <p>API url: {process.env.API_BASE_URL}</p>
      </p>
    </div>
  </Layout>
)

export default IndexPage