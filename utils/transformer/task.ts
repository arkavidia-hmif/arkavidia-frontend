import { TaskResponse } from "../../interfaces/task";
import { TeamDetailData } from "../../interfaces/team";

export const getImageSidebar = (
  taskId: number,
  taskResponses: TaskResponse[]
): string => {
  if (typeof taskId === "number" && taskResponses.length >= 0) {
    return "/img/dashboard/submission/tim.png";
  }
  return "/img/dashboard/submission/tim.png";
};


export const filterAndGroupTaskResponse = (task: TaskResponse[], teamDetail: TeamDetailData, myEmail: string): { [taskId: number]: TaskResponse } => {
  const allMember = teamDetail.teamMembers;
  const myMember = allMember.filter((entry) => entry.email === myEmail);
  if (myMember.length !== 1) return {};

  const myId = myMember[0].id;

  const filteredResponseById = task.filter((entry) => entry.teamMemberId === myId);

  const groupedTaskResponse: { [taskId: number]: TaskResponse } = {};

  for (const entry of filteredResponseById) {
    groupedTaskResponse[entry.taskId] = entry;
  }

  return groupedTaskResponse;
};