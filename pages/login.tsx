import Link from 'next/link'
import Layout from '../components/Layout'
import Login from '../components/Login'

const LoginPage: React.FC = () => (
  <Layout title="Login">
    {/* <div className="container">
      <Login />
    </div> */}
    <Login />
  </Layout>
)

export default LoginPage
