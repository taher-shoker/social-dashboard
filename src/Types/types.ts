export interface ResponseFeed  {
    id: string,
	name: string,
	src: string,
	feedSrc: string,
	likesCount: number,
	isLike: boolean,
    commentsCount: number,
	createAt: string,
}

export interface ResponseStory  {
    id:string,
    school: string,
    lessons:Lessons[],
    totalCount?:number,
    month:string,
    camp:string,
    country:string
  
}

export interface LabelsArr  {
    labels:string[],
}

export  interface Lessons {
    lessons:number,
    month: string
}

