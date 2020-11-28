import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import Layout from "../../../components/Layout";
import ArkavTalks from "../../../components/page/dashboard/arkavtalks/ArkavTalks";
import { Theme } from "styles/theme";

const IndexPage: React.FC = () => (
  <Layout title="Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <ArkavTalks />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
