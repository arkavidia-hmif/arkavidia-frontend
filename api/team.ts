import { AxiosError, AxiosInstance } from "axios";
import { TeamData, TeamRegistrationForm } from "../interfaces/team";
import { ApiError, StandardError } from "./error";

export const createTeam = async (
  axios: AxiosInstance,
  teamForm: TeamRegistrationForm
): Promise<TeamData> => {
  return axios
    .post<TeamData>("/competition/register-team/", teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getTeam = async (axios: AxiosInstance): Promise<TeamData> => {
  return axios
    .post<TeamData>("/competition/teams/")
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

// export const getTeamDetail
