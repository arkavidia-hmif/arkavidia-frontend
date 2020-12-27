import { AxiosError, AxiosInstance } from "axios";
import { Event, EventParticipant, EventRegisterStatus, EventRegistrationDetail } from "interfaces/event";
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

export const registerForEvent = async (
  axios: AxiosInstance,
  eventId: number
): Promise<void> => {
  return axios
    .post("/mainevent/register/", {
      maineventId: eventId
    }).then(() => {
      return;
    }).catch((error: AxiosError) => {
      if (error.response) {
        const errorCode = error.response.data.code;
        if (errorCode === "create_registrant_fail") {
          throw new ApiError<EventRegisterStatus>(EventRegisterStatus.ERROR, "Gagal mendaftar, harap coba lagi dan hubungi pantitia jika gagal kembali");
        }
      }

      throw new ApiError<EventRegisterStatus>(EventRegisterStatus.ERROR, error.message);
    });
};


export const getEventRegistrationDetail = async (
  axios: AxiosInstance,
  registrationId: number
): Promise<EventRegistrationDetail> => {
  return axios
    .get<EventRegistrationDetail>(`/mainevent/registrants/${registrationId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
