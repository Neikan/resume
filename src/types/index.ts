import { ExperienceBlockSide } from '@consts/experience'
import { ProjectType } from '@consts/projects'

export interface IExperienceBlock {
  company: string
  period: string
  position: string
}

export interface IExperienceBlockExtended extends IExperienceBlock {
  side: ExperienceBlockSide
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

export interface IProject {
  name: string
  description: string
  technologies: string
  type: ProjectType
  url?: string
}
