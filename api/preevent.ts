import { AxiosError, AxiosInstance } from "axios";
import { Preevent } from "interfaces/preevent";
import { ApiError, StandardError } from "interfaces/api";

export const LIST_PREEVENT_URL = "/preevent";

export const getPreevent = async (
  axios: AxiosInstance
): Promise<Array<Preevent>> => {
  return axios
    .get<Array<Preevent>>(LIST_PREEVENT_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
