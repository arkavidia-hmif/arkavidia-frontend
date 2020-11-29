import Layout from "components/Layout";
import DashboardWrapper from "components/dashboard/DashboardWrapper";
import { Theme } from "styles/theme";
import PreEventWrapper from "components/page/dashboard/PreEventWrapper";

const StatusTim: React.FC = () => {
  return (
    <Layout title="Informasi Pre-Events" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <PreEventWrapper />
      </DashboardWrapper>
    </Layout>
  );
};

export default StatusTim;
