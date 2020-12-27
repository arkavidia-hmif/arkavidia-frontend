import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import TalksPayment from "components/page/dashboard/TalksPayment";
import { Theme } from "styles/theme";

const EventMainPage: React.FC = () => {
  return (
    <Layout title="Events" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <TalksPayment />
      </DashboardWrapper>
    </Layout>
  );
};

export default EventMainPage;