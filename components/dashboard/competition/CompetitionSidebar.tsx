import { useContext } from "react";
import useSWR from "swr";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import { getTeamDetail } from "api/team";
import { Competition } from "interfaces/competition";
import { SidebarEntry, SidebarGroup } from "interfaces/sidebar";
import { TeamData } from "interfaces/team";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import { filterAndGroupCompetitionTaskResponse, getRequiredAndCompletedCompetitionTask } from "utils/transformer/task";
import { AuthContext } from "utils/context/auth";

const sidebarTop: Array<SidebarGroup> = [{
  name: "Tim",
  item: [
    {
      text: "Informasi Tim",
      image: "/img/dashboard/submission/tim.png",
    },
    {
      text: "Anggota Tim",
      image: "/img/dashboard/submission/anggota.png",
    },
  ] as Array<SidebarEntry>,
}];

interface SubmissionProgressProps {
  team: TeamData;
  competition: Competition;
  selection: number;
  setSelection: (selection: number) => void;
}

const CompetitionSidebar: React.FC<SubmissionProgressProps> = ({
  competition,
  team,
  selection,
  setSelection,
}) => {
  const apiContext = useContext(ApiContext);
  const authContext = useContext(AuthContext);

  const {
    data: teamDetail,
    error: teamDetailError,
  } = useSWR(`/competition/teams/${team.id}/`, () =>
    getTeamDetail(apiContext.axios, team.id)
  );

  if (teamDetailError) return <Alert error="Masalah koneksi" />;


  // Status
  let status = "";
  let taskResponseById = {};

  if (teamDetail) {
    taskResponseById = filterAndGroupCompetitionTaskResponse(teamDetail, authContext.auth?.user.email || "");

    if (teamDetail.teamMembers.length < competition.minTeamMembers) {
      status = "Jumlah anggota kurang";
    } else {
      const [requiredTaskCount, completedTaskCount] = getRequiredAndCompletedCompetitionTask(teamDetail);
      if (requiredTaskCount === completedTaskCount) {
        status = "Data tim lengkap";
      } else {
        status = "Data tim belum lengkap";
      }
    }
  }

  return (
    <DashboardSidebar
      title={team.name || "Nama Tim"}
      subtitle={competition.name || "Nama Lomba"}
      status={status}
      additionalSidebar={sidebarTop}
      taskResponse={taskResponseById}
      registrationStage={teamDetail?.stages || []}
      selection={selection}
      setSelection={setSelection}
    />
  );
};

export default CompetitionSidebar;
