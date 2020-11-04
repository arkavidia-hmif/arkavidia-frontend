import { Competition, Stage } from "./competition";
import { TaskResponse } from "./task";

export interface TeamRegistrationForm {
  competitionId: number;
  name: string;
  institution: string;
}

export interface TeamData {
  id: number;
  competition: Competition;
  name: string;
  teamLeaderEmail: string;
  institution: string;
  isParticipating: boolean;
  category: string;
}

export interface TeamDetailData {
  id: number;
  competition: Competition;
  category: string;
  name: string;
  teamLeaderEmail: string;
  institution: string;
  isParticipating: boolean;
  teamMembers: Array<TeamMember>;
  activeStageId: number;
  stages: Array<Stage>;
  taskResponses: Array<TaskResponse>;
  userTaskResponses: Array<TaskResponse>;
  createdAt: string;
}

export interface TeamMember {
  id: number;
  fullName: string;
  email: string;
  hasAccount: boolean;
  isTeamLeader: boolean;
  createdAt: string;
}
