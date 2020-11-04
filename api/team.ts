import { AxiosError, AxiosInstance } from "axios";
import {
  TeamData,
  TeamDetailData,
  TeamRegistrationForm,
} from "../interfaces/team";
import { ApiError, StandardError } from "./error";

export const REGISTER_TEAM_URL = "/competition/register-team/";
export const LIST_TEAM_URL = "/competition/teams/";

export const createTeam = async (
  axios: AxiosInstance,
  teamForm: TeamRegistrationForm
): Promise<TeamData> => {
  return axios
    .post<TeamData>(REGISTER_TEAM_URL, teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getTeam = async (
  axios: AxiosInstance
): Promise<Array<TeamData>> => {
  return axios
    .get<Array<TeamData>>(LIST_TEAM_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getTeamDetail = async (
  axios: AxiosInstance,
  teamId: number
): Promise<TeamDetailData> => {
  return axios
    .get<TeamDetailData>(`/competition/teams/${teamId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const putTeam = async (
  axios: AxiosInstance,
  teamForm: TeamData,
  teamId: string
): Promise<TeamData> => {
  return axios
    .put<TeamData>(`/competition/teams/${teamId}/`, teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const editTeam = async (
  axios: AxiosInstance,
  teamForm: Partial<TeamData>,
  teamId: string
): Promise<TeamData> => {
  return axios
    .patch<TeamData>(`/competition/teams/${teamId}/`, teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const deleteTeam = async (
  axios: AxiosInstance,
  teamId: string
): Promise<void> => {
  return axios
    .delete(`/competition/teams/${teamId}`)
    .then(() => {
      return;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
