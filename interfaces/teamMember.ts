export enum AddTeamMemberStatus {
  ERROR,
  TEAM_FULL,
  ALREADY_EXISTS,
  ALREADY_REGISTERED
}

export interface TeamMemberDetail {
  id: number;
  fullName: string;
  email: string;
  hasAccount: string;
  isTeamLeader: string;
  createdAt: string;
}
