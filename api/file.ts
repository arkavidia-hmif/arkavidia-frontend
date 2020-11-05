import { AxiosInstance } from "axios";
import { FileResponse } from "../interfaces/file";
import { ApiError, StandardError } from "./error";

export const UPLOAD_FILE_URL = "/uploader/uploaded-file/";
export const RETRIVE_FILE_URL = (file_id: string): string =>
  `/uploader/uploaded-file/${file_id}`;

export const uploadFile = async (
  axios: AxiosInstance,
  file: File,
  description?: string
): Promise<FileResponse> => {
  try {
    const data = new FormData();
    data.append("file", file);
    if (description) data.append("description", description);
    const response = await axios.post(UPLOAD_FILE_URL, data);
    return response.data as FileResponse;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
};

export const retrieveFile = async (
  axios: AxiosInstance,
  file_id: string
): Promise<FileResponse> => {
  try {
    const response = await axios.get(RETRIVE_FILE_URL(file_id));
    return response.data as FileResponse;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
};
