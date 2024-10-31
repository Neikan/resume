import { IExperienceBlock } from '@types'

export enum ExperienceBlockSide {
  LEFT = 'left',
  RIGHT = 'right'
}

export const EXPERIENCES: IExperienceBlock[] = [
  {
    period: 'experience:experience.tl_dev.period',
    company: 'experience:experience.tl_dev.company',
    position: 'experience:experience.tl_dev.position'
  },
  {
    period: 'experience:experience.free.period',
    company: 'experience:experience.free.company',
    position: 'experience:experience.free.position'
  },
  {
    period: 'experience:experience.tl.period',
    company: 'experience:experience.tl.company',
    position: 'experience:experience.tl.position'
  },
  {
    period: 'experience:experience.gc.period',
    company: 'experience:experience.gc.company',
    position: 'experience:experience.gc.position'
  },
  {
    period: 'experience:experience.sri.period',
    company: 'experience:experience.sri.company',
    position: 'experience:experience.sri.position'
  },
  {
    period: 'experience:experience.gj.period',
    company: 'experience:experience.gj.company',
    position: 'experience:experience.gj.position'
  },
  {
    period: 'experience:experience.ga.period',
    company: 'experience:experience.ga.company',
    position: 'experience:experience.ga.position'
  }
]
