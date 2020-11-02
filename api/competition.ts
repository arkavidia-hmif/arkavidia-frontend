import { AxiosError, AxiosInstance } from "axios";
import { Competition } from "../interfaces/competition";
import { ApiError, StandardError } from "./error";

export const LIST_COMPETITION_URL = "/competition";

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
