import { AxiosError, AxiosInstance } from "axios";
import { Event, EventParticipant } from "interfaces/event";
import { ApiError, StandardError } from "interfaces/api";

export const LIST_EVENT_URL = "/mainevent";
export const LIST_EVENT_PARTICIPANT_URL = "/mainevent/registrants";

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

export const getEventParticipant = async (
  axios: AxiosInstance
): Promise<Array<EventParticipant>> => {
  return axios
    .get(LIST_EVENT_PARTICIPANT_URL)
    .then(response => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
