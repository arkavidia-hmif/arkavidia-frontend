import DashboardWrapper from "../../../components/dashboard/DashboardWrapper";
import EventsCard from "../../../components/page/dashboard/event/EventsCard";
import Layout from "../../../components/Layout";
import { Theme } from "styles/theme";

const IndexPage: React.FC = () => (
  <Layout title="Events" background={Theme.bgColors.whtogr}>
    <DashboardWrapper>
      <EventsCard />
    </DashboardWrapper>
  </Layout>
);

export default IndexPage;
