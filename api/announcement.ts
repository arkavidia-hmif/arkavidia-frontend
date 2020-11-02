import { AxiosInstance } from "axios";
import { AnnouncementData } from "../interfaces/announcement";
import { ApiError, StandardError } from "./error";

export const LIST_ANNOUNCEMENT_URL = "/announcement/announcements/";

export async function getAnnouncement(
  axios: AxiosInstance
): Promise<AnnouncementData> {
  try {
    const response = await axios.get(LIST_ANNOUNCEMENT_URL);
    return response.data as AnnouncementData;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
