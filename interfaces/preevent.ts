import { UserData } from "./auth";
import { PreeventTaskResponse, Task } from "./task";

export interface Preevent {
  id: number;
  name: string;
  subtitle: string;
  slug: string;
  isRegistrationOpen: boolean;
}

export interface Stage {
  id: number;
  name: string;
  order: number;
  tasks: Array<Task>;
}

export interface PreeventRegistration {
  id: number;
  preevent: Preevent;
  user: UserData;
  isParticipating: boolean;
  category: string;
}

export interface PreeventRegistrationDetail extends PreeventRegistration {
  stages: Array<Stage>;
  taskResponses: Array<PreeventTaskResponse>;
  createdAt: string;
  activeStageId: number;
}

export enum PreeventRegisterStatus {
  ERROR,
  CLOSED,
  ALREADY_REGISTERED,
  PROFILE_INCOMPLETE,
  FULL
}