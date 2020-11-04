import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { getCompetitions, LIST_COMPETITION_URL } from "../../api/competition";
import { getTeam, LIST_TEAM_URL } from "../../api/team";
import { Competition } from "../../interfaces/competition";
import { TeamData } from "../../interfaces/team";

export interface UseTeamCompetitionInterface {
  getTeamBySlug: (slug: string) => TeamData | undefined;
  getCompetitionBySlug: (slug: string) => Competition | undefined;
  isLoaded: boolean;
  isError: boolean;
  teams: Array<TeamData> | undefined;
  competitions: Array<Competition> | undefined;
}

export const useTeamCompetition = (
  axios: AxiosInstance
): UseTeamCompetitionInterface => {
  const [isLoaded, setLoaded] = useState(false);
  const [isError, setError] = useState(false);

  const {
    data: competitions,
    error: errorCompetitions,
  } = useSWR(LIST_COMPETITION_URL, () => getCompetitions(axios));
  const { data: teams, error: errorTeams } = useSWR(LIST_TEAM_URL, () =>
    getTeam(axios)
  );

  const getTeamBySlug = (slug: string) => {
    const team = teams?.filter((t) => t.competition.slug === slug);
    return team ? team[0] : undefined;
  };
  const getCompetitionBySlug = (slug: string) => {
    const competition = competitions?.filter((c) => c.slug === slug);
    return competition ? competition[0] : undefined;
  };

  useEffect(() => {
    setLoaded(!!(competitions && teams));
    setError(errorCompetitions || errorTeams);
  }, [errorCompetitions, errorTeams, setError, setLoaded]);

  return {
    getTeamBySlug,
    getCompetitionBySlug,
    isLoaded,
    isError,
    teams,
    competitions,
  };
};
