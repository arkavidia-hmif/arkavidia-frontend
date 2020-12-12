import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import PreEventPage from "components/page/dashboard/PreEventPage";

const AcademyIndex: React.FC = () => (
  <Layout title="Academy" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <PreEventPage academy />
    </DashboardWrapper>
  </Layout>
);

export default AcademyIndex;
