import { IProject } from '@types'

export const HEADINGS = [
  'Name',
  'Type',
  'Description',
  'Technologies'
]

export enum ProjectType {
  COMMERCIAL = 'COMMERCIAL',
  PRIVATE = 'PRIVATE',
  TRAINING = 'TRAINING',
}

export const PROJECTS: IProject[] = [
  {
    name: 'docuForce',
    description: 'projects:description:dF',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    url: 'https://docuforce.infologistics.ru/'
  },
  {
    name: 'docuForce Mobile',
    description: 'projects:description:dFM',
    technologies: 'Cordova, TypeScript, React, Redux, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    url: ''
  },
  {
    name: 'RM-Keeper',
    description: 'projects:description:rmk',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    url: 'https://rm-keeper.infologistics.ru'
  },
  {
    name: 'Frontend Libraries',
    description: 'projects:description:fl',
    technologies: 'TypeScript, React, SCSS, Webpack/Rollup, Styleguidist',
    type: ProjectType.COMMERCIAL,
    url: 'https://www.npmjs.com/package/@infologistics/frontend-libraries'
  },
  {
    name: 'RC-Lib',
    description: 'projects:description:rclib',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack, Storybook',
    type: ProjectType.PRIVATE,
    url: 'https://www.npmjs.com/package/@neikan/rc-lib'
  },
  {
    name: 'Resume',
    description: 'projects:description:resume',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack',
    type: ProjectType.PRIVATE,
    url: 'https://neikan.pro'
  },
  {
    name: 'What To Watch',
    description: 'projects:description:whatToWatch',
    technologies: 'JavaScript, React, Redux, Jest, Enzyme, Webpack',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/htmlacademy-what-to-watch'
  },
  {
    name: 'Cinemaddict',
    description: 'projects:description:cinemaddict',
    technologies: 'JavaScript (ES6), Webpack',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/htmlacademy-cinemaddict'
  },
  {
    name: 'Keksobooking',
    description: 'projects:description:keksobooking',
    technologies: 'JavaScript (ES5)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/htmlacademy-keksobooking'
  },
  {
    name: 'Cat Energy',
    description: 'projects:description:catEnergy',
    technologies: 'HTML, CSS, LESS, Gulp',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/htmlacademy-cat-energy'
  },
  {
    name: 'Sedona',
    description: 'projects:description:sedona',
    technologies: 'HTML, CSS',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/htmlacademy-sedona'
  }
]
