import DashboardWrapper from "components/dashboard/DashboardWrapper";
import Layout from "components/Layout";
import { Theme } from "styles/theme";
import PreEventRegistrationPage from "components/page/dashboard/PreEventRegistrationPage";


const RegisterPreEvent: React.FC = () => {
  return (
    <Layout title="Competitions" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <PreEventRegistrationPage />
      </DashboardWrapper>
    </Layout>
  );
};

export default RegisterPreEvent;
