import { AxiosError, AxiosInstance } from "axios";
import { Preevent, PreeventParticipant, PreeventRegisterStatus } from "interfaces/preevent";
import { ApiError, StandardError } from "interfaces/api";

export const LIST_PREEVENT_URL = "/preevent";
export const LIST_PREEVENT_PARTICIPANT_URL = "/preevent/registrants";
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
): Promise<PreeventParticipant> => {
  return axios
    .post<PreeventParticipant>(PREEVENT_REGISTRATION_URL, {
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
        }
      }

      throw new ApiError<PreeventRegisterStatus>(PreeventRegisterStatus.ERROR, error.message);
    });
};

export const getPreeventRegistration = async (
  axios: AxiosInstance
): Promise<Array<PreeventParticipant>> => {
  return axios
    .get<Array<PreeventParticipant>>(LIST_PREEVENT_PARTICIPANT_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new ApiError<StandardError>(StandardError.ERROR, error.message);
    });
};
