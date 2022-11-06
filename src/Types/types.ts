export interface ResponseType  {
    id: string,
	month: string,
	camp: string,
	country: string,
	school: string,
	lessons: number
}

export interface DataSet  {
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

export interface Chart {
    labels: string[] | any[],
    dataSets: DataSet[];
    schools: any[];
    colors:string[]
    totalLessions:number
  }
