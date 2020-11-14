import { AxiosError, AxiosInstance } from "axios";
import { ProfileData, UserData } from "interfaces/auth";
import { ApiError, StandardError } from "interfaces/api";

export const PROFILE_URL = "/auth";
export const EDIT_USER_URL = "/auth/edit-user/";

export const getProfile = async (
  axios: AxiosInstance
): Promise<UserData> => {
  return axios
    .get<UserData>(PROFILE_URL)
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
): Promise<UserData> => {
  try {
    const response = await axios.patch(EDIT_USER_URL, truth);
    return response.data as UserData;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e?.message ?? e);
  }
};
