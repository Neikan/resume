import { ICertificate } from '@types'

export const CERTIFICATES: ICertificate[] = [
  {
    resourse: 'Udemy',
    coursesByYear: [
      {
        year: 2021,
        courses: [
          {
            title: 'certificates:courses.ud-rm',
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e3248191-075d-47fa-8d71-30c251c668da.pdf'
          }
        ]
      }
    ]
  },

  {
    resourse: 'HTML Academy',
    coursesByYear: [
      {
        year: 2020,
        courses: [
          {
            title: 'certificates:courses.ha-js3',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/147/1264031.pdf'
          },
          {
            title: 'certificates:courses.ha-js2',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/145/1264031.pdf'
          },
          {
            title: 'certificates:courses.ha-html2',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/157/1264031.pdf'
          },
          {
            title: 'certificates:courses.ha-js1',
            url: 'https://assets.htmlacademy.ru/certificates/intensive/123/1264031.pdf'
          },
          {
            title: 'certificates:courses.ha-html1',
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
            title: 'certificates:courses.st-java',
            url: 'http://cert.software-testing.ru/programming/1/sladkov.pdf'
          }
        ]
      },
      {
        year: 2016,
        courses: [
          {
            title: 'certificates:courses.st-nlo',
            url: 'http://cert.software-testing.ru/nlo/sladkov.pdf'
          }
        ]
      },
      {
        year: 2015,
        courses: [
          {
            title: 'certificates:courses.st-begin',
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
            title: 'certificates:courses.m-pr'
          },
          {
            title: 'certificates:courses.m-pr-serv'
          }
        ]
      },
      {
        year: 2014,
        courses: [
          {
            title: 'certificates:courses.m-win7'
          }
        ]
      },
      {
        year: 2013,
        courses: [
          {
            title: 'certificates:courses.m-win8'
          },
          {
            title: 'certificates:courses.m-365'
          }
        ]
      }
    ]
  }
]
