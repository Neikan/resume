import { IJobBlocks } from '@types'

export const Languages = {
  EN: 'en',
  RU: 'ru'
}

export const NS = [
  'about',
  'common'
]

export enum Technology {
  BABEL = 'Babel',
  CORDOVA = 'Apache Cordova',
  CSS = 'CSS',
  ENZYME = 'Enzyme',
  FIGMA = 'Figma',
  GIT = 'Git',
  GULP = 'Gulp',
  HTML = 'HTML',
  JAVASCRIPT = 'JavaScript',
  JEST = 'Jest',
  LESS = 'Less',
  PHOTOSHOP = 'Photoshop',
  POSTMAN = 'Postman',
  REACT = 'React',
  REACT_ROUTER = 'React Router',
  REDUX = 'Redux',
  SASS = 'SASS',
  SQL = 'SQL',
  SWAGGER = 'Swagger',
  STORYBOOK = 'Storybook',
  STYLEGUIDIST = 'Styleguidist',
  TYPESCRIPT = 'TypeScript',
  VSCODE = 'VSCode',
  WEBPACK = 'Webpack',
  WEBSTORM = 'WebStorm',
  ZEPLIN = 'Zeplin'
}

export enum Contact {
  GITHUB = 'https://github.com/Neikan',
  GITLAB = 'https://gitlab.com/Neikan',
  LINKEDIN = 'https://www.linkedin.com/in/neikan',
  MAIL = 'sladkov.e.m@outlook.com',
  PHONE = '+79188900075',
  TELEGRAM = '@Neikein',
  WAKATIME = 'https://wakatime.com/@Neikan'
}

export const Jobs: IJobBlocks = {
  2020: {
    period: 'March 2020 – present',
    company: 'Freelance',
    position: 'Frontend-developer'
  },
  2016: {
    period: 'April 2016 – March 2020',
    company: 'LLC “TerraLink Development”',
    position: 'QA'
  },
  2012: {
    period: 'March 2012 – April 2016',
    company: 'LLC “General Computers”',
    position: 'Consulting engineer'
  },
  '2011H2': {
    period: 'August 2011 – March 2012',
    company: 'SRI “Mechanics and Applied Mathematics of Vorovich I.I.”',
    position: 'Engineer'
  },
  '2011H1': {
    period: 'May 2011 – August 2011',
    company: 'JSC “Gloria Jeans”',
    position: 'Engineer-analyst'
  },
  2009: {
    period: 'April 2009 – March 2011',
    company: 'CJSC “ALL Group”',
    position: 'Network administrator'
  }
}
