import { AxiosError, AxiosInstance } from "axios";
import { Event } from "../interfaces/event";
import { ApiError, StandardError } from "./error";

export const LIST_EVENT_URL = "/mainevent";

export const getEvent = async (
  axios: AxiosInstance
): Promise<Array<Event>> => {
  return axios
    .get<Array<Event>>(LIST_EVENT_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
