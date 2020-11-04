export interface Task {
  id: number;
  name: string;
  category: string;
  widget: string;
  widgetParameters:
    | string
    | {
        description: string;
        fileExtension: Array<string>;
        maxFileSize: string;
      };
  isUserTask: boolean;
}

export interface TaskResponse {
  taskId: number;
  response: string;
  status: "awaiting_validation" | "completed" | "rejected";
  reason: string;
  lastSubmittedAt: string;
  userId: number;
  teamMemberId: number;
}
