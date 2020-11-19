import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import PreEventsPage from "components/page/dashboard/PreEventsPage";

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <PreEventsPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
