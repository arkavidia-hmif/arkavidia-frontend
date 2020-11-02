import { AxiosInstance } from "axios";
import { AnnouncementData } from "../interfaces/announcement";
import { ApiError, StandardError } from "./error";

export async function getAnnouncement(
  axios: AxiosInstance
): Promise<AnnouncementData> {
  try {
    const response = await axios.get("/announcement/announcements/");

    return response.data as AnnouncementData;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e);
  }
}
