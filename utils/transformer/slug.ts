import { Competition } from "../../interfaces/competition";

export function getCompetitionSlugs(response: Competition[]): string[] {
  const output: string[] = [];
  response.forEach((entry, i) => {
    output[i] = entry.slug;
  });

  return output;
}
