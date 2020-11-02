import { AxiosInstance } from "axios";
import { CompetitionData, TeamParticipationData } from "../interfaces/competition";
import { ApiError, StandardError } from "./error";

export const LIST_TEAM_URL = '/competition/teams/';
export const LIST_COMPETITION_URL = '/competition/';

export async function listCompetition(axios: AxiosInstance): Promise<CompetitionData[]> {
  try {
    const response = await axios.get(LIST_COMPETITION_URL);

    return response.data as CompetitionData[];
  } catch (e) {
    if (e.response?.data?.detail) {
      throw new ApiError<StandardError>(StandardError.ERROR, e.response.data.detail);
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}

export async function listTeam(axios: AxiosInstance): Promise<TeamParticipationData[]> {
  try {
    const response = await axios.get(LIST_TEAM_URL);

    return response.data as TeamParticipationData[];
  } catch (e) {
    if (e.response?.data?.detail) {
      throw new ApiError<StandardError>(StandardError.ERROR, e.response.data.detail);
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}