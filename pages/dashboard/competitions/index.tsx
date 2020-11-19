import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import CompetitionsPage from "components/page/dashboard/CompetitionsPage";

const IndexPage: React.FC = () => (
  <Layout title="Competitions" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <CompetitionsPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
