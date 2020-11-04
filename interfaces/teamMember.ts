export enum AddTeamMemberStatus {
  ERROR, TEAM_FULL
}

export interface TeamMemberDetail {
  id: number;
  fullName: string;
  email: string;
  hasAccount: string;
  isTeamLeader: string;
  createdAt: string;
}