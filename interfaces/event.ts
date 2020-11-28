import { UserData } from "./auth";
import { Task } from "./task";

export interface Event {
  id: number;
  name: string;
  slug: string;
  category: string;
  isRegistrationOpen: boolean;
  shortDesc: string;
  beginTime: string;
  endTime: string;
  order: number;
  seatsAvailable: number;
  seatsRemaining: number;
}

export interface Stage {
  id: number;
  name: string;
  order: number;
  tasks: Array<Task>;
}

export interface EventParticipant {
  id: number,
  mainevent: Event,
  user: UserData,
  isParticipating: boolean
}


export enum EventRegisterStatus {
  ERROR,
  FULL
}
