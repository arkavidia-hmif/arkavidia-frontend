import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import ArkavtalkPage from "components/page/dashboard/ArkavtalkPage";

const IndexPage: React.FC = () => (
  <Layout title="Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <ArkavtalkPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
