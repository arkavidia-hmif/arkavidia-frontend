import { AxiosError, AxiosInstance } from "axios";
import { AuthData } from "../interfaces/auth";
import { ApiError, StandardError } from "./error";

export const PROFILE_URL = "/auth";

export const getProfile = async (
    axios: AxiosInstance
  ): Promise<AuthData["user"]> => {
    return axios
      .get<AuthData["user"]>(PROFILE_URL)
      .then((response) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        throw new ApiError<StandardError>(StandardError.ERROR, error.message);
      });
  };