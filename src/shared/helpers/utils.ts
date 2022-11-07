import { ResponseFeed } from "Types/types";



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

export function sortByFeeds(sortBy:string) {
  const feedsData = JSON.parse(localStorage.getItem('feedsLocal') ?? '{}') ?? []
  var sorted =[]
  switch (sortBy) {
    case 'all':
      sorted = feedsData.sort();
      localStorage.setItem('feedsLocal',JSON.stringify(feedsData))
      break;
      case 'following':
         sorted = feedsData.sort((a:ResponseFeed, b:ResponseFeed) => b['commentsCount'] - a['commentsCount']);
        localStorage.setItem('feedsLocal',JSON.stringify(sorted))

        break;
        case 'newest':
          //  sorted = feedsData.sort((a:ResponseFeed, b:ResponseFeed) => b[sortProperty] - a[sortProperty]);
          // localStorage.setItem('feedsLocal',JSON.stringify(sorted))
          break;
          case 'popular':
            sorted = feedsData.sort((a:ResponseFeed, b:ResponseFeed) => b['likesCount'] - a['likesCount']);
            localStorage.setItem('feedsLocal',JSON.stringify(sorted))
            break;
    default:
      break;
  }
}
