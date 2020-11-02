import { AxiosError, AxiosInstance } from "axios";
import { TeamData, TeamRegistrationForm } from "../interfaces/team";
import { ApiError, StandardError } from "./error";

export const createTeam = async (
  axios: AxiosInstance,
  teamForm: TeamRegistrationForm
) => {
  return axios
    .post<TeamData>("/competition/register-team/", teamForm)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
