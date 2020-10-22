import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>API url: {process.env.API_BASE_URL}</p>
    <Hero />
    <p>
      <Link href="/about">
        <a>About {process.env.NODE_ENV}</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
