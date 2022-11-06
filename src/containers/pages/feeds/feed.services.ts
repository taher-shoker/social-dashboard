import axios from "axios";
import { useQuery } from "react-query";

interface StoryResponse {
  name: string;
  src: string;
}

export function useFeeds() {
  // Filters Form
    const {...result} = useQuery(['s'], async () => {
     return  await axios.get('https://raw.githubusercontent.com/taher-shoker/social-dashboard/master/src/stories.json')
      
    })
  return {
   
  };
}