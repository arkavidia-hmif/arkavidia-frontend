import { Competition } from "./competition";

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

// export enum TeamRegistrationStatus {
//   ERROR, INVALID_CREDS, EMAIL_NOT_CONFIRMED
// }
