import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import FilledButton from "../../../../components/FilledButton";
import { Theme } from "../../../../styles/theme";
import { ApiContext } from "../../../../utils/context/api";
import Spinner from "../../../../components/Spinner";
import Alert from "../../../../components/Alert";
import { useTeamCompetition } from "../../../../utils/hooks/useTeamCompetition";
import CompetitionWrapper from "../../../../components/page/Dashboard/Competitions/CompetitionWrapper";
import Layout from "../../../../components/Layout";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import TeamInfo from "../../../../components/page/Dashboard/Competitions/TeamInfo";

const StatusTim: React.FC = () => {


  return (
    <Layout title="Informati Tim" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <CompetitionWrapper>
          {(team, competition) => {
            return (<TeamInfo currentTeam={team} currentCompetition={competition} />);
          }}
        </CompetitionWrapper >
      </DashboardWrapper>
    </Layout>
  );
};

export default StatusTim;
