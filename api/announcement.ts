import { AxiosInstance } from "axios";
import { Announcement } from "interfaces/announcement";
import { ApiError, StandardError } from "interfaces/api";

export const LIST_ANNOUNCEMENT_URL = "/announcement/announcements/";

export async function getAnnouncement(
  axios: AxiosInstance
): Promise<Array<Announcement>> {
  try {
    const response = await axios.get(LIST_ANNOUNCEMENT_URL);
    return response.data as Array<Announcement>;
  } catch (e) {
    throw new ApiError<StandardError>(StandardError.ERROR, e.message);
  }
}
