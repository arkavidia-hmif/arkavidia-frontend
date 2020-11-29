import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import PreEventPage from "components/page/dashboard/PreEventPage";

const IndexPage: React.FC = () => (
  <Layout title="Pre-Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <PreEventPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
