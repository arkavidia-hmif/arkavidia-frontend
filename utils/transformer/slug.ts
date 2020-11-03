import { Competition } from "../../interfaces/competition";

export function getCompetitionSlugs(response: Competition[]): string[] {
  const output: string[] = [];
  response.forEach((entry, i) => {
    output[i] = entry.slug;
  });

  return output;
}

export const getCompetitionBySlug = (
  slug: string,
  competitions: Competition[]
): Competition => {
  const result = competitions.filter((comp) => comp.slug === slug);
  if (result.length === 0) throw new Error("Invalid length");
  return result[0];
};
