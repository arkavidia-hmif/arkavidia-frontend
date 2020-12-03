export interface Stage {
  id: number;
  name: string;
  order: number;
  tasks: Array<Task>;
}

export interface TaskParam {
  description: string;
}

export interface ChoiceTaskParam extends TaskParam {
  options: string[];
}

export interface FileTaskParam extends TaskParam {
  fileExtension: Array<string>;
  maxFileSize: string;
}

interface TextFieldTaskParam {
  name: string;
  regex?: string;
}
export interface MultiTextFieldTaskParam extends TaskParam {
  field: Array<TextFieldTaskParam>;
}

export interface Task {
  id: number;
  name: string;
  category: string;
  widget: string;
  widgetParameters: ChoiceTaskParam | FileTaskParam | TaskParam | MultiTextFieldTaskParam;
  isUserTask: boolean;
}

export interface TaskResponse {
  taskId: number;
  response: string;
  status: "awaiting_validation" | "completed" | "rejected";
  reason: string;
  lastSubmittedAt: string;
}

export interface CompetitionTaskResponse extends TaskResponse {
  userId?: number;
  teamMemberId?: number;
}

export interface PreeventTaskResponse extends TaskResponse {
  registrantId: number;
}

export interface TaskWidget {
  task: Task;
  selection: number;
  response?: TaskResponse;
  submitFunction: (value: string) => Promise<TaskResponse>
  mutate: () => void;
}