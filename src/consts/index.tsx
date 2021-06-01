import { ICertificate, IJobBlock } from '@types'

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

export const JOBS: IJobBlock[] = [
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

export enum JobBlockSide {
  LEFT = 'left',
  RIGHT = 'right'
}

export const CERTIFICATES: ICertificate[] = [
  {
    resourse: 'HTML Academy',
    coursesByYear: [
      {
        year: 2020,
        courses: [
          {
            title: 'React. Development of Complex Front-end Applications',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/147/1264031.pdf'
          },
          {
            title: 'Professional JavaScript, Level 2',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/145/1264031.pdf'
          },
          {
            title: 'Professional HTML & CSS, Level 2',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/157/1264031.pdf'
          },
          {
            title: 'Professional JavaScript, Level 1',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/123/1264031.pdf'
          },
          {
            title: 'Professional HTML & CSS, Level 1',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/155/1264031.pdf'
          }
        ]
      }
    ]
  },

  {
    resourse: 'Software-Testing',
    coursesByYear: [
      {
        year: 2019,
        courses: [
          {
            title: 'Программирование на Java для тестировщиков',
            url: 'http://cert.software-testing.ru/programming/1/sladkov.pdf'
          }
        ]
      },
      {
        year: 2016,
        courses: [
          {
            title: 'НЛО: найти, локализовать и оформить ошибку',
            url: 'http://cert.software-testing.ru/nlo/sladkov.pdf'
          }
        ]
      },
      {
        year: 2015,
        courses: [
          {
            title: 'Интенсив для начинающих тестировщиков',
            url: 'http://cert.software-testing.ru/int/sladkov.pdf'
          }
        ]
      }
    ]
  },

  {
    resourse: 'Microsoft',
    coursesByYear: [
      {
        year: 2015,
        courses: [
          {
            title: 'Managing Projects with Microsoft Project 2013'
          },
          {
            title: 'Managing Project and Portfolios with Project Server 2013'
          }
        ]
      },
      {
        year: 2014,
        courses: [
          {
            title: 'Windows 7 and Office 2010, Deployment'
          }
        ]
      },
      {
        year: 2013,
        courses: [
          {
            title: 'Configuring Windows 8.1'
          },
          {
            title: 'Administering Office 365 for Small Business'
          }
        ]
      }
    ]
  },

  {
    resourse: 'SoloLearn',
    coursesByYear: [
      {
        year: 2017,
        courses: [
          {
            title: 'C# Tutorial title',
            url: 'https://www.sololearn.com/Certificate/1080-3359650/pdf/'
          },
          {
            title: 'JavaScript Tutorial title',
            url: 'https://www.sololearn.com/Certificate/1024-3359650/pdf/'
          },
          {
            title: 'SQL Fundamentals title',
            url: 'https://www.sololearn.com/Certificate/1060-3359650/pdf/'
          }
        ]
      }
    ]
  }
]
