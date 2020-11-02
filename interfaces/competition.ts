export type CompetitionData = {
  id: number,
  name: string,
  slug: string,
  maxTeamMembers: number,
  minTeamMembers: number,
  isRegistrationOpen: boolean,
  viewIcon: string
}

export type TeamParticipationData = {
  id: number,
  competition: CompetitionData,
  teamLeaderEmail: string,
  institution: string,
  isParticipating: boolean,
  category: string
}