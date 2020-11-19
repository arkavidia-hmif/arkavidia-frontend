import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import TeamRegistrationPage from "components/page/dashboard/TeamRegistrationPage";


const RegisterTim: React.FC = () => {
  return (
    <Layout title="Competitions" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <TeamRegistrationPage />
      </DashboardWrapper>
    </Layout>
  );
};

export default RegisterTim;
