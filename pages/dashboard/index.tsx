import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import AnnouncementPage from "components/page/dashboard/AnnouncementPage";

const IndexPage: React.FC = () => (
  <Layout title="Announcement" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <AnnouncementPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
