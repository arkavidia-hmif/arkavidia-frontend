import Layout from '../components/Layout'
import Login from '../components/PartialPage/Login'
import { Theme } from '../styles/theme'

const LoginPage: React.FC = () => (
  <Layout background={Theme.bgColors.whpipl} title="Login">
    <Login />
  </Layout>
)

export default LoginPage
