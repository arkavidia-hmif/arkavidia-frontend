import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import TalksPage from "components/page/dashboard/TalksPage";

const IndexPage: React.FC = () => (
  <Layout title="Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <TalksPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
