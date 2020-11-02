import { Competition, Stage } from "./competition";
import { TaskResponse } from "./task";
import { TeamMember } from "./teamMember";

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
  teamLeaderemail: string;
  institution: string;
  isParticipating: boolean;
  teamMembers: Array<TeamMember>;
  activeStageId: number;
  stages: Array<Stage>;
  taskResponses: Array<TaskResponse>;
  userTaskResponses: Array<TaskResponse>;
  createdAt: string;
}

// export enum TeamRegistrationStatus {
//   ERROR, INVALID_CREDS, EMAIL_NOT_CONFIRMED
// }
