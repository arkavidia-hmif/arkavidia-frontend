import { AxiosError, AxiosInstance } from "axios";
import { AuthData, ProfileData } from "../interfaces/auth";
import { ApiError, StandardError } from "./error";

export const PROFILE_URL = "/auth";
export const EDIT_USER_URL = "/auth/edit-user/";

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

export const editProfile = async (
  axios: AxiosInstance,
  truth: ProfileData
): Promise<AuthData["user"]> => {
  try {
    const response = await axios.patch(EDIT_USER_URL, truth);
    return response.data as AuthData["user"];
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e?.message ?? e);
  }
};
// {
//   fullName,
//   currentEducation,
//   institution,
//   phoneNumber,
//   birthDate,
//   address,
// }
