export interface Competition {
  id: number;
  name: string;
  slug: string;
  maxTeamMembers: number;
  minTeamMembers: number;
  isRegistrationOpen: boolean;
  viewIcon: string;
}