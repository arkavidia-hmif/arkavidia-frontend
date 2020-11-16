import { useContext } from "react";
import useSWR from "swr";
import { getTeamDetail } from "../../../../../api/team";
import { Competition } from "../../../../../interfaces/competition";
import { SidebarEntry } from "../../../../../interfaces/sidebar";
import { TeamData } from "../../../../../interfaces/team";
import { ApiContext } from "../../../../../utils/context/api";
import Alert from "../../../../Alert";
import { filterAndGroupTaskResponse } from "../../../../../utils/transformer/task";
import { AuthContext } from "../../../../../utils/context/auth";
import { TaskResponse } from "../../../../../interfaces/task";
import SidebarSection from "./SidebarSection";

interface SubmissionProgressProps {
  team: TeamData;
  competition: Competition;
  selection: number;
  setSelection: (selection: number) => void;
}

const sidebarTop = {
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
  ] as SidebarEntry[],
};

const CompetitionSidebar: React.FC<SubmissionProgressProps> = ({
  team,
  competition,
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

  const sidebarData = [sidebarTop];
  const taskResponse = [];

  const getImageSidebar = (response?: TaskResponse): string => {
    if (!response) return "/img/dashboard/submission/empty.svg";

    if (response.status === "completed") return "/img/dashboard/submission/check.svg";
    if (response.status === "awaiting_validation") return "/img/dashboard/submission/waiting.svg";
    if (response.status === "rejected") return "/img/dashboard/submission/cross.svg";

    return "/img/dashboard/submission/cross.svg";
  };

  if (teamDetail) {
    const taskResponseById = filterAndGroupTaskResponse(teamDetail, authContext.auth?.user.email || "");

    for (const stage of teamDetail.stages) {
      const item = [];
      for (const task of stage.tasks) {
        item.push({
          text: task.name,
          widget: task.widget,
          image: getImageSidebar(taskResponseById[task.id]),
          param:
            typeof task.widgetParameters === "string"
              ? task.widgetParameters
              : task.widgetParameters.description,
        });
      }
      sidebarData.push({
        name: stage.name,
        item,
      });
    }
    for (const usertaskResponse of teamDetail.userTaskResponses) {
      taskResponse.push(usertaskResponse);
    }
  }

  return (
    <div className="container mb-3 card">
      <h2>{team.name || "Nama Tim"}</h2>
      <p className="">{competition.name || "Nama Lomba"}</p>
      <SidebarSection
        data={sidebarData}
        selection={selection}
        setSelection={setSelection}
      />
      <style jsx>{`
        h2 {
          margin-bottom: 0;
          margin-top: 1rem;
          font-size: 1.5rem;
          line-height: 31px;
        }

        p {
          font-size: 0.8rem;
        }

        .card {
          background: linear-gradient(180deg, #ffffff 0%, transparent 100%),
            linear-gradient(180deg, #ffbdea 0%, transparent 100%), #f3a9dd;
          border: 0.46875px solid #05058d;
          box-sizing: border-box;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CompetitionSidebar;
