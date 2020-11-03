import { ReactNode } from "react";
import { Theme } from "../../../../styles/theme";
import CompetitionWrapper from "../../../../components/page/Dashboard/Competitions/CompetitionWrapper";
import Layout from "../../../../components/Layout";
import DashboardWrapper from "../../../../components/dashboard/DashboardWrapper";
import TeamInfo from "../../../../components/page/Dashboard/Competitions/TeamInfo";
import { Competition } from "../../../../interfaces/competition";
import { TeamData } from "../../../../interfaces/team";
import TeamMember from "../../../../components/page/Dashboard/Competitions/TeamMember";

const StatusTim: React.FC = () => {
  const getTeamInfoComponent = (
    team: TeamData,
    competition: Competition
  ): ReactNode => {
    return <TeamInfo currentTeam={team} currentCompetition={competition} />;
  };
  const getTeamMemberComponent = (
    team: TeamData,
    competition: Competition
  ): ReactNode => {
    return <TeamMember team={team} competition={competition} />;
  };

  return (
    <Layout title="Informati Tim" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <CompetitionWrapper
          teamInfo={getTeamInfoComponent}
          teamMember={getTeamMemberComponent}
        />
      </DashboardWrapper>
    </Layout>
  );
};

export default StatusTim;
