import { AxiosInstance } from "axios";
import { AuthData, LoginStatus } from "../interfaces/auth";
import { ApiError } from './error';
import { StandardError } from "./error";

export async function login(axios: AxiosInstance, email: string, password: string): Promise<AuthData> {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password
    });

    return response.data as AuthData;
  } catch (e) {
    if (e.response) {
      const errorCode = e.response.data.code;
      if (errorCode === 'login_failed' || errorCode === 'unknown_error') {
        throw new ApiError<LoginStatus>(LoginStatus.INVALID_CREDS, e.response.data.detail);
      } else if (errorCode === 'account_email_not_confirmed') {
        throw new ApiError<LoginStatus>(LoginStatus.EMAIL_NOT_CONFIRMED, e.response.data.detail);
      }
    }

    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}