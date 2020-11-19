import Layout from "components/Layout";
import DashboardWrapper from "components/dashboard/DashboardWrapper";
import { Theme } from "styles/theme";
import ProfilePage from "components/page/dashboard/ProfilePage";

const IndexPage: React.FC = () => (
  <Layout title="Profile" background={Theme.bgColors.whtogr}>
    <DashboardWrapper >
      <ProfilePage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
