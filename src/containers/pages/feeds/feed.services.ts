import axios from "axios";
import { useQuery } from "react-query";

interface StoryResponse {
  name: string;
  src: string;
}

export function useFeeds() {
  // Filters Form
  const myQueryKey = 'chart-data'
    const {...result} = useQuery([myQueryKey], async () => {
     return  await axios.get('https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json')
      
    })
  return {
   
  };
}