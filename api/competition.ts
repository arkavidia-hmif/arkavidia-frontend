import { AxiosError, AxiosInstance } from "axios";
import { Competition } from "../interfaces/competition";
import { ApiError, StandardError } from "./error";

export const getCompetitions = async (axios: AxiosInstance) => {
  return axios
    .get<Array<Competition>>("/competition")
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
