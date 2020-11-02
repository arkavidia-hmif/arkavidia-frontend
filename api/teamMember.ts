import { AxiosError, AxiosInstance } from "axios";
import { TeamMember } from "../interfaces/team";
import { AddTeamMemberForm, TeamMemberDetail } from "../interfaces/teamMember";
import { ApiError, StandardError } from "./error";

export const addTeamMember = async (
  axios: AxiosInstance,
  addTeamMember: AddTeamMemberForm
): Promise<TeamMember> => {
  return axios
    .post<TeamMember>("/competition/teams/{team_id}/members/", addTeamMember)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getTeamMemberDetail = async (
  axios: AxiosInstance,
  team_id: string,
  team_member_id: string
): Promise<TeamMemberDetail> => {
  return axios
    .get<TeamMemberDetail>(`/competition/teams/${team_id}/members/${team_member_id}/`)
    .then((response) => {
    return response.data;
    })
    .catch((error: AxiosError) => {
    throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const putTeamMember = async (
  axios: AxiosInstance,
  addTeamMember: AddTeamMemberForm,
  team_id: string,
  team_member_id: string
): Promise<TeamMember> => {
  return axios
    .put<TeamMember>(`/competition/teams/${team_id}/members/${team_member_id}/`, addTeamMember)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const editTeamMember = async (
  axios: AxiosInstance,
  addTeamMember: Partial<AddTeamMemberForm>,
  team_id: string,
  team_member_id: string
): Promise<TeamMember> => {
  return axios
    .put<TeamMember>(`/competition/teams/${team_id}/members/${team_member_id}/`, addTeamMember)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const deleteTeamMember = async (
  axios: AxiosInstance,
  team_id: string,
  team_member_id: string
): Promise<void> => {
  return axios
    .delete(`/competition/teams/${team_id}/members/${team_member_id}/`)
    .then(() => {
      return;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};