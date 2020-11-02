import { AxiosError, AxiosInstance } from "axios";
import {
  TeamData,
  TeamDetailData,
  TeamRegistrationForm,
} from "../interfaces/team";
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
  teamForm: TeamRegistrationForm,
  teamId: number
): Promise<TeamData> => {
  return axios
    .put<TeamData>(`/competition/teams/${teamId}`, teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const editTeam = async (
  axios: AxiosInstance,
  teamForm: Partial<TeamRegistrationForm>,
  teamId: number
): Promise<TeamData> => {
  return axios
    .put<TeamData>(`/competition/teams/${teamId}`, teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
