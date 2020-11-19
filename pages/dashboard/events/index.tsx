import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import EventsPage from "components/page/dashboard/EventsPage";

const IndexPage: React.FC = () => (
  <Layout title="Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <EventsPage />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
