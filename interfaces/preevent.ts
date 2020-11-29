import { UserData } from "./auth";
import { Task } from "./task";

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


export interface PreeventParticipant {
  id: number,
  preevent: Preevent,
  user: UserData,
  isParticipating: boolean
  category: string,
}

export enum PreeventRegisterStatus {
  ERROR,
  CLOSED,
  FULL
}
