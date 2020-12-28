import { AxiosError, AxiosInstance } from "axios";
import { Event, EventRegisterStatus, EventRegistration, EventRegistrationDetail } from "interfaces/event";
import { ApiError, StandardError } from "interfaces/api";
import { TaskResponse } from "interfaces/task";

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

export const getEventRegistration = async (
  axios: AxiosInstance
): Promise<Array<EventRegistration>> => {
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
        } else if (errorCode === "mainevent_registration_closed") {
          throw new ApiError<EventRegisterStatus>(EventRegisterStatus.ERROR, "Pendaftaran belum dibuka");
        } else if (errorCode === "mainevent_already_registered") {
          throw new ApiError<EventRegisterStatus>(EventRegisterStatus.ERROR, "Sudah terdaftar, coba refresh halaman");
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


export const submitEventTaskResponse = async (
  axios: AxiosInstance,
  registrationId: number,
  taskId: number,
  value: string
): Promise<TaskResponse> => {
  return axios
    .post<TaskResponse>(
      `/mainevent/registrants/${registrationId}/tasks/${taskId}/`,
      { response: value })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};