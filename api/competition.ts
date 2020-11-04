import { AxiosError, AxiosInstance } from "axios";
import { Competition } from "../interfaces/competition";
import { TaskResponse } from "../interfaces/task";
import { ApiError, StandardError } from "./error";

export const LIST_COMPETITION_URL = "/competition";
export const SUBMIT_TASK_REPONSE_COMPETITION_URL = (
  team_id: string,
  task_id: string
): string => `/competition/teams/${team_id}/tasks/${task_id}`;

export const getCompetitions = async (
  axios: AxiosInstance
): Promise<Array<Competition>> => {
  return axios
    .get<Array<Competition>>(LIST_COMPETITION_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const submitTaskResponseCompetition = async (
  axios: AxiosInstance,
  task_id: string,
  team_id: string,
  res: string,
  userId: number,
  teamMemberId: number
): Promise<TaskResponse> => {
  try {
    const response = await axios.post(
      SUBMIT_TASK_REPONSE_COMPETITION_URL(team_id, task_id),
      {
        res,
        userId,
        teamMemberId,
      }
    );

    return response.data as TaskResponse;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
};
