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


const groupTaskResponse = (teamDetail: TeamDetailData): Record<number, TaskResponse[]> => {
  const groupedTaskResponse: Record<number, TaskResponse[]> = {};

  let task = teamDetail.userTaskResponses;
  task = task.concat(teamDetail.taskResponses);


  for (const entry of task) {
    if (!groupedTaskResponse[entry.taskId]) {
      groupedTaskResponse[entry.taskId] = [];
    }
    groupedTaskResponse[entry.taskId].push(entry);
  }

  return groupedTaskResponse;
};

export const filterAndGroupTaskResponse = (
  teamDetail: TeamDetailData,
  myEmail: string
): { [taskId: number]: TaskResponse } => {
  let task = teamDetail.userTaskResponses;
  task = task.concat(teamDetail.taskResponses);

  const allMember = teamDetail.teamMembers;
  const myMember = allMember.filter((entry) => entry.email === myEmail);
  if (myMember.length !== 1) return {};

  const myId = myMember[0].id;

  const filteredResponseById = task.filter(
    (entry) => !entry.teamMemberId || entry.teamMemberId === myId
  );

  const groupedTaskResponse: { [taskId: number]: TaskResponse } = {};

  for (const entry of filteredResponseById) {
    groupedTaskResponse[entry.taskId] = entry;
  }

  return groupedTaskResponse;
};


export const getRequiredAndCompletedTask = (teamDetail: TeamDetailData): [number, number] => {
  const allTaskResponse = groupTaskResponse(teamDetail);
  const activeStage = teamDetail.stages.filter(entry => entry.id === teamDetail.activeStageId)[0];

  const requiredTaskCount = activeStage.tasks.reduce((acc, curr) => {
    if (curr.isUserTask) {
      return acc + teamDetail.teamMembers.length;
    } else {
      return acc + 1;
    }
  }, 0);

  const completedTaskCount = activeStage.tasks.reduce((acc, curr) => {
    if (allTaskResponse[curr.id]) {
      const completedTaskResponse = allTaskResponse[curr.id].filter(entry => entry.status === "completed");
      return acc + completedTaskResponse.length;
    }
    return acc;
  }, 0);

  return [requiredTaskCount, completedTaskCount];
};

export const getResponseStatus = (response?: TaskResponse): string => {
  if (response) {
    const taskStatus = response.status;

    if (taskStatus === "awaiting_validation") return "Menunggu validasi";
    if (taskStatus === "completed") return "Selesai";
    if (taskStatus === "rejected") {
      return `Ditolak - ${response.reason}`;
    }
  }
  return "Belum dilakukan";
};
