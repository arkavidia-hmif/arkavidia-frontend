import { AxiosError, AxiosInstance } from "axios";
import { Preevent, PreeventRegistration, PreeventRegisterStatus, PreeventRegistrationDetail } from "interfaces/preevent";
import { ApiError, StandardError } from "interfaces/api";
import { PreeventTaskResponse } from "interfaces/task";

export const LIST_PREEVENT_URL = "/preevent/";
export const LIST_PREEVENT_REGISTRATION_URL = "/preevent/registrants/";
export const PREEVENT_REGISTRATION_URL = "/preevent/register/";

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

export const registerPreevent = async (
  axios: AxiosInstance,
  preeventId: number
): Promise<PreeventRegistration> => {
  return axios
    .post<PreeventRegistration>(PREEVENT_REGISTRATION_URL, {
      preeventId
    }).then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        const errorCode = error.response.data.code;
        if (errorCode === "create_registrant_fail") {
          throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.ERROR, "Gagal mendaftar, harap coba lagi dan hubungi pantitia jika gagal kembali");
        } else if (errorCode === "preevent_registration_closed") {
          throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.CLOSED, error.response.data.detail);
        } else if (errorCode === "preevent_already_registered") {
          throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.ALREADY_REGISTERED, error.response.data.detail);
        } else if (errorCode === "profile_incomplete") {
          throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.PROFILE_INCOMPLETE, error.response.data.detail);
        }
      }

      throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.ERROR, error.message);
    });
};

export const getPreeventRegistration = async (
  axios: AxiosInstance
): Promise<Array<PreeventRegistration>> => {
  return axios
    .get<Array<PreeventRegistration>>(LIST_PREEVENT_REGISTRATION_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const getPreeventRegistrationDetail = async (
  axios: AxiosInstance,
  registrationId: number
): Promise<PreeventRegistrationDetail> => {
  return axios
    .get<PreeventRegistrationDetail>(`/preevent/registrants/${registrationId}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};

export const submitPreeventTaskResponse = async (
  axios: AxiosInstance,
  registrationId: number,
  taskId: number,
  value: string
): Promise<PreeventTaskResponse> => {
  return axios
    .post<PreeventTaskResponse>(
      `/preevent/registrants/${registrationId}/tasks/${taskId}/`,
      { response: value })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};