import { TeamParticipationData } from "../../interfaces/competition";

export function groupTeamByCompetitionSlug(response: TeamParticipationData[]): { [slug: string]: TeamParticipationData } {
  const output: { [slug: string]: TeamParticipationData } = {};
  response.forEach((entry) => {
    output[entry.competition.slug] = entry;
  });

  return output;
}