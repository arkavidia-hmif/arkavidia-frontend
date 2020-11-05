import { TaskResponse } from "../../interfaces/task";

export const getImageSidebar = (
  taskId: number,
  userTaskResponses: TaskResponse[]
): string => {
  if (typeof taskId === "number" && userTaskResponses.length >= 0) {
    return "/img/dashboard/submission/tim.png";
  }
  return "/img/dashboard/submission/tim.png";
};
