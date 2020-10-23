import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="container">
      <br />
      <Hero />
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
