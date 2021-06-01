import { JobBlockSide } from '@consts'

export interface IJobBlock {
  company: string
  period: string
  position: string
}

export interface IJobBlockExtended extends IJobBlock {
  side: JobBlockSide
}

export interface ICertificate {
  resourse: string
  coursesByYear: ICourseByYear[]
}

export interface ICourseByYear {
  year: number
  courses: ICourse[]
}

export interface ICourse {
  title: string
  url?: string
}
