import axios from "axios";
import { useQuery } from "react-query";

export function useStories() {
  const { ...result } = useQuery(["stories"], async () => {
    return await axios.get("https://raw.githubusercontent.com/taher-shoker/social-dashboard/master/src/stories.json");
  });
  return {
    ...result,
    stories: result.data?.data ?? [],
  };
}
