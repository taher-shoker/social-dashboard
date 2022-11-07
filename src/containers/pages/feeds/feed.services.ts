import axios from "axios";
import { useQuery } from "react-query";

export function useFeeds() {
  const { ...result } = useQuery(["feeds"], async () => {
    return await axios.get("https://raw.githubusercontent.com/taher-shoker/social-dashboard/master/src/feeds.json");
  });
  if (result.isSuccess && localStorage.getItem("feedsLocal") === null) {
    localStorage.setItem("feedsLocal", JSON.stringify(result.data?.data));
  }
  const feeds = JSON.parse(localStorage.getItem("feedsLocal") || "{}");
  return {
    ...result,
    feeds,
  };
}
