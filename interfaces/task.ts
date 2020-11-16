export interface ChoiceTaskParam {
  description: string;
  options: string[];
}

export interface FileTaskParam {
  description: string;
  fileExtension: Array<string>;
  maxFileSize: string;
}

export interface Task {
  id: number;
  name: string;
  category: string;
  widget: string;
  widgetParameters: ChoiceTaskParam | FileTaskParam;
  isUserTask: boolean;
}

export interface TaskResponse {
  taskId: number;
  response: string;
  status: "awaiting_validation" | "completed" | "rejected";
  reason: string;
  lastSubmittedAt: string;
  userId?: number;
  teamMemberId?: number;
}
