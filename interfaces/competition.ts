import { Task } from "./task";

export interface Competition {
  id: number;
  name: string;
  slug: string;
  maxTeamMembers: number;
  minTeamMembers: number;
  isRegistrationOpen: boolean;
  viewIcon: string;
}

export interface Stage {
  id: number;
  name: string;
  order: number;
  tasks: Array<Task>;
}
