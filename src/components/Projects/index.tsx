import React, { FC } from 'react'

const HEADINGS = [
  'Name',
  'Type',
  'Description',
  'Technologies'
]

const PROJECTS = [
  {
    name: '@infologistics/frontend-libraries',
    description: 'Library for common frontend components',
    technologies: 'TypeScript, React, SCSS, Webpack/Rollup, Styleguidist',
    type: 'Commercial',
    url: 'https://www.npmjs.com/package/@infologistics/frontend-libraries'
  },
  {
    name: 'docuForce',
    description: 'Система электронного документооборота',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: 'Commercial',
    url: 'https://docuforce.infologistics.ru/'
  },
  {
    name: 'docuForce Mobile',
    description: 'Мобильный клиент для docuForce',
    technologies: 'Cordova, TypeScript, React, Redux, SASS/SCSS, Webpack',
    type: 'Commercial',
    url: ''
  },
  {
    name: 'RM-Keeper',
    description: 'Cистема электронного хранения',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: 'Commercial',
    url: 'https://rm-keeper.infologistics.ru'
  },
  {
    name: 'RC-Lib',
    description: 'My pet-project: library for common frontend components',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack, Storybook',
    type: 'Private',
    url: 'https://www.npmjs.com/package/@neikan/rc-lib'
  },
  {
    name: 'Resume',
    description: 'This site :)',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack',
    type: 'Private',
    url: 'https://neikan.pro'
  },
  {
    name: 'What To Watch',
    description: 'Online cinema app with ability to log in, rate, comment and watch movies',
    technologies: 'JavaScript, React, Redux, Jest, Enzyme, Webpack',
    type: 'Training',
    url: 'https://github.com/Neikan/htmlacademy-what-to-watch'
  },
  {
    name: 'Cinemaddict',
    description: 'Cinema app for your favorite movies',
    technologies: 'JavaScript (ES6), Webpack',
    type: 'Training',
    url: 'https://github.com/Neikan/htmlacademy-cinemaddict'
  },
  {
    name: 'Keksobooking',
    description: 'A simple "booking"-like app prototype',
    technologies: 'JavaScript (ES5)',
    type: 'Training',
    url: 'https://github.com/Neikan/htmlacademy-keksobooking'
  },
  {
    name: 'Cat Energy',
    description: 'A responsive app prototype to help you find the right nutrition for your cat',
    technologies: 'HTML, CSS, LESS, Gulp',
    type: 'Training',
    url: 'https://github.com/Neikan/htmlacademy-cat-energy'
  },
  {
    name: 'Sedona',
    description: 'Сard site for a small town in Arizona',
    technologies: 'HTML, CSS',
    type: 'Training',
    url: 'https://github.com/Neikan/htmlacademy-sedona'
  }
]

export const Projects: FC = () => {
  return (
    <section className='projects'>
      <h3 className='mb-4'>Projects</h3>
      <table>
        <thead>
          <tr>
            {HEADINGS.map((heading) => (
              <th key={heading} title={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map(({ name, description, technologies, type, url }) => {
            return (
              <tr key={name}>
                <td><a href={url}>{name}</a></td>
                <td>{type}</td>
                <td>{description}</td>
                <td>{technologies}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
