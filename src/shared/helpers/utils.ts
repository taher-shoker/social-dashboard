import { ResponseFeed } from "Types/types";

export function sortByMonth(arr:[]) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

return  arr.sort(function(a:any, b:any){
      return months.indexOf(a.month)
           - months.indexOf(b.month);
  });
}

export function addLike(id:string) {
  const feedsData = JSON.parse(localStorage.getItem('feedsLocal') ?? '{}') ?? []

  const newFeeds = feedsData?.map((obj:ResponseFeed) => {
    if (obj.id === id) {
      return {...obj, isLike: true,likesCount: obj.likesCount+1};
    }
    return obj;
  }); 
  localStorage.setItem('feedsLocal',JSON.stringify(newFeeds))
}

export function removeLike(id:string) {
  const feedsData = JSON.parse(localStorage.getItem('feedsLocal') ?? '{}') ?? []

  const newFeeds = feedsData?.map((obj:ResponseFeed) => {
    if (obj.id === id) {
      return {...obj, isLike: false,likesCount: obj.likesCount-1};
    }
    return obj;
  }); 
  localStorage.setItem('feedsLocal',JSON.stringify(newFeeds))
}
