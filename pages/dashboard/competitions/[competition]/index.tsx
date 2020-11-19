import { ReactNode } from "react";
import CompetitionWrapper from "components/page/dashboard/CompetitionWrapper";
import Layout from "components/Layout";
import DashboardWrapper from "components/dashboard/DashboardWrapper";
import TeamInfo from "components/dashboard/competition/TeamInfo";
import { Competition } from "interfaces/competition";
import { TeamData } from "interfaces/team";
import TeamMember from "components/dashboard/competition/TeamMember";
import StageTask from "components/dashboard/competition/stagetask/index";
import { Theme } from "styles/theme";

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

  const getStageTaskComponent = (
    team: TeamData,
    selection: number
  ): ReactNode => <StageTask team={team} selection={selection} />;

  return (
    <Layout title="Informasi Tim" background={Theme.bgColors.whtogr}>
      <DashboardWrapper>
        <CompetitionWrapper
          teamInfo={getTeamInfoComponent}
          teamMember={getTeamMemberComponent}
          stageTask={getStageTaskComponent}
        />
      </DashboardWrapper>
    </Layout>
  );
};

export default StatusTim;
