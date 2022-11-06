import axios from "axios";
import { useQuery } from "react-query";



export function useStories() {
  // Filters Form
    const {...result} = useQuery(['stories'], async () => {
     return  await axios.get('/')
      
    })
  return {
    ...result, stories: result.data?.data ?? [] 
  };
}