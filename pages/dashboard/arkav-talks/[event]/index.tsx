import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import TalksWrapper from "components/page/dashboard/TalksWrapper";
import { Theme } from "styles/theme";

const EventMainPage: React.FC = () => {
  return (
    <Layout title="Events" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <TalksWrapper />
      </DashboardWrapper>
    </Layout>
  );
};

export default EventMainPage;