import { AxiosError, AxiosInstance } from "axios";
import { Task, TaskResponse } from "../interfaces/task";
import { TeamMember } from "../interfaces/team";
import { AddTeamMemberForm, AddTeamMemberStatus, TeamMemberDetail } from "../interfaces/teamMember";
import { ApiError, StandardError } from "./error";

export const addTeamMember = async (
  axios: AxiosInstance,
  teamId: number,
  fullName: string,
  email: string
): Promise<TeamMember> => {
  return axios
    .post<TeamMember>(`/competition/teams/${teamId}/members/`, {
      fullName,
      email
    })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        const code = error.response.data.code;
        const detail = error.response.data.detail;

        if (code === 'team_full') {
          throw new ApiError<AddTeamMemberStatus>(AddTeamMemberStatus.TEAM_FULL, detail);
        }
      }
      throw new ApiError<AddTeamMemberStatus>(AddTeamMemberStatus.ERROR, error.message);
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

export const submitTask = async (
  axios: AxiosInstance,
  task_response: TaskResponse,
  task_id: string,
  team_id: string
): Promise<Task> => {
  return axios
    .post<Task>(`/competition/teams/${team_id}/tasks/${task_id}/`, task_response)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};