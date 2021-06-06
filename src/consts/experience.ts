import { IExperienceBlock } from '@types'

export enum ExperienceBlockSide {
  LEFT = 'left',
  RIGHT = 'right'
}

export const EXPERIENCES: IExperienceBlock[] = [
  {
    period: 'March 2020 – present',
    company: 'Individual Entrepreneur | Freelance',
    position: 'Frontend-developer'
  },
  {
    period: 'April 2016 – March 2020',
    company: 'LLC “TerraLink Development”',
    position: 'QA'
  },
  {
    period: 'March 2012 – April 2016',
    company: 'LLC “General Computers”',
    position: 'Consulting engineer'
  },
  {
    period: 'August 2011 – March 2012',
    company: 'SRI “Mechanics and Applied Mathematics of Vorovich I.I.”',
    position: 'Engineer'
  },
  {
    period: 'May 2011 – August 2011',
    company: 'JSC “Gloria Jeans”',
    position: 'Engineer-analyst'
  },
  {
    period: 'April 2009 – March 2011',
    company: 'CJSC “ALL Group”',
    position: 'Network administrator'
  }
]
