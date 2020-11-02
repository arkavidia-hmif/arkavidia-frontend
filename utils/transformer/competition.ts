import { TeamData } from "../../interfaces/team";

export function groupTeamByCompetitionSlug(
  response: TeamData[]
): { [slug: string]: TeamData } {
  const output: { [slug: string]: TeamData } = {};
  response.forEach((entry) => {
    output[entry.competition.slug] = entry;
  });

  return output;
}
