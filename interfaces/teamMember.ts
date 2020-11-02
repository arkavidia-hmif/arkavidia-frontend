export interface AddTeamMemberForm {
  team_id: string;
  fullName: string;
  email: string;
}

export interface TeamMemberDetail{
  id: number;
  fullName: string;
  email: string;
  hasAccount: string;
  isTeamLeader: string;
  createdAt: string;
}