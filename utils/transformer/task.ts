import { CompetitionTaskResponse, PreeventTaskResponse, TaskResponse } from "../../interfaces/task";
import { TeamDetailData } from "../../interfaces/team";
import { PreeventRegistrationDetail } from "interfaces/preevent";

export const getImageSidebar = (
  taskId: number,
  taskResponses: TaskResponse[]
): string => {
  if (typeof taskId === "number" && taskResponses.length >= 0) {
    return "/img/dashboard/submission/tim.png";
  }
  return "/img/dashboard/submission/tim.png";
};


const groupTaskResponse = (task: Array<TaskResponse>): Record<number, TaskResponse[]> => {
  const groupedTaskResponse: Record<number, TaskResponse[]> = {};

  for (const entry of task) {
    if (!groupedTaskResponse[entry.taskId]) {
      groupedTaskResponse[entry.taskId] = [];
    }
    groupedTaskResponse[entry.taskId].push(entry);
  }

  return groupedTaskResponse;
};

export const filterAndGroupCompetitionTaskResponse = (
  teamDetail: TeamDetailData,
  myEmail: string
): { [taskId: number]: CompetitionTaskResponse } => {
  let task = teamDetail.userTaskResponses;
  task = task.concat(teamDetail.taskResponses);

  const allMember = teamDetail.teamMembers;
  const myMember = allMember.filter((entry) => entry.email === myEmail);
  if (myMember.length !== 1) return {};

  const myId = myMember[0].id;

  return filterAndGroupTaskResponse(task, "teamMemberId", myId);
};

export const filterAndGroupPreeventTaskResponse = (
  registrationDetail: PreeventRegistrationDetail
): Record<number, PreeventTaskResponse> => {
  return filterAndGroupTaskResponse(registrationDetail.taskResponses);
};

const filterAndGroupTaskResponse = <T extends TaskResponse>(
  taskResponse: Array<T>,
  idKey?: keyof T,
  id?: T[keyof T]
): Record<number, T> => {
  let filteredResponseById = taskResponse;
  if (id && idKey) {
    filteredResponseById = taskResponse.filter(
      (entry) => !entry[idKey] || entry[idKey] === id
    );
  }

  const groupedTaskResponse: Record<number, T> = {};

  for (const entry of filteredResponseById) {
    groupedTaskResponse[entry.taskId] = entry;
  }

  return groupedTaskResponse;
};


export const getRequiredAndCompletedCompetitionTask = (teamDetail: TeamDetailData): [number, number] => {
  let task = teamDetail.userTaskResponses;
  task = task.concat(teamDetail.taskResponses);

  const allTaskResponse = groupTaskResponse(task);
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

export const getRequiredAndCompletedPreeventTask = (registrationDetail: PreeventRegistrationDetail): [number, number] => {
  const allTaskResponse = groupTaskResponse(registrationDetail.taskResponses);
  const activeStage = registrationDetail.stages.filter(entry => entry.id === registrationDetail.activeStageId)[0];

  const requiredTaskCount = activeStage.tasks.length;

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
