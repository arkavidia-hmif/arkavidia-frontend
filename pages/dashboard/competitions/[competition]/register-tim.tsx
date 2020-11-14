import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import Layout from "../../../../components/Layout";
import TeamRegistration from "../../../../components/page/dashboard/competition/TeamRegistration";
import { Theme } from "styles/theme";


const RegisterTim: React.FC = () => {
  return (
    <Layout title="Competitions" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <TeamRegistration />
      </DashboardWrapper>
    </Layout>
  );
};

export default RegisterTim;
